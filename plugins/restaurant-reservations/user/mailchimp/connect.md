---
layout: default
slug: restaurant-reservations
menu: user
title: Connect to MailChimp
---
You can access the MailChimp settings by going to **Settings > Advanced** and scrolling down to the **MailChimp** section.

![Screenshot of the MailChimp api key prompt](/img/{{ page.slug }}/rtb-mailchimp-1.png)

Before you can use the feature, you need to connect to your MailChimp account. The link provided will help you create an API key for your MailChimp account that you can use here.

{% include youtube.html id="Mp6n8Ph0Pm4?start=127" %}

Once you've successfully connected your API key, you'll see the full configuration options.

![Screenshot of the MailChimp settings](/img/{{ page.slug }}/rtb-mailchimp-2.png)

## Select the subscribe list

Select which one of your MailChimp mailing lists you'd like to subscribe customers to when they make a booking. *You'll need to have at least one list set up in MailChimp first.*

Once you've selected a list, you'll be prompted with a list of Booking Form Data that you need to connect to fields in your MailChimp mailing list.

By default, MailChimp mailing lists often only come with a First Name and Last Name field, so you may need to configure more [merge fields](http://kb.mailchimp.com/article/getting-started-with-merge-tags) to collect all the data from the booking form.

*You can connect any information from you booking form, including [custom fields](../custom-fields). But you don't need to connect the email address. That will be done automatically.*
