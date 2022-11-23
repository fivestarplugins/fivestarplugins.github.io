---
layout: default
slug: restaurant-reservations
menu: user
title: Custom CSS
---
In certain cases, you may not be able to achieve exactly what you want using only the styling options. To further customize the look and layout of your FAQs, you can add some of your own CSS.

We've added a **Custom CSS** input area to the top of the **Basic** settings page, which you can use to add your custom CSS. If you'd prefer, you can also/instead use the Additional CSS area in your theme's customizer for this. 

*Please note that using custom CSS to modify the look of your FAQs requires knowledge of CSS. Attempting to modify your FAQs without this knowledge may result in messing up the layout and even possibly altering/removing certain functionality.*

As an example, let's say that you wanted to make the font size bigger for the answer, categories, tags, custom field and permalink text. The following CSS would help you to achieve that:

`.ewd-ufaq-faq-post,
.ewd-ufaq-faq-categories,
.ewd-ufaq-faq-custom-fields,
.ewd-ufaq-faq-tags,
.ewd-ufaq-permalink {
  font-size: 20px;
}`

![Gif of adding custom CSS](/img/{{ page.slug }}/ufaq-custom-css.gif)

## CSS Selectors

Some common CSS selectors from the plugin are:

`.ewd-ufaq-faq-list` Main overall container for the shortcode/block output

`.ewd-ufaq-expand-collapse-div` Expand/Collapse link

`.ewd-ufaq-faqs` Container that houses all FAQs

`.ewd-ufaq-faq-category` Category container (when Group FAQs by Category is enabled)

`.ewd-ufaq-faq-category-title ` Category title

`.ewd-ufaq-faq-category-inner ` Container around all FAQs in a category

`.ewd-ufaq-faq-div` Container for individual FAQ

`.ewd-ufaq-faq-title` FAQ title container

`.ewd-ufaq-post-margin-symbol` Toggle symbol

`.ewd-ufaq-faq-title-text` Title text

`.ewd-ufaq-faq-body` Container for FAQ body

`.ewd-ufaq-faq-post` FAQ answer text

`.ewd-ufaq-faq-categories` Categories

`.ewd-ufaq-faq-tags` Tags

`.ewd-ufaq-permalink` Permalink

`.ewd-ufaq-faq-custom-fields` Custom fields