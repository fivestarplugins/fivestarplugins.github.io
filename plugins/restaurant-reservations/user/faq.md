---
layout: default
slug: restaurant-reservations
menu: user
title: Frequently Asked Questions
---
Quick answers to your most common questions. Anything missing? [Let us know](https://www.fivestarplugins.com/support-center/).

## <a name="shortcode"></a>Is there a shortcode to print the booking form?

Yes, use the `[booking-form]` shortcode.

## <a name="date-time-format"></a>Can I change the format of the date or time?

Yes, set the format for the datepicker in **Bookings > Settings**. The format used in the backend will depend on the date and time formats in your WordPress settings.

## <a name="no-datepicker"></a>The datepicker or timepicker is not working.

If you load up the form and no date or time picker is popping up when you select those fields, this is likely caused by a Javascript error from another plugin or theme.

You can find the problematic plugin by deactivating other plugins you're using one-by-one. Test after each deactivation to see if the date and time pickers work.

If you have deactivated all other plugins and still have a problem, try switching to a default theme (like TwentyFifteen).

## <a name="no-emails"></a>I'm not receiving notification emails for new bookings.

This is almost always the result of issues with your server and can be caused by a number of things. Before posting a support request, please run through the following checklist:

1. Double-check that the notification email in **Bookings > Settings > Notifications** is correct.
2. Make sure that WordPress is able to send emails. The admin email address in the WordPress settings page should receive notifications of new users.
3. If you're not able to receive regular WordPress emails, contact your web host and ask them for help sorting it out.
4. If you're able to receive regular WordPress emails but not booking notifications, check your spam filters or junk mail folders.

If you still haven't found the emails, you may be getting blocked by spam filters on your email server or on the recipient's email server. There are many things that can cause this. The most common are:

1. Your email server has a bad reputation.
2. The content of your emails is causing some recipient servers to flag them as spam.
3. Conflicts with your email server configuration are causing your emails to look suspicious.

You’ll need to explore this issue further with your web host. If you contact them with the date and time of an email that should have been received but wasn’t, they should be able to look at their email logs to see if an email was sent. If it was, but it was blocked by the recipient server, they’ll often receive a return notice with more details about why it was blocked.

If you or your web host would like more technical details about how the plugin configures the email headers, you can find some details in [this support request](https://wordpress.org/support/topic/e-mails-not-being-send/#post-7562496).

If your web host is not able or willing to resolve the problem, or you'd like to explore more reliable email delivery, read [how I use Postmark to make sure emails are delivered every time](https://www.fivestarplugins.com/2016/05/24/make-sure-restaurant-emails-delivered-every-time/).

### <a name="no-emails-from-header"></a>Changing the FROM header

If your web host advises you that the FROM header of the emails is causing a problem, you can change this at **Bookings > Settings > Notifications > Advanced**. The FROM header must match an email address that your email server has permission to send email as.

When configured incorrectly, **all of your emails may stop being sent**. If you're not sure, ask your web host which email address you should use.

## <a name="required-phone-number"></a>Can I make the phone number required?

Yes, you can make the phone number required by changing the **Require Phone** setting under **Bookings > Settings**.

## <a name="translate"></a>Can I translate the booking form?
Yes, everything in this plugin can be translated using the standard translation process and software like PoEdit.

If you're not familiar with that process, I'd recommend you take a look at the [Loco Translate](https://wordpress.org/plugins/loco-translate/) plugin, which provides a simple interface in your WordPress admin area for translating themes and plugins.

*If you make a translation, please help others out by adding it to the [GitHub repository](https://github.com/NateWr/restaurant-reservations) so that I can distribute it for others.*

## <a name="early-late-restrictions"></a>I set Early or Late Bookings restrictions, but I scan still book during that time
Users with the Administrator and Booking Manager roles are exempt from these restrictions. This is so that they can make last-minute changes to bookings as needed. If you want to test the Early or Late Bookings restrictions, try submitting a reservation while logged out from the site.

## <a name="custom-fields"></a>I want to add a field to the form. Can I do that?
The [Custom Fields addon](https://www.fivestarplugins.com/plugin/custom-fields-restaurant-reservations)  will allow you to add a field or modify some of the existing fields of the booking form.

Developers who are comfortable coding up plugins for WordPress can add their own fields using the hooks provided. See the [developer documentation](../developer).

## <a name="gdpr"></a>Is this plugin compliant with GDPR?

This plugin includes a couple of features to help your website comply with GDPR, the European privacy laws that came into effect in 2018.

First, you can add a confirmation field to the booking form that requires customers to consent to the collection of their data. You can configure this confirmation field under the **Bookings > Settings > General > Privacy** section in your WordPress admin area.

Second, you can delete all bookings related to a single email address. To do this, find the **Submitted By** column in the Bookings list. Click the **Delete Customer** link there to delete booking information related to that email address. You will _not_ be able to undo this.

GDPR gives customers the right to request you delete all information about them. Using this feature will remove all booking data related to that email address from your WordPress database. If you are using the [MailChimp addon](https://www.fivestarplugins.com/plugins/five-star-restaurant-reservations/mailchimp/), you will also need to remove their email address from any mailing list you have there.

## <a name="wpml"></a>Is this compatible with WPML?

The plugin comes with a `wpml-config.xml` file that improves compatibility with [WPML](https://wpml.org/) for multi-lingual websites. However, there are some limitations.

WPML works by checking the current locale and adjusting things on-the-fly. When an administrator or booking manager approves or rejects a message, WordPress is run in whatever language they're using.

For that reason, the subsequent notification emails are sent out in the administrator's or booking manager's language -- not the language used in the original booking request.

I usually recommend that people just make their notificaton emails multi-language, by including text for both languages into every email.

## <a name="qtranslate"></a>The date or time of a booking is incorrect in emails, and I'm using qTranslate.

If you are using qTranslate, you may experience problems with the date and time that appears in booking notification emails. You can fix this by changing a setting in qTranslate.

In the qTranslate settings, go to **Advanced Settings > Conversion Date/Time** and make sure that **Use strftime** is selected.

## <a name="support"></a> How do I contact support?

I provide the best support for the free plugin that I'm able to provide for free. But there is only so much I'm able to do while keeping my business sustainable. Still, I'd encourage you to [post your support request on the official forums](http://wordpress.org/support/plugin/restaurant-reservations) and I'll help out as best I can.

If you have purchased any of the commercial addons, please reach out to me via the [support form on my website](https://www.fivestarplugins.com/support-center/).

{% include faq/refund.md %}

{% include faq/more-help.md %}
