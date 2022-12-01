---
layout: default
slug: restaurant-reservations
menu: user
title: Template Tags
---
You can include a number of Template Tags in your notification emails. These act like placeholders, swapping in information specific to each booking before the email is sent.

![Screenshot of the template tags](/img/{{ page.slug }}/rtb-template-tags.png)

{% include youtube.html id="s1LnEb6xuXw?start=83" %}

For example, let's suppose you included the following in your email template:

> A new booking request has been made by {user_name}.

And then a customer named "John" made a booking request. The email you received would say:

> A new booking request has been made by John.

This allows you to add data from the booking straight into the email, so that you don't need to jump back into your WordPress site to know the most important details.

*If you use the [custom fields](../custom-fields), you'll be able to use new template tags for any of your custom field data.*
