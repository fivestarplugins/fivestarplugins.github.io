---
layout: default
slug: restaurant-reservations
menu: user
title: Banning Abusive Customers
---
Restaurant Reservations works hard to make the booking process as easy as possible for your customers. I believe that the simplest booking experience is the best.

Sometimes, though, the ease of booking from any device may encourage some customers to treat your online bookings in an abusive way. This plugin allows booking managers to ban bookings from specific customer email or IP addresses.

## Who should be banned?

I encourage you not to ban customers unless you really need to. Banning customers can trigger negative reviews on public sites like Yelp or Trip Advisor.

In some cases, though, you may find that persistent no-show customers are losing you considerable sums of money. Unfortunately, it has become customary for diners to book at several places and not cancel their booking -- or cancel at the last minute.

Only ban customers if this is seriously effecting your business.

## What happens when a banned customer books?

By default, Restaurant Reservations delivers an ambiguous message that simply says their booking could not be completed. The customer isn't told why their booking wasn't completed, in order to minimize negative responses that might effect your business.

## Should I ban by email or IP address?

You should generally ban by email address first. The email address tends to be tied to a specific person. But IP addresses can sometimes be rotated, so an IP address may accidentally refer to more than one user.

If you block an IP address used by a public connection, such as cafe WIFI, a public library, or a university network, you may inadvertantly block several people.

Only ban customers by IP addresses when an abusive customer is deliberately circumventing the ban you've put in place on their email address.

## How do I ban a customer?

To ban a customer, find the Submitted By column in your bookings list.

![Screenshot indicating Submitted By column in Bookings list](/img/{{ page.slug }}/ban-customers.png)

_If you don't see this column, you may find it under the Details prompt._

This column will tell you the IP address used to submit the booking and the date it was submitted. Tracking the IP address can be useful if you have persistent, malicious booking requests.

![Screenshot of Submitted By column details in Bookings list](/img/{{ page.slug }}/ban-customers-submitted-by.png)

When you click the link to ban a customer, you'll get the following prompt.

![Screenshot of prompt to ban a customer](/img/{{ page.slug }}/ban-customers-prompt.png)

You can ban a customer by email or IP address here. You'll also find a link to view all of your banned email and IP addresses. This will take you back to the general settings form, from which you can edit all of your bans.

![Screenshot of customer ban settings](/img/{{ page.slug }}/ban-customers-settings.png)

From this screen you can remove bans on customers that you want to allow again. If you make a habit of banning by IP address, you'll probably want to clean this up occasionally to make sure you're not banning legitimate customers.
