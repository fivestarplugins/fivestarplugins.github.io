---
layout: default
slug: food-and-drink-menu
menu: user
title: Display Your Menu
---
To add your menu to a page, you can use either the included Gutenberg block or shortcode.

For the Gutenberg block, on the page edit screen, just click the + button to add a new block, search for **booking form** and add the **Booking Form** block to the page.

![Gif of adding the Menu block](/img/{{ page.slug }}/add-block.gif)

[More information about the block](../blocks-shortcodes/menu-block).

You can also add the booking form to your page using the following shortcode:

`[fdm-menu id="1"]`

Where 1 is the ID of the menu.

To use this shortcode on the page edit screen, just click the + button and add a new shortcode block to the page. Then write or paste in the above shortcode.

<!-- ![Gif of adding the shortcode](/img/{{ page.slug }}/urp-add-submit-review-shortcode.gif) -->

You can view more information and the available shortcode attributes [here](../blocks-shortcodes/fdm-menu-shortcode).

## Link to your menu from a navigation menu

Each Menu has it's own URL, and you can link to this directly from any navigation menu in your WordPress site.

To do this, go to the **Appearance > Menus** page in your WordPress admin area.

![Screenshot of the WordPress menus page](/img/{{ page.slug }}/add-to-nav-menu.png)

You'll see a new section of links you can add to the navigation menus specifically for your Five Star Restaurant Menus. Add any Menu you've created from this page to link directly to it.

When you link to a Menu this way, it will use the same template as regular WordPress Posts. That's not appropriate in a lot of cases. If your theme includes a full-width page template, you'll probably want to use that so that your menu has enough room.

To use a different template, go to **Menus** and edit your menu. Look for the **Post Attributes** section on the side and change the Template. If you don't see the Post Attributes section or the Template option, that means your theme doesn't support any other templates.

## Add a menu to any widget area

This plugin also comes with widgets for displaying any Menu or Menu Item in a sidebar.

You'll find these under the **Appearance > Widgets** page in your WordPress admin area. Simply add them to any widget area and select the Menu or Menu Item you wish to display.