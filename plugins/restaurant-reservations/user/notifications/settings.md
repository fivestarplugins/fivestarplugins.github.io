---
layout: default
slug: restaurant-reservations
menu: user
title: Notification Settings
---
Five Star Restaurant Reservations sends email notifications when a booking is made, rejected or confirmed. On the **Bookings > Settings > Notifications** page, you will find options to set the reply-to name and address for customer emails, set the admin email address and choose which emails the admin should receive.

![Screenshot of the notifications settings](/img/{{ page.slug }}/rtb-notification-settings.png)

{% include youtube.html id="s1LnEb6xuXw?start=36" %}

The following options are available there:

### Reply-To Name

The name which should appear in the Reply-To field of a user notification email.

### Reply-To Email Address

The email address which should appear in the Reply-To field of a user notification email.

### Admin Notification

Send an email notification to an administrator when a new booking is requested.

### Admin New Confirmed Notification

Send an email notification to an administrator when a new confirmed booking is made.

### Admin Cancellation Notification

Send an email notification to an administrator when a booking is cancelled.

### Admin Email Address

The email address where admin notifications should be sent.

## Premium Version

In the premium version of the plugin, some of the above options have been combined into the [notifications table](notifications-table) configuration tool. As such, the only options necessary in the above section, in the premium version, are **Reply-To Name**, **Reply-To Email Address** and **Admin Email Address**.

![Screenshot of the notifications settings in the premium version](/img/{{ page.slug }}/rtb-notifications-premium-general.png)

Additionally, you'll find the **Admin Update Subject** option just below the list of [template tags](template-tags). This allows you to specify the email subject a user should receive when an admin sends them a custom email message from the Bookings panel.

![Screenshot of the admin update subject option in the notifications settings](/img/{{ page.slug }}/rtb-admin-update-subject.png)
