---
layout: default
slug: restaurant-reservations
menu: user
title: Payments/Deposits
---
With the [ultimate version](../premium/ultimate-benefits) of the plugin you can require that guests pay a desposit for their booking.

You can enable this feature using the **Require Deposit** option at the top of the **Settings > Payments** page.

{% include youtube.html id="vEhvAOAWBk4" %}

## Configure

The following configuration options are available for the payments feature:

### Payment Gateway

Which payment gateway should be used to accept deposits. Default gateways are Stripe and PayPal. If you are using PayPal, make sure to fill in the **PayPal Email Address** field. There is also an option to add your own extra gateway(s).

### Deposit Type

What type of deposit should be required, per reservation or per guest?

### Deposit Amount

What deposit amount is required (either per reservation or per guest, depending on the setting above)? Minimum is $0.50 in most currencies.

### Currency

Select the currency you accept for your deposits.

### Currency Symbol

The currency symbol you'd like displayed before or after the required deposit amount.

### Currency Symbol Location

Decides whether the currency symbol should be placed before or after the price.

### Deposit Applicable

If enabled, under what circumstances should a deposit be required?

### Deposit Appliable Days/Times

If selected above, on what days and times should a deposit be required?

### Deposit Required Party Size

If selected above, at what party size should deposits be required?

## Stripe

There are also several configuration options that are specific to the Stripe payment gateway, including: 

### Strong Customer Authorization (SCA)

User will be redirected to Stripe and presented with 3D secure or bank redirect for payment authentication. (May be necessary for certain EU compliance.)

### Hold & Charge Separately

With this enabled, the deposit will be taken as a hold and not charged right away. The payment can then be charged/captured manually later by going to the **Bookings** page, checking a booking and choosing **Charge Payment on Hold** from the **Bulk actions** dropdown menu. If not captured, the hold on the amount will be released after 7 days, which is the maximum allowable by Stripe. The SCA option must be enabled to use the hold feature.

### CC Expiration Single Field

Should the field for card expiry details be a single field with a mask or two separate fields for month and year?

### Test/Live Mode

Should the system use test or live mode? Test mode should only be used for testing, no deposits will actually be processed while turned on.

### Stripe Live Secret

The live secret that you have set up for your Stripe account.

### Stripe Live Publishable

The live publishable that you have set up for your Stripe account.

### Stripe Test Secret

The test secret that you have set up for your Stripe account. Only needed for testing payments.

### Stripe Test Publishable

The test publishable that you have set up for your Stripe account. Only needed for testing payments.