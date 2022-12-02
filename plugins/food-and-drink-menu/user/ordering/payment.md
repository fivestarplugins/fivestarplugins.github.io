---
layout: default
slug: food-and-drink-menu
menu: user
title: Ordering Payment
---
The ordering functionality can be extended by either letting or requiring that your customers pay for their orders at the time they place them.

You can turn on the payment functionality using the **Enable Payment** option found by going to **Settings > Ordering** and scrolling down to the **Payment** section.

By default, payments will be required. To make them optional, you can enable the **Pay-In-Store Option** option.

![Screenshot of the payment ordering options](/img/{{ page.slug }}/fdm-ordering-settings-payment.png)

## Currency

You can set the currency for your orders by going to the [Basic](../settings/basic) area of the **Settings** page and using the **Currency**, **Currency Symbol** and **Currency Symbol Locations** there. 

## Payment Gateway

You have the option of choosing either PayPal or Stripe as your payment gateway.

### PayPal

With this option, customers are redirected to PayPal to complete their order. Make sure you have the [IPN and auto return](https://www.paypal.com/cgi-bin/webscr?cmd=p/mer/express_return_summary-outside) correctly set up in your PayPal account, so guests can be brought back to your site after placing their order.

### Stripe

With Stripe, a credit card checkout form is embedded directly in your ordering cart, allowing guests to complete the purchase on your site. For this to work, you need to [create secret and publishable keys in your Stripe account](https://stripe.com/docs/keys) and enter them in the **Stripe Live Secret** and **Stripe Live Publishable** fields on the **Settings > Ordering** page.

We also provide an option to place Stripe checkout in test mode, so you can check to make sure the process is set up and working correctly. No payments will be processed while test mode is on. For this mode to work, you'll need to enter your test API keys in the **Stripe Test Secret** and **Stripe Test Publishable** fields on the **Settings > Ordering** page.

---

For an explanation and visual of all ordering payment options available, please see the following video:
 
{% include youtube.html id="sqag_bMMOeo?start=197" %}