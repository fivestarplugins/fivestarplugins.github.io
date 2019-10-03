---
layout: default
slug: business-profile
menu: developer
title: Filters
---
Business Profile is packed with actions and filters to help you tailor it to your needs. The following highlights some of the key hooks in lieu of more comprehensive documentation.

_My apologies for the chaotic naming conventions here. I plan on rectifying that._

## bp_schema_types

This filter allows you to add schema types to the list users can choose from. The list has been deliberately kept small since the official [Schema.org](http://schema.org) list is very long.

## bpfwp_settings_page

The main Business Profile page is handled using the [Simple Admin Pages](https://github.com/NateWr/simple-admin-pages) library. The entire page is loaded into an object and can be modified. Here's a [sample gist](https://gist.github.com/NateWr/17402282adce7c0284cf).

## bpfwp_defaults

This filter allows you to adjust the default settings for the Business Profile or Locations. It only provides a schema type and name by default.

## bpfwp_default_display_settings

This filter controls the default arguments used when a call to `bpwfwp_print_contact_card()` is made. These effect the defaults used by the shortcode.

## bpwfwp_component_callbacks

By default, the contact card is printed using a series of function callbacks which print the content. This filter allows you to add, edit, remove or re-order the content that appears in a contact card by default.

The primary use for this filter is to add a piece of data that isn't already added, when you don't want to modify the default `contact-card.php` template. It can also be useful for writing your own custom callback function for a single component, like the address.

## bpfwp_google_map_options

This filter allows you to pass options to the Google Maps object. A common example is setting custom color style parameters:

	function luigi_set_map_options( $opts ) {

		// Don't override styles set by any other code
		if ( empty( $opts['styles'] ) ) {
			$opts['styles'] = array(
				array(
					'stylers' => array(
						array( 'hue' => '#9a8f45' ) )
					)
				),
				array(
					'featureType' => 'water',
					'stylers' => array(
						array( 'hue' => '#0000ff' )
					)
				),
			);
		}

		return $opts;
	}
	add_filter( 'bpfwp_google_map_options', 'luigi_set_map_options' );

Google has lots of good [map customization samples](https://developers.google.com/maps/documentation/javascript/examples/#signed-in-maps).

## bpfwp_location_cpt_args

Modify any of the `register_post_type()` args for locations.
