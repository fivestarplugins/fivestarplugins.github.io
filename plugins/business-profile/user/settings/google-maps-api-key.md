---
layout: default
slug: business-profile
menu: user
title: Set up your Google Maps API Key
---
Google [now requires](https://googlegeodevelopers.blogspot.co.uk/2016/06/building-for-scale-updates-to-google.html) that you have your own API key to display a map on your website. This section walks you through the process of getting an API key.

Under **Settings > Basic**, you'll see a Google Maps API Key field.

![Screenshot of the API Key field in the plugin settings](/img/{{ page.slug }}/bpfwp-google-api-key-field.png)

Clicking the link in the field description will take you to the Google Maps website. Once there, scroll down to the **Create API Keys** section and click the **Go to the Credentials page** button.

![Screenshot of Google Maps API main page](/img/google-maps-api-key/google-api-key-create-1.png)

On the next page, click on the project for which you want to create an API key, or create a new project. This will bring you the page where you can view your existing keys and create a new one. To create a new key, just click the **Create Crendentials** button at the top and then **API Key**.

![Screenshot of screen where you can create a new API key](/img/google-maps-api-key/google-api-key-create-2.png)

This will generate your new API key.

![Screenshot of screen where you can create a new API key](/img/google-maps-api-key/google-api-key-create-3-2.png)

 From there we suggest you edit the API key to give it a unique name to restrict its use. For this we suggest selecting the **HTTP referrers (web sites)** option and entering the domain you want to use it on.

The following screenshot shows how to do this:

![Screenshot of screen where you can create a new API key](/img/google-maps-api-key/google-api-key-create-4.png)

Just replace `fivestarplugins.com` in the screenshot with your domain name. So, if, for example, your site is `myrestaurant.com`, you would use:

`myrestaurant.com/*`

This will allow you to display the map anywhere on your domain.

We also suggest that you restrict the key to only those APIs that you need (e.g. Maps Embed API and Maps JavaScript API). This is also shown in the screenshot above.

Once that is done, save your settings and make sure to copy your API key. Then go back to the **Settings > Basic** page in the plugin admin and paste it in the **Google Maps API Key** field. Then save your settings.

![Screenshot of the API Key field in the plugin settings](/img/{{ page.slug }}/bpfwp-google-api-key-field.png)

And you've finally made it!

**Please note:** Google says it may take up to 5 minutes for your key to take effect. In our experience, it could take even longer. You may continue to see an error in your map for up to 30 minutes, so give it plenty of time.
