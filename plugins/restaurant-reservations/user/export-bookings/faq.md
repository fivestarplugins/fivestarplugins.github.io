---
layout: default
slug: restaurant-reservations
menu: user
title: Frequently Asked Questions
---
*The following frequently asked questions only cover the export feature.*

## <a name="corrupt-pdf-exports"></a>The PDF export doesn't work. It results in a blank screen, a broken download file or a bunch of gibberish.

The default PDF renderer, mPDF, is not compatible with all servers. You can switch to a more widely compatible renderer by going to the **Bookings > Settings > Export** page in your WordPress admin area, and selecting the TCPDF renderer.

In some rare cases, this may not be compatible as well. You may be able to get help by asking your web host, who can change the configuration of your server.

## Can I customize the PDF template?

Yes. To customize the template, you'll need to be able to edit template files similar to how you might edit your theme's template files.

Here are the complete steps:

1. Determine which PDF renderer you are using. Go to **Bookings > Settings > Export** and look at the setting under PDF Renderer. It will be TCPDF or mPDF.

2. Copy the appropriate matching `.php` file from your `/wp-content/plugins/restaurant-reservations/templates/` directory. If you're using the mPDF renderer, copy the `mpdf.php` file.

3. Edit the template however you'd like. Please note that the mPDF renderer is not as smart as a modern web browser. It only supports CSS 2.1 specifications, so it may not recognize all the CSS you're used to using. The TCPDF renderer is even tougher to work with.

4. Upload the edited template file to your theme directory under a new `/ebfrtb_templates/` directory. This will likely look like `/wp-content/themes/your-theme/ebfrtb_templates/mpdf.php`.

Once the template has been uploaded to your theme, the plugin will automatically use your template instead of the default one.

{% include faq/support.md %}