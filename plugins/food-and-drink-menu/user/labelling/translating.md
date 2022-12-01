---
layout: default
slug: food-and-drink-menu
menu: user
title: Translating
---
All of the static labels/strings that appear on the front end of this plugin are localized in the code. This means they are ready to be translated and can be found and identified as such by any translation plugins (e.g. WPML). 

*More info on WordPress localization can be found [here](https://developer.wordpress.org/plugins/internationalization/localization/).*

Additionally, the menu items and sections are created using a **custom post type** (and the sections created using a taxonomy). This means they are translatable in the same way you would translate your regular pages and posts (i.e. any translation plugin that can translate pages should let you translate FAQs as well). You may just need to first enable our post type in your translation plugin's settings. For example, WPML [has options to enable specific post types](https://wpml.org/documentation/getting-started-guide/translating-custom-posts/), after which you can easily create different language versions of each of your menu items.

## Create Your Own Translation

If you would like to create a translation yourself, we've included an up-to-date .pot file in the **languages** folder. You can open this up in a program like [Poedit](https://poedit.net/) to create a new translation. 

We've put together a small guide on how to use Poedit to create a translation, which you can read [here](poedit). 

In order for WordPress and our plugin to properly recognize a new translation file you create, you must make sure to follow the naming convention of:

`food-and-drink-menu-pt_BR.po`

Where **pt_BR** is the language code. So, in this case, Brazilian Portuguese. Make sure to upload both the *.mo* and *.po* files to the **languages** folder.

If you would like us to include your translation with the live release of our plugin, just [get in touch with us](../support/contact).