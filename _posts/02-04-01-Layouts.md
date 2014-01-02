---
title: Layouts
permalink: layouts
isChild: true
---

* Use `<update handle="" />` to refactor repeated block declarations.
* Move blocks from one reference to another using `<action method="unsetChild"></action>` and `<action method="insert"></action>`.
* Create a `local.xml` in your theme as a place to store all of your theme modifications.  Don't create `catalog.xml`, `customer.xml`, `page.xml`, etc, files.

* When creating an extension that requires layout changes:
	* Do not ship with your own copy of a `local.xml` file
	* Create your own layout file with a unique name following your module namespace, for example, `$companyname/$modulename.xml`
	* Place your layout file (and its accompanying template files) in the `base/default` theme so that it may be accessed by all installed themes.

* A reusable theme is, for all intents and purposes, an extension to Magento and should also not ship with a customised `local.xml`.