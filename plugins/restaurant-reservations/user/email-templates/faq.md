---
layout: default
slug: restaurant-reservations
menu: user
title: Frequently Asked Questions
---
*The following frequently asked questions only cover the [Email Templates](../email-templates) addon.*

## Can I use different colors for each template?

No, the color and logo options can only be set for all templates at once.

## Should I use a different template for each email?

Probably not. It's up to you, but each template has it's own character and identity. You probably want to maintain a consistent identity across all of your communications. That way, customers will learn to recognize your emails.

## Can I use notification template tags?

Yes, you can use the notification template tags in the Lead Sentence, Footer Message and Email Acknowledgement settings. This allows you to enter details about the booking or your site into these areas.

You can find all template tags listed under the **Bookings > Settings > Notifications** area in your WordPress admin. Learn more about [notification template tags](../../config/email-notifications).

## I want to customize the email template even further.

You can override any of the email templates with your own template file in your theme. Simply copy the template you want to use from `/wp-content/plugins/email-templates-for-rtb/email-templates` into your theme.

If your theme is located at `/wp-content/themes/my-theme/`, copy the template to `/wp-content/themes/my-theme/etfrtb_templates` and start editing. When you select that template, the plugin will automatically load your customized template.

*You should be careful when designing your own templates. HTML and CSS is not as reliable in emails as it is in your web browser. This plugin uses heavily-tested templates from [litmus.com](https://litmus.com/).*

If you are an advanced developer and you want to perform more extensive integrations, this addon includes a number of hooks to help you do that. You can register your own email templates, load email templates from anywhere (including a custom plugin), and deliver custom data to the templates.

I don't yet have comprehensive developer documentation for this, but here is a quick list of the most valuable hooks.

- `etfrtb_template_options` - *Filter*. Modify the list of available templates.
- `etfrtb_template_directories` - *Filter*. Modify the list of directories where templates can be found.
- `etfrtb_designer_setup` - *Action*. Fired after the email template class is set up. Modify data available in the template here.

If you have any questions, don't hesitate to contact me via the [support form on our website](https://www.fivestarplugins.com/support-center/).

{% include faq/support.md %}

{% include faq/refund.md %}
