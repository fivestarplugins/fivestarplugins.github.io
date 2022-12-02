---
layout: default
slug: business-profile
menu: user
title: Multiple Locations
plugin_title: Business Profile
plugin_url: https://wordpress.org/plugins/business-profile
---
The Five Star Business Profile and Schema plugin comes with support for multiple locations. You can enable this feature by going to **Settings > Basic** and toggling on the **Multiple Locations** option at the bottom.

![Screenshot of locations option](/img/{{ page.slug }}/bpfwp-multiple-locations-enable.png)

Once activated, you'll see a new **Locations** page appear in your WordPress admin area, where you can add and edit locations.

![Screenshot of locations option](/img/{{ page.slug }}/bpfwp-locations-list.png)

When adding or editing a location, you'll be able to manage all the same information as your main Business Profile.

## Display your locations

Each location will automatically have a page generated which displays a contact card for that location. A list of locations can also be found at the archive page, which will typically be at `your-domain.com/location`.

You can also add the Contact Card block to any page or post. Once added, click on the block and change the location in the options panel on the side.

You can also pass an additional `location` argument to the `[contact-card]` shortcode in any page or post. See all the [shortcode attributes](../faq#shortcode).

The Contact Card widget also includes a **Location** option. You can find this under **Appearance > Widgets**.

## Understanding the Schema.org relationship

The [Schema.org](http://schema.org) markup automatically assigns each location a `parentOrganization` attribute, which tells search engines like Google that this location is one branch of your overall business.

To ensure that Google understands your business properly, be sure to display the main Business Profile details somewhere on your site.

You may notice that the main Business Profile doesn't appear in the list of locations on the archive page. Leave this the way it is if your main profile points to a headquarters of some sort. But if it's a location just like your others, such as an original restaurant site for a restaurant with a few branches, you may want to create an extra location entry for this place.

## Customizing the display of your locations

You can customize how the locations are displayed by modifying template files. Learn more in the [developer documentation](../../developer).
