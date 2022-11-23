---
layout: default
slug: restaurant-reservations
menu: user
title: General Settings
---
The general settings page allows you to configure your booking form. You can automatically attach the form to any page, tailor the success message, and customize the format of the date, time and language for the date and time pickers.

![Screenshot of the general settings page](/img/{{ page.slug }}/settings.png)

## Understanding the date and time formats

In order to provide a friendly mobile booking experience, this plugin uses the [pickadate.js]() library. Unfortunately, it's date and time formats are not directly compatible with the formats you'd use on the rest of your WordPress website.

For that reason, you'll need to define date and time formats matches your particular language and culture.

You can follow the links on the page to read more about the different formats provided. But here are a couple of common examples for the Date Format:

- `d mm` &mdash; 21 Jan
- `dddd, mmmm d` &mdash; Saturday, January 21
- `yyyy-mm-dd` &mdash; 2016-01-21

And here are a couple of common examples for the Time Format:

- `H:i` &mdash; 16:30
- `h:i a` &mdash; 4:30 p.m.

## Changing the language of the date and time pickers

If you're using a non-English language in your WordPress installation, the plugin will attempt to automatically load the appropriate language for the date and time pickers.

However, this may not work in all cases. When you need, you can set the language manually in the **Language** option on this page.

*If your language isn't present, consider [providing a translation for the pickadate.js project on GitHub](https://github.com/amsul/pickadate.js/).*

---

Learn how to [set up your Booking Schedule](schedule) next.
