---
layout: default
slug: restaurant-reservations
menu: user
title: Multiple Locations
---

Support for booking reservations for multiple locations was added in version 1.6. It adds a location select field to your booking form and allows you to view and manage bookings by location.

_**Multi-location bookings requires the [Business Profile](http://wordpress.org/plugins/business-profile/) plugin.**_

To get started, [install the Business Profile plugin](../../../business-profile/user/getting-started/install), [set up your restaurant profile](../../../business-profile/user/getting-started/setup) and then [enable multiple locations](../../../business-profile/user/getting-started/locations).

Once you create a location using the Business Profile plugin, the booking form will add a Locations field.

![Screenshot showing location field in booking form](/img/{{ page.slug }}/booking-form-location.png)

All bookings made when a location exists will be assigned to a location. In this example, we see one booking created before locations were enabled and another created after.

![Screenshot showing location view in bookings list](/img/{{ page.slug }}/bookings-locations.png)

You can click the tabs above the list to view only bookings for that location. Or use the location switcher on the right if you have a large number of locations.

## Configuring bookings for each location

When using [Business Profile](http://wordpress.org/plugins/business-profile/) alongside [Five Star Restaurant Reservations](https://www.fivestarplugins.com/plugins/five-star-restaurant-reservations/), you'll find an additional set of configuration fields for each Location.

If you go to the **Locations** page in your WordPress admin area and then click on a location, you'll find the following metabox.

![Screenshot showing bookings metabox on location edit screen](/img/{{ page.slug }}/location-metabox.png)

This allows you to customize the settings for each location.

You can send new booking notifications to a custom email address. And you can specify a custom Reply-To Name and Email Address for those notifications.

You can also choose whether or not to automatically show a booking form on this location's page. When checked, the form will not display the location field. Any form submitted on a location's own page will automatically be assigned to that location.

## Location shortcode

When multiple locations are enabled, you can pass a new `location` attribute to the `[booking-form]` shortcode. This should point to the location's post ID.

So if your location has an ID of 123, the following shortcode would print a booking form in which all bookings would automatically be assigned to that location.

	[booking-form location=123]


## Common questions/problems

### I created a location but it's not a booking option
If you have created a location but it doesn't appear in your Bookings panel, you may need to re-save the location. This is usually because the location was created before Five Star Restaurant Reservations was active and updated to the appropriate version.

### My "main" location isn't a booking option
Your "main" location is treated by Google and other search engines like a "parent" location. This makes sense for many businesses which might have a main office or headquarters.

But restaurants don't often have this. To compensate, you may need to duplicate your main Business Profile details as a location of their own. This may seem like extra work, but it helps Google interpret the relationship between your business and it's locations.
