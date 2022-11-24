---
layout: default
slug: food-and-drink-menu
menu: user
title: fdm-menu Shortcode
---
You can add your menu to a page using the following shortcode:

`[fdm-menu id="1"]`

Where 1 is the ID of the menu.

To use this shortcode on the page edit screen, just click the + button and add a new shortcode block to the page. Then write or paste in the above shortcode.

<!-- ![Gif of adding the shortcode](/img/{{ page.slug }}/ufaq-add-ultimate-faqs-shortcode.gif) -->

## Attributes

The fdm-menu shortcode takes the following attributes:

`id` Accepts the ID of the desired menu. Must be an integer.

`show_title` Whether or not to display the menu's title. Accepts 0 (hide title) or 1 (show title).

`show_content` Whether or not to display the menu's description. Accepts 0 (hide content) or 1 (show content).

Example:

`[fdm-menu id="1" show_title="1" show_content="1"]`