---
layout: default
slug: good-reviews-wp
menu: user
title: Frequently Asked Questions
---
Quick answers to your most common questions. Anything missing? [Let me know](https://www.fivestarplugins.com/about/support).

## <a name="shortcode"></a> Is there a shortcode to print all of my reviews?

You can use the `[good-reviews]` shortcode to add all of your reviews to any page or post. There are also other ways to [display your reviews](getting-started/display).

In addition to showing all reviews, you can add attributes to the shortcode to show only some of the reviews.

`[good-reviews review=123 random=1 limit=5 category="seaside-venue" cycle="fader" excerpt=1]`

- `review` &mdash; Use a review's ID here to show just a single review. Don't include this attribute if you want to show all reviews.
- `random` &mdash; Set this to 1 and it will order the reviews randomly. Add a limit attribute to show one or more randomly selected reviews.
- `limit` &mdash; Set this from 1 to any number to limit how many reviews to show. Use this in combination with the random attribute to show one or two randomly selected reviews.
- `category` &mdash; Set this to the category slug to only show reviews from this category. This can be combined with other attributes to show, for example, 2 reviews randomly selected from a specific category.
- `cycle` &mdash; If the shortcode will show more than one review, you can set the cycle to "fader" to have it cycle through each review using a fade effect
- `excerpt` &mdash; Set this to 1 if you have longer reviews and want to display an excerpt that links to the main review on your site.

## <a name="user-submit"></a> Can users submit reviews with this plugin?

No, this plugin only allows you to display reviews you've entered yourself.

## <a name="customize-output"></a> Can I customize the output of the reviews?

Yes, but in order to do this you'll need to be able to write PHP, HTML and CSS code. The `grfwp_print_reviews_output` filter will allow you to hook in before reviews are printed and output your own markup. You'll find it [here](https://github.com/NateWr/good-reviews-wp/blob/master/includes/template-functions.php#L43).

## <a name="template-function"></a> Is there a template function I can use to print reviews?

Yes, check out the [grfwp_print_reviews()](https://github.com/NateWr/good-reviews-wp/blob/master/includes/template-functions.php#L41) function.

## <a name="support"></a> How do I contact support?

I provide the best support for the free plugin that I'm able to provide for free. But there is only so much I'm able to do while keeping my business sustainable. Still, I'd encourage you to [post your support request on the official forums](http://wordpress.org/support/plugin/good-reviews-wp) and I'll help out as best I can.
