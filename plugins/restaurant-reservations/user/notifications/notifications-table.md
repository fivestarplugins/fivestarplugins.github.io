---
layout: default
slug: restaurant-reservations
menu: user
title: Notifications Table
---
The [premium](../premium/ultimate-benefits) and [ultimate](../premium/ultimate-benefits) versions of the plugin come with a table that offers a more advanced way to configure your notifications. You can add as many different notifications as you want for any event. 

All of the default notifications (for pending, confirmed, rejected and cancelled bookings, both for the customer and admin) will be pre-populated in the table. Here you can enable, disable and modify them.

![Gif of modifying a notification](/img/{{ page.slug }}/rtb-notification-table-modify.gif)

For each notification, you will have the following options:

* **Enabled**: Sets whether or not this notification should be active.
* **Event**: Choose which event you want to trigger this notification to.
* **Type**: Enabled in the [ultimate version](../premium/ultimate-benefits), this lets you choose whether the notification should be sent as an email or SMS.
* **Target**: Choose whether this notification is meant for the admin or the customer. 
* **Subject**: Create a subject for the notification (if using email).
* **Message**: Clicking here will open a modal with a text editor, which you can use to create the message for this notification. For a list of template tags that can be used in the message, please see [here](template-tags).

## Ultimate Plan Notification Features

If you are using the ultimate version, you will have access to several additional notification features. As referenced above, you will be able to send any notification as an **SMS** or email message. 

You will also have access to three new notification events. They are:

* **Reservation Reminder**: Send the customer a reminder about their upcoming reservation.
* **Late for Reservation**: Send the customer a notification when they are late for their reservation. This works in tandem with the feature to [check guests in as arrived](../view-bookings/).
* **Post-Reservation**: Send the customer a notification after they have dined at your restaurant. You can use this to request a review, etc.

For these new event triggers, you will also be able to specify a timing. This lets you choose how long before (in the case of the reservation reminder) or after (in the case of the late for reservation or post-reservation notifications) a reservation booking time the notification should be sent.

![Gif of adding an ultimate notification](/img/{{ page.slug }}/rtu-notifications-table.gif)

## Enabling SMS

In order for the SMS messages to work, you will need an active ultimate plan subscription and an SMS credit balance.

You will also need to configure the following options on the **Settings > Notifications** page:

![Screenshot of SMS settings](/img/{{ page.slug }}/rtu-sms-settings.png)

### Ultimate Plan Purchase Email

The email used to purchase your 'Ultimate' plan subscription. Used to verify SMS requests are actually being sent from your site.

### Country Code

What country code should be added to SMS reminders? If no country is specified, phone numbers for reservations should start with +XXX (a plus sign followed by the country code), followed by a space or dash, or else the number the phone number will be assumed to be North American.

### Admin SMS Phone Number
In addition to those two required options, you will also find the **Admin SMS Phone Number** option. Fill this in if you will be setting up any of the admin notifications to be sent via SMS.

### SMS Credits

At the bottom of the nofitications table, it will display the status of your ultimate license as well as how many SMS credits you have remaining.

![Screenshot of SMS credits remaining](/img/{{ page.slug }}/rtu-sms-credits-remaining.png)

For more info about the credits, please see [here](https://www.fivestarplugins.com/ufaqs/what-are-sms-message-credits/).

<!-- ## Tutorial Video

We have also prepared a video that explains all of the reservation reminder settings, which you can view below.

{% include youtube.html id="s1LnEb6xuXw?start=206" %} -->