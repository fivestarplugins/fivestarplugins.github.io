---
layout: default
slug: restaurant-reservations
menu: user
title: Translating
---
All of the static labels/strings that appear on the front end of this plugin are localized in the code. This means they are ready to be translated and can be found and identified as such by any translation plugins (e.g. WPML). 

*More info on WordPress localization can be found [here](https://developer.wordpress.org/plugins/internationalization/localization/).*

Additionally, the FAQs are created using a **custom post type** (and the categories and tags created using taxonomies). This means they are translatable in the same way you would translate your regular pages and posts (i.e. any translation plugin that can translate pages should let you translate FAQs as well). You may just need to first enable our post type in your translation plugin's settings. For example, WPML [has options to enable specific post types](https://wpml.org/documentation/getting-started-guide/translating-custom-posts/), after which you can easily create different language versions of each of your FAQs.

## Included Translations

In addition, a couple very kind users of the plugin have taken it upon themselves to translate the plugin into two other languages. We've included these translations in the **languages** folder. Current included languages are:

- German (Germany)
- Italian

If you have your WordPress site set to any of those languages, then the plugin will automatically make use of the included translation for that language.

*Please note that all translations are user-submitted on a volunteer basis and that we cannot guarantee that they are either complete or accurate.*

## Create Your Own Translation

If your language is not included and you would like to create the translation yourself, or you would like to modify an existing translation, we've included an up-to-date .pot file in the **languages** folder. You can open this up in a program like [Poedit](https://poedit.net/) to create a new translation. 

We've put together a small guide on how to use Poedit to create a translation, which you can read [here](poedit). 

In order for WordPress and our plugin to properly recognize a new translation file you create, you must make sure to follow the naming convention of:

`ultimate-faqs-pt_BR.po`

Where **pt_BR** is the language code. So, in this case, Brazilian Portuguese. Make sure to upload both the *.mo* and *.po* files to the **languages** folder.

If you would like us to include your translation with the live release of our plugin, just [get in touch with us](../support/contact).