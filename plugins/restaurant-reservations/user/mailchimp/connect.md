---
layout: default
slug: restaurant-reservations
menu: user
title: Connect to MailChimp
---
Once you've installed and activated the addon, a new tab will appear in your WordPress admin area at **Bookings > Settings > MailChimp**.

![Screenshot of the MailChimp api key prompt](/img/{{ page.slug }}/mailchimp-api-key.png)

Before you can use the plugin, you need to connect to your MailChimp account. The link provided will help you create an API key for your MailChimp account that you can use here.

Once you've successfully connected your API key, you'll see the full configuration options for this addon.

![Screenshot of the MailChimp addon settings page](/img/{{ page.slug }}/mailchimp-settings.png)

## Select the subscribe list

Select which one of your MailChimp mailing lists you'd like to subscribe customers to when they make a booking. *You'll need to have at least one list set up in MailChimp first.*

Once you've selected a list, you'll be prompted with a list of Booking Form Data that you need to connect to fields in your MailChimp mailing list.

By default, MailChimp mailing lists often only come with a First Name and Last Name field, so you may need to configure more [merge fields](http://kb.mailchimp.com/article/getting-started-with-merge-tags) to collect all the data from the booking form.

*You can connect any information from you booking form, including [custom fields](../custom-fields). But you don't need to connect the email address. That will be done automatically.*
