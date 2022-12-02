---
layout: default
slug: food-and-drink-menu
menu: user
title: Notifications
---
Whenever a new order is placed on your website, a notification will be automatically sent to the admin. There is also an option to send a notification to the customer, either via email or SMS.

## Admin Notification

You can change the email address that admin notifications are sent to by going to **Settings > Ordering > Notifications** and using the **Order Email Address** field. 

You can then specify the content of the admin notifcation emails using the **Admin Notification Subject** and **Admin Notification Email** fields. In the **Admin Notification Email** field, you can make use of template tags that will automatically fill in specific order information, such as the customer name and the items ordered. A full list of available tags is shown below in the ***Template Tags*** section.

![Screenshot of the ordering admin notification settings](/img/{{ page.slug }}/fdm-ordering-admin-notification-settings.png)

## Customer Notifications

You can also optionally have a notification automatically sent to the customer when they place an order on your site. This can be either an SMS or email notification.

You can specify the content of the customer notifications using the **Customer Notification Subject** and **Customer Notification Email** fields. In the **Customer Notification Email** field, you can make use of template tags that will automatically fill in specific order information, such as the customer name and the items ordered. A full list of available tags is shown below in the ***Template Tags*** section.

![Screenshot of the ordering customer notification settings](/img/{{ page.slug }}/fdm-ordering-customer-notification-settings.png)

### SMS

If you would like to send an SMS notification, then you need to fill in the **"Ultimate" Purchase Email** option with the email address you used to purchase the ultimate version, so your SMS credits can be linked and available. 

### Email

If you're sending an email notification, there are further options to set the *Reply-To* name and email address that show when the customer receives the email.

![Screenshot of the ordering reply-to notification settings](/img/{{ page.slug }}/fdm-ordering-notification-settings-reply-to.png)

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

---

For an explanation and visual of all ordering notification options available, please see the following video:
 
{% include youtube.html id="sqag_bMMOeo?start=121" %}