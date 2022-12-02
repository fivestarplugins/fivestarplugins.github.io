---
layout: default
slug: business-profile
menu: user
title: contact-card Shortcode
---
You can add your contact card to a page using the following shortcode:

`[contact-card]`

To use this shortcode on the page edit screen, just click the + button and add a new shortcode block to the page. Then write or paste in the above shortcode.

![Gif of adding the shortcode](/img/{{ page.slug }}/bpfwp-add-shortcode.gif)

## Attributes

The shortcode supports a number of attributes, which you can use to show or hide parts of your profile.

- `location` &mdash; An optional location post ID. If multiple locations are enabled, you can pass the ID of a location to display the contact card for that location instead of the main business profile.

- `show_name` &mdash; Whether or not to show the name of the business.

- `show_address` &mdash; Whether or not to show the address.

- `show_get_directions` &mdash; Whether or not to show a link to Google maps with directions from the user's current location to the business's address.

- `show_phone` &mdash; Whether or not to show your phone number.

- `show_cell_phone` &mdash; Whether or not to show your cell phone number.

- `show_whatsapp` &mdash; Whether or not to show your WhatsApp number.

- `show_fax` &mdash; Whether or not to show your fax number.

- `show_contact` &mdash; Whether or not to show a link to your contact page, if a contact page has been selected. Otherwise, it will show the email address if you've added one to the business profile.

- `show_opening_hours` &mdash; Whether or not to show your opening hours.

- `show_opening_hours_brief` &mdash; Whether or not to show a short, one-line version of your opening hours. This is turned off by default.

- `show_map` &mdash; Whether or not to show a Google Map with your location.

- `show_ordering_link` &mdash; Whether or not to show your ordering link.

- `show_image` &mdash; Whether or not to show your business image.

Most of these are turned on by default. But you can turn them off by including the attribute and setting it to `0`. For example, the following would show the contact card for the location with ID 123 and would hide the name, directions, phone number and opening hours:

`[contact-card location="123" show_name="0" show_get_directions="0" show_phone="0" show_opening_hours="0"]`

The following would show the full contact card, but display the opening hours in a brief, one-line format:

`[contact-card show_opening_hours_brief="1"]`
