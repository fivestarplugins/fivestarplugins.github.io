---
layout: default
slug: business-profile
menu: developer
title: Adding Theme Support
---
Business Profile supports the `add_theme_support()` ([documentation](https://developer.wordpress.org/reference/functions/add_theme_support/)) function to easily dequeue styles and scripts, and prevent automated handling of locations.

To make use of this, add the following to your theme's functions.php file:

	add_action( 'after_setup_theme', 'yourtheme_add_business_profile_theme_support' );
	function yourtheme_add_business_profile_theme_support() {

		add_theme_support( 'business-profile', array(

			// Prevent the plugin from automatically displaying a contact card
			// with a location's `the_content()`. Only applies when using the
			// plugin with multiple locations enabled.
			'disable_append_to_content' => true,

			// Prevent the plugin from loading any styles on the frontend
			'disable_styles' => true,

			// Prevent the plugin from loading any scripts on the frontend
			'disable_scripts' => true,
		) );
	}

If you want to nail all three at once you can use the following:

	add_action( 'after_setup_theme', 'yourtheme_add_business_profile_theme_support' );
	function yourtheme_add_business_profile_theme_support() {
		add_theme_support( 'business-profile', true);
	}

**Beware of disabling scripts.** This will prevent the Google Map script from loading. You'll need to load and initialize the maps yourself.

If you're adding theme support, you'll probably want to read about [creating templates](templates) for the plugin.
