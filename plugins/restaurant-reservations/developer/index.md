---
layout: default
slug: restaurant-reservations
menu: developer
title: Five Star Restaurant Reservations Developer Documentation
---
The developer documentation is for coders who want to learn how to extend the plugin with custom fields, notifications, integrations and more.

*If you're not a coder, you're probably looking for the [User Guide](../user).*

---

Five Star Restaurant Reservations comes with several filters and hooks to make it more extensible for developers.

## Filters

These are the available filters. You could, for example, use these in your theme's functions.php file to extend the functionality of the plugin.

- 'rtb_party_size_upper_limit' => Set the upper limit for the party size dropdown box on the settings page
- 'rtb-max-reservations-upper-limit' => Set the upper limit for the maximum reservations dropdown box on the settings page (default 100)
- 'rtb-max-people-upper-limit' => Set the upper limit for the maximum people dropdown box on the settings page (default 100)
- 'rtb-auto-confirm-reservations-upper-limit' => Set the upper limit for the auto-confirm reservations dropdown box on the settings page (default 100)
- 'rtb-auto-confirm-seats-upper-limit' => Set the upper limit for the autoiconfirm seats dropdown box on the settings page (default 400)

## Code Snippets

These are the available code snippets:

- The `$fields` array you can use to [customize the form output](https://github.com/NateWr/restaurant-reservations/blob/master/includes/Settings.class.php#L727-L834).
- [Override the From email address used in booking notification emails](https://gist.github.com/NateWr/fbbe6f0eafa7359de161)
- [Hide the time field in the booking form. Requires PHP 5.3+](https://gist.github.com/NateWr/9068c5d12ef458eb40ca)
- [Remove the party field from your booking form.](https://gist.github.com/NateWr/b015b059bba49bea67fb)
- [Automatically scroll to the booking form after a submission is made](https://gist.github.com/NateWr/79891d113284d486b4d6)
- [Allow anyone with the `edit_pages` capability to manage the settings](https://gist.github.com/NateWr/a9bad4c46b899ed308a3)
- [Add a notification tag that pulls the address and directions link from Business Profile](https://gist.github.com/NateWr/3b190da01cd3746fa583)

### Code Snippets for Addons

- [Change the delimiter used when generating CSV files](https://gist.github.com/NateWr/f5476a0e6a62e7457929)
