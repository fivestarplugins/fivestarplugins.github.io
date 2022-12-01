---
layout: default
slug: restaurant-reservations
menu: user
title: Translating with Poedit
---
This is small guide on how to use Poedit to translate our plugin. For more info on translating our plugin, please see [here](translating).

To create a translation of our plugins, you can use a program called [Poedit](https://poedit.net/). Using the default .pot file that we provide, it's quite simple to create a translation file in the language of your choice. You can do the following:

1. The default .pot file is located in the **languages** folder in the plugin files. Download this file to your computer.
2. If you don't already have it, download and install [Poedit](https://poedit.net/).
3. Open Poedit. Click **File > Open** and choose the .pot file you downloaded. Then click the **Create new translation** button
4. It will prompt you to choose the language of your translation. Choose the appropriate one and click **OK**.
5. Now, for each translatable string, you'll be able to provide a translation in the **Translation** area.
6. When you're done, click **File > Save As**. It will default the name of the translation to the correct language and country code for your language (for example: **fr_FR**). Make sure you add **restaurant-reservations-** before the name (for example: `restaurant-reservations-fr_FR.po`). Then save the file. This will create both the *.po* and *.mo* files.
7. Upload these files to the **languages** folder. If you'd like us to include your translation in a future release of the plugin, please [contact us](../support/contact). 