---
layout: default
slug: business-profile
menu: user
title: Create Schema Rules
---
By creating schema rules, you can add structured data to any or every page on your WordPress website.

To create a rule, go to the **Schemas** page in the plugin admin. Here you will see a list of all the schema rules you have created in addition to any that have been automatically added, such as that for the [Woocommerce integration](woocommerce).

![Screenshot of the schemas tab](/img/{{ page.slug }}/bpfwp-schemas-1.png)

To create a new rule, click the **Add New** button at the top. You will then see the following screen:

![Screenshot of the schema create screen](/img/{{ page.slug }}/bpfwp-schemas-2.png)

You need to specify a title for your new rule and choose a target and schema type. 

The target decides where the structured data will be added. This can be a specific page or post, all pages or posts, a specific custom post type or global, which adds the structured data to all pages on your site.

For help picking a schema type, see our FAQ for it [here](../faq#-whats-the-schema-type).

Once you've entered in this information, click the Publish button to create the rule. The page will then reload and display all the corresponding parameter fields that match the schema type you selected.

![Screenshot of the schema rule with parameters](/img/{{ page.slug }}/bpfwp-schemas-3.png)

From here you can fill in each of those fields with the pertinent information and this will all be neatly displayed as LD+JSON structured data on your selected page(s). This will allow Google to know the exact info for your business and use it to populate the listing for your page in search results, maps, etc.

## Schema Default Helpers

The [premium](../premium) version of the plugin comes with schema default helpers, which can be enabled in **Settings > Premium**. These add an extra feature to each parameter field when creating/editing a schema rule that lets you pick from a list of possible default values for that field. You can access the list by clicking the dropdown arrow beside the field. 

![Screenshot of the schemas default helpers](/img/{{ page.slug }}/bpfwp-schemas-4.png)

These helpers include available dynamic WordPress data, such as the post title and will allow you to quickly populate all the parameters, while also making it easy for you to create one global schema instead of a separate one for each post.