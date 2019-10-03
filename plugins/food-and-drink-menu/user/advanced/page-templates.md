---
layout: default
slug: food-and-drink-menu
menu: user
title: Page Templates
---
By default, menus will be displayed using your theme's `single.php` template. This is often designed for your site's Posts and is not appropriate for menus.

In the past, the Menu [shortcode](shortcodes) was used so that you could add your menu to a Page, which themes often display in a format more appropriate for menus.

Since version 1.5, Menus include an option to choose the template you'd like to use for your menu.

![Screenshot of the page template selection for menus](/img/{{ page.slug }}/page-templates.png)

This will show you all the available templates you can use from your theme. They may include:

**Default Menu Template**: This is the `single.php` or `single-fdm-menu.php` template in your WordPress theme.

**Default Page Template**: This is the `page.php` template in your WordPress theme, if it exists.

**Page Template: Any Template Name**: If you theme includes additional Page templates, these will be listed with the **Page Template** prefix.

---

*WordPress introduced special post type templates in version 4.7. If your theme includes any templates specifically for the `fdm-menu` post type, these will also be available for selection here.*
