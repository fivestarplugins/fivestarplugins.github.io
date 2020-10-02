---
layout: default
slug: restaurant-reservations
menu: developer
title: Five Star Restaurant Reservations Developer Documentation
---
The developer documentation is for coders who want to learn how to extend the plugin with custom fields, notifications, integrations and more.

*If you're not a coder, you're probably looking for the [User Guide](../user).*

---

Five Star Restaurant Reservations is packed with hooks to make it extraordinarily extensible. But the documentation is not yet complete.

When it is, it will be a handy reference for every hook, as well as the place to find best practices for extending the plugin to ensure future compatibility.

Until then, I'll list are a bunch of resources you may find useful. If you've got a question, post on the [support forums](http://wordpress.org/support/plugin/restaurant-reservations) or the [GitHub repository](https://github.com/NateWr/restaurant-reservations).

*Sign up for my [mailing list](https://www.fivestarplugins.com/about/mailing-list) to be notified when this documentation is complete.*

## Tutorials

- A rough guide to coding a custom field is available in [this support request](https://wordpress.org/support/topic/edit-form-label-and-add-input-fields).

## Code Snippets

- The `$fields` array you can use to [customize the form output](https://github.com/NateWr/restaurant-reservations/blob/master/includes/Settings.class.php#L727-L834).
- [Basic Capacity Management Addons](https://www.fivestarplugins.com/2015/05/19/basic-capacity-management-addons-for-restaurant-reservations/)
- [Simple Phone Validation](https://www.fivestarplugins.com/2015/01/08/simple-phone-validation-restaurant-reservations/)
- [Override the From email address used in booking notification emails](https://gist.github.com/NateWr/fbbe6f0eafa7359de161)
- [Automatically confirm new booking requests](https://gist.github.com/NateWr/00ee083db4d357aeab68)
- [Add options to block bookings 2, 3 or 4 days in advance](https://gist.github.com/NateWr/c8b86771e979a06b1afb)
- [Add a minimum party size setting](https://gist.github.com/NateWr/838f806f6608fab28557)
- [Increase the maximum party size displayed in the settings](https://gist.github.com/NateWr/b93b43e7fc5be4b6b301)
- [Replace the content of the Booking Page when a form is successfully submitted](https://gist.github.com/NateWr/038820ba03e6c36dad1f)
- [Prevent an error from being displayed if the user does not enter an email address](https://gist.github.com/NateWr/6bc65b49d3ee5e9a75dd)
- [Redirect the user to a different page after they have submitted their reservation](https://gist.github.com/NateWr/88fa7686e21397ec4403)
- [Hide the time field in the booking form. Requires PHP 5.3+](https://gist.github.com/NateWr/9068c5d12ef458eb40ca)
- [Remove the party field from your booking form.](https://gist.github.com/NateWr/b015b059bba49bea67fb)
- [Automatically scroll to the booking form after a submission is made](https://gist.github.com/NateWr/79891d113284d486b4d6)
- [Allow anyone with the `edit_pages` capability to manage the settings](https://gist.github.com/NateWr/a9bad4c46b899ed308a3)
- [Add a notification tag that pulls the address and directions link from Business Profile](https://gist.github.com/NateWr/3b190da01cd3746fa583)

### Code Snippets for Addons

- [Change the delimiter used when generating CSV files](https://gist.github.com/NateWr/f5476a0e6a62e7457929)
