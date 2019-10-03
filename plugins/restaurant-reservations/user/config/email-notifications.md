---
layout: default
slug: restaurant-reservations
menu: user
title: Email Notifications
---
Restaurant Reservations sends email notifications when a booking is made, rejected or confirmed. On the **Bookings > Settings > Notifications** page you can customize these emails to fit your brand.

![Screenshot of the notifications settings page](/img/{{ page.slug }}/settings-notifications.png)

When a booking is made, the customer is sent an email to let them know the request has been received, *but has not yet been accepted*.

A notification email is also sent the administrator so that they know they need to act on a new request. You can disable this by un-checking the **Admin Notification** checkbox.

Once a booking is confirmed or rejected, the customer will receive another email. In the settings on this page, you can customize each one of these emails.

## Understanding the template tags

You can include a number of Template Tags in your notification emails. These act like placeholders, swapping in information specific to each booking before the email is sent.

For example, let's suppose you included the following in your email template:

> A new booking request has been made by {user_name}.

And then a customer named "John" made a booking request. The email you received would say:

> A new booking request has been made by John.

This allows you to add data from the booking straight into the email, so that you don't need to jump back into your WordPress site to know the most important details.

*If you use the [Custom Fields addon](../addon/custom-fields), you'll be able to use new template tags for any of your custom field data.*
