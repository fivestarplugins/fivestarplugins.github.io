---
layout: default
slug: restaurant-reservations
menu: user
title: booking-form Shortcode
---
You can add your booking form to a page using the following shortcode:

`[booking-form]`

To use this shortcode on the page edit screen, just click the + button and add a new shortcode block to the page. Then write or paste in the above shortcode.

<!-- ![Gif of adding the shortcode](/img/{{ page.slug }}/ufaq-add-ultimate-faqs-shortcode.gif) -->

## Attributes

The booking-form shortcode takes the following attribute:

`location` If you are using [multiple locations](../multiple-locations/), you can use this attribute to specify which location (using its ID) the booking should automatically be assigned to.

Example:

`[booking-form location="123"]`
