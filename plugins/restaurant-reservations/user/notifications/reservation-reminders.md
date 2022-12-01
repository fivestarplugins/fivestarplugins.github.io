---
layout: default
slug: restaurant-reservations
menu: user
title: Reservation Reminders
---
The [ultimate version](../premium/ultimate-benefits) of the plugin comes with the ability to send reservation reminders, late arrival notifcations and post-reservation follow-up messages, either via SMS or email.

In order for these to work, you will need an active ultimate plan subscription and an SMS credit balance, if you would like to use SMS as a messaging type. 

You will also need to configure the following options on the **Settings > Notifications** page:

![Screenshot of reservation reminder settings](/img/{{ page.slug }}/rtb-reservation-reminder-settings.png)

### Ultimate Plan Purchase Email

The email used to purchase your 'Ultimate' plan subscription. Used to verify SMS requests are actually being sent from your site.

### Country Code

What country code should be added to SMS reminders? If no country is specified, phone numbers for reservations should start with +XXX (a plus sign followed by the country code), followed by a space or dash, or else the number the phone number will be assumed to be North American.

### Reminder Format

Should reminders be sent via email or text (SMS) message. SMS requires a positive credit balance on your account.

### Late Notification Format

Should late notifications be sent via email or text (SMS) message. SMS requires a positive credit balance on your account.

### Post-Reservation Follow-Up Format

Should post reservation follow ups be sent via email or text (SMS) message. SMS requires a positive credit balance on your account.

## Notification Send Time and Content

Once that is set, you can then choose the time each message should be sent and its content, using the following options:

### Reservation Reminder Before Time

How long before a reservation should a reminder email be sent?

### Reservation Reminder Email Subject

The email subject a user should receive as a reminder about their reservation.

### Reservation Reminder Message

Enter the email a user should receive as a reminder about their reservation. You may use [template tags](template-tags) here.

### Late for Reservation Time

How long after being late for a reservation should a late arrival email be sent?

### Late for Reservation Email Subject

The email subject a user should receive when they are late for their reservation.

### Late for Reservation Message

Enter the email a user should receive when they are late for their reservation. You may use [template tags](template-tags) here.

### Post-Reservation Follow-Up Time

How long after a reservation should a follow-up email be sent? If check-in is enabled, then only guests who have checked in will be sent follow-ups.

### Post-Reservation Follow-Up Email Subject

The email subject a user should receive when they receive a follow-up after their reservation.

### Post-Reservation Follow-Up Message

Enter the email a user should receive when they receive a follow-up after their reservation. You may use [template tags](template-tags) here.

## Tutorial Video

We have also prepared a video that explains all of the reservation reminder settings, which you can view below.

{% include youtube.html id="s1LnEb6xuXw?start=206" %}