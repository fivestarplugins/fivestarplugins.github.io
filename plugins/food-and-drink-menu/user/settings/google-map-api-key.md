---
layout: default
slug: food-and-drink-menu
menu: user
title: Set up your Google Maps API Key
---
Google [now requires](https://googlegeodevelopers.blogspot.co.uk/2016/06/building-for-scale-updates-to-google.html) that you have your own API key to display a map on your website. This section walks you through the process of getting an API key.

Under **Menu > Settings**, you'll see a Google Maps API key field.

![Screenshot of the API Key field in the plugin settings](/img/google-maps-api-key/gmaps-key-enter-key.png)

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

Paste that key into the API Key field under **Menu > Settings**. Then save your settings.

![Screenshot of the API Key field in the plugin](/img/google-maps-api-key/gmaps-key-enter-key.png)

Next, you'll need to enable the Static Maps API for your project. To do this, go to the **Library** section in the API Manager and click on the **Google Static Maps API**.

![Screenshot of the the Static Maps API in Google's API library](/img/google-maps-api-key/gmaps-key-find-static-maps.png)

On the Static Maps API, click the **Enable** link at the top of the page.

![Screenshot of the the enable button on the Static Maps API page in Google's API library](/img/google-maps-api-key/gmaps-key-enable-static-maps.png)

And you've finally made it!

**Please note:** Google says it may take up to 5 minutes for your key to take effect. In my experience, it could take even longer. You may continue to see an error in your map for up to 30 minutes, so give it plenty of time.
