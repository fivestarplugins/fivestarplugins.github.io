---
layout: default
slug: restaurant-reservations
menu: user
title: Frequently Asked Questions
---
*The following frequently asked questions only cover the [Custom Fields](../custom-fields) addon.*

## None of the buttons on the Custom Fields page work. When I click them nothing happens.

The most likely cause of this is a JavaScript error. These are often caused by other plugins or your theme, and can cascade down and effect this plugin.

To trouble-shoot this issue, switch to a default theme, like TwentyFifteen, and deactivate all other plugins. If the buttons work after doing this, you can begin reactivating the plugins one-by-one until you find the source of the problem.

## Something's gone wrong. How can I start over?

When you're viewing the custom fields editor, you'll see a button on the right to **Revert to default**. This will clear any custom fields data you have entered and restore the default booking form.

## I can't delete or edit one of the fields

Some of the default fields, like Date, Time, Email and Party, are required by the plugin and can not be removed. You can change the label of the fields, but not their settings.

## I need to change the layout or style of a custom field?

The plugin includes basic styles for each custom field type. But you may wish to make further adjustments. To do this, you'll need to write some CSS code.

To facilitate your needs, each field is wrapped in classes which relate to the type of field as well as the particular field slug. So, a text field that is named “Special Requests” will be assigned the following classes:

- `rtb-text`
- `special-requests`

If you'd like to customize the HTML markup or perform more extensive customizations, check out the [developer documentation](../../../developer).

## I've created custom fields, but they don't show in my booking form

Some themes have overwritten the booking form used by [Five Star Restaurant Reservations](http://wordpress.org/plugins/restaurant-reservations). Unfortunately, in doing so they have broken compatibility with my addons.

Known themes that are problematic include the Nuvo and Aqua themes. Others have cropped up from time to time.

## Can the admin notification email go to a different address depending on what a customer has selected?

No. You can't perform any specific actions based on the value of your custom fields.

If you're comfortable working with WordPress hooks in the PHP code, check out the [developer documentation](../../../developer) for extensive opportunities to change the behaviour of notifications.

{% include faq/support.md %}

{% include faq/refund.md %}

{% include faq/more-help.md %}
