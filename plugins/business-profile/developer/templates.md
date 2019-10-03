---
layout: default
slug: business-profile
menu: developer
title: Custom Templates
---
Business Profile uses two template files to render a contact card. If you're using the plugin in multi-location mode, you can generate custom templates for the single and archive templates which display locations.

## Locating and customizing templates

You'll find two templates in the `/templates` directory of Business Profile.

- `contact-card.php` &mdash; This template controls the output for the default Contact Card. It includes [detailed documentation](https://github.com/NateWr/business-profile/blob/master/templates/contact-card.php) within the template file.
- `opening-hours.php` &mdash; This template controls the output of the opening hours, as it's used in the default Contact Card as well as the `bpwfwp_print_opening_hours()` function.

To overwrite these templates in your own theme, copy each file to a `business-profile-templates` directory within your theme. So if your theme is called `your-theme`, the files should be located at:

	/wp-content/themes/your-theme/business-profile-templates/contact-card.php
	/wp-content/themes/your-theme/business-profile-templates/opening-hours.php

Now any changes you make to the files here will be reflected on your site.

You may notice that these template files don't include a lot. By default, the plugin uses a display architecture based on WordPress [hooks](http://codex.wordpress.org/Plugin_API/Hooks). The content, such as a location name, address, phone number, etc, is displayed using callback functions.

This allows the plugin to be easily extended by third-party plugins. To learn more, read about the [filters](filters) included with the plugin.

But for editing templates on your own site, you can bypass this completely and build your own custom markup. Read the [Helper Functions](#helper-functions) section below for more guidance.

### Additional templates for multiple locations

You can also create custom templates for a specific location by adding the location ID to the template file name. For example, if your location ID is 123, you could create a template named `contact-card-123.php` and it would only be loaded for that location.

In addition to these two bundled templates, you may also want to create single and archive templates for your theme.

Your theme will almost certainly have existing `single.php` and `archive.php` templates. Simply copy these and add a location prefix, so that they are `single-location.php` and `archive-location.php`.

You can then edit those templates files using the helper functions below.

## Helper Functions

A number of helper functions are provided for easily outputting business profile information that is compliant with [Schema.org](http://schema.org). You'll find all of these functions in the [/includes/template-functions.php](https://github.com/NateWr/business-profile/blob/master/includes/template-functions.php) file. They include:

- `bpwfwp_print_name()` &mdash; Print the business name or print a hidden meta tag with the name.
- `bpwfwp_print_address()` &mdash; Print the business address as well as a link to get directions. Or print a hidden meta tag with the address.
- `bpwfwp_print_phone()` &mdash; Print the business phone number or print a hidden meta tag with the name.
- `bpwfwp_print_contact()` &mdash; Print the business contact link or print a hidden meta tag with the contact details. This may be a link to a contact page on your site or an email address, depending on your settings.
- `bpwfwp_print_opening_hours()` &mdash; Print the business opening hours or print a hidden meta tag with the name.
- `bpfwp_print_opening_hours_metatag()` &mdash; Print a hidden meta tag with the details of the opening hours. This is useful if you want to use your own markup for displaying opening hours.
- `bpwfwp_print_map()` &mdash; Print a map pointing to the business's location.
- `bpfwp_print_parent_organization()` &mdash; Print a reference to the parent organization. Used when a location is being displayed.

### bpfwp_set_display()

These helper functions rely on display settings that are typically set when calling the contact card or widget using the `bpwfwp_print_contact_card()` function. These tell the function whether to output a visual display of the setting, or to output a hidden meta tag with the information.

If you're handling your own template and want to set the display toggle for a setting, you can use the `bpfwp_set_display()` function:

	bpfwp_set_display( 'show_opening_hours_brief', true );
	bpwfwp_print_opening_hours();

These settings are identical to the `[contact-card]` [shortcode arguments](../user/faq#shortcode).

### bpfwp_setting()

If you want to bypass all of the template helper functions and go straight to the settings, you can use the `bpfwp_setting()` function:

	// First retrieve a reference to the current location. This will be a
	// location ID if a location is being displayed, or false if the main
	// business profile is being displayed. Either way, the `bpfwp_setting()`
	// knows how to retrieve the appropriate setting.
	$location = bpfwp_get_display( 'location' );
	echo bpfwp_setting( 'address', $location );

If you're modifying the `single-location.php` or `archive-location.php` template files, you may prefer to go straight to WordPress for the current location ID:

	$location = get_the_ID();
	echo bpfwp_setting( 'address', $location );

### bpfwp_get_display()

If you want to respect the display toggles available in the widget or with the shortcode, you'll need to check the display setting first by using the `bpfwp_get_display()` function:

	if ( bpfwp_get_display( 'show_address' ) ) {
		$location = bpfwp_setting( 'location' );
		echo bpfwp_setting( 'address', $location );
	}

If you're using this plugin, you almost certainly want the [Schema.org](http://schema.org) markup. When going straight to the setting value, you'll have to output the appropriate markup yourself. Here's how the previous example would look properly marked up:


	if ( bpfwp_get_display( 'show_address' ) ) {
		$location = bpfwp_setting( 'location' );
		echo '<div itemprop="address">' . bpfwp_setting( 'address', $location ) . '</div>';
	}

You're strongly encouraged to use the helper template functions, which will handle all the appropriate markup for you.

You can test your markup using [Google's Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/u/0/).
