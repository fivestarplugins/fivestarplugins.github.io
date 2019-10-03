---
layout: default
slug: business-profile
menu: user
title: Frequently Asked Questions
---
Quick answers to your most common questions. Anything missing? [Let me know](https://www.fivestarplugins.com/about/support).

## <a name="shortcode"></a> Can I show or hide something with the shortcode?

The shortcode, `[contact-card]`, supports a number of attributes you can use to show or hide part of your profile.

Using `[contact-card show_name=0]` would show the whole contact card except for your business name. The following is a list of supported attributes:

- `show_name` &mdash; Whether or not to show the name of the business.

- `show_address` &mdash; Whether or not to show the address.

- `show_get_directions` &mdash; Whether or not to show a link to Google maps with directions from the user's current location to the business's address.

- `show_phone` &mdash; Whether or not to show your phone number.

- `show_contact` &mdash; Whether or not to show a link to your contact page, if a contact page has been selected. Otherwise, it will show the email address if you've added one to the business profile.

- `show_opening_hours` &mdash; Whether or not to show your opening hours.

- `show_opening_hours_brief` &mdash; Whether or not to show a short, one-line version of your opening hours. This is turned off by default.

- `show_map` &mdash; Whether or not to show a Google Map with your location.

- `location` &mdash; An optional location post ID. If multi-locations are enabled, you can pass the ID of a location to display the contact card for that location instead of the main business profile.

Most of these are turned on by default. But you can turn them off by including the attribute and setting it to `0`. The following would show only a map and none of the other details:

`[contact-card show_name=0 show_address=0 show_get_directions=0 show_phone=0 show_contact=0 show_opening_hours=0]`

The following would show the full contact card, but display the opening hours in a brief, one-line format:

`[contact-card show_opening_hours_brief=1]`

## <a name="google-maps-api-key"></a> It asks me for a Google Maps API Key but I don't know what it is or how to get it.

Google [now requires](https://googlegeodevelopers.blogspot.co.uk/2016/06/building-for-scale-updates-to-google.html) that you have your own API key to display a map on your website. This section walks you through the process of getting an API key.

When entering your Business Profile, you'll see a Google Maps API key field.

![Screenshot of the API Key field in Business Profile](/img/google-maps-api-key/gmaps-key-enter-key.png)

Click the link in the field description that will take you to the Google Maps website. Then find the following button on the Google Maps website which reads **Get a Key**.

![Screenshot of the Get Key button on Google Maps' website](/img/google-maps-api-key/gmaps-key-get-key.png)

You'll then be asked to accept the terms of use for the API. Google puts limits on the amount of requests you can make in a day. It's currently set at 25,000 per day, which should be plenty for almost all restaurants.

![Screenshot of the form to accept terms on Google Maps' website](/img/google-maps-api-key/gmaps-key-accept-terms.png)

On the following screen, you'll be asked to set a Name and the websites this will be active on.

![Screenshot of the form to enter domain details on Google Maps' website](/img/google-maps-api-key/gmaps-key-enter-domain.png)

Enter whatever you'd like in the Name. The other part, **Accept requests from these HTTP referrers (web sites)** can be a bit more tricky.

The simplest way to do this is to replace `fivestarplugins.com` in the screenshot with your domain name. So if your site is `myrestaurant.com`, you would use:

`myrestaurant.com/*`

This will allow you to display the map anywhere on your domain.

Once you've set this up, click the **Create** button to generate your API key. It will then be provided for you and you can click the small icon on the right to copy it.

![Screenshot of the form to copy your API key from Google Maps' website](/img/google-maps-api-key/gmaps-key-copy-key.png)

Paste that key into the API Key field in your Business Profile settings. Then save your settings.

![Screenshot of the API Key field in Business Profile](/img/google-maps-api-key/gmaps-key-enter-key.png)

**Please note:** Google says it may take up to 5 minutes for your key to take effect. In my experience, it could take even longer. You may continue to see an error in your map for up to 30 minutes, so give it plenty of time.

## <a name="map-latlon"></a> Google Maps shows my business in the wrong location

Unfortunately, in some cases Google is unable to find the right latitude and longitude to match your address.

In some cases, you may be able to get it to properly locate you by tweaking the address. Sometimes Google just needs a bit of help. Once you've got the right coordinates you can go back and restore your original address, and save the form without touching the coordinates again.

If you're unable to get Google to recognize your location, the best thing to do is to leave the Google Map out when you print your contact card. You will also want to hide the Get Directions link, because Google will guide your customers to the wrong location.

There's not much I can do about this, unfortunately. Even if you were able to manually set the latitude and longitude, Google would still show bad directions, because it uses the address, not the coordinates, for this feature.

## <a name="schema-type"></a> What's the Schema Type?

This allows you to let search engines like Google know exactly what kind of business you run.

That way, when someone looks for a real estate agent or a restaurant in your area, they'll know to include you in their search results.

You may not find a type that's a perfect match for your business. Choose the option that's *most appropriate* for your business, and fall back to a more generic type, such as Local Business, if you need.

## <a name="support"></a> How do I contact support?

I provide the best support for the free plugin that I'm able to provide for free. But there is only so much I'm able to do while keeping my business sustainable. Still, I'd encourage you to [post your support request on the official forums](http://wordpress.org/support/plugin/business-profile) and I'll help out as best I can.
