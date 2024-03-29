---
layout: default
slug: food-and-drink-menu
menu: user
title: Notifications
---
You can configure the plugin to send a notification to the admin and/or customer whenever a new order is submitted and also when the status of an order is changed. These notifications can be sent either as an email or SMS text message. Then content of the messages can be customized on the settings page. 

## Notification Settings

You can change the email address that admin notifications are sent to by going to **Settings > Ordering > Notifications** and using the **Order Email Address** field. 

If you will be sending email notifications, there are options to set the *Reply-To* name and email address that show when the customer receives the email.

If you would like to send **SMS notifications**, then you need to fill in the **"Ultimate" Purchase Email** option with the email address you used to purchase the ultimate version, so your SMS credits can be linked and available.

![Screenshot of the ordering admin notification settings](/img/{{ page.slug }}/fdm-ordering-admin-notification-settings.png)

## Create and Edit Notification Messages

Just below the notification settings, you'll find a the notifications table. Here you can add new notification messages and modify existing ones. For each notification, you will have the following options:

* **Enabled**: Sets whether or not this notification should be active.
* **Status**: Choose which status you want to apply this notification to. When you change an order to this status, it will trigger this notification.
* **Type**: Choose whether the notification should be sent as an email or SMS.
* **Target**: Choose whether this notification is meant for the admin or the customer. 
* **Subject**: Create a subject for the notification (if using email).
* **Message**: Clicking here will open a modal with a text editor, which you can use to create the message for this notification.

You can also optionally have a notification automatically sent to the customer when they place an order on your site. This can be either an SMS or email notification.

![Gif of creating a new notification](/img/{{ page.slug }}/fdm-add-ordering-notification.gif)

## Template Tags

The following template tags are available to be used in the admin and customer notification messages:

`{site_name}` The name/title of your site, as specific in your WordPress General settings.

`{name}` The customer's name.

`{email}` The customer's email address.

`{phone}` The customer's phone number.

`{note}` The customer's note, if they left one.

`{payment_amount}` The total payment amount, if payments are enabled.

`{order_items}` A list of the items ordered by the customer.

`{site_link}` A link back to your site.

`{current_time}` The time the order was placed.

<!-- ---

For an explanation and visual of all ordering notification options available, please see the following video:
 
{% include youtube.html id="sqag_bMMOeo?start=121" %} -->