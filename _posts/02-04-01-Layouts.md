---
title: Layouts
permalink: layouts
isChild: true
---

* Use `<update handle="" />` to refactor repeated block declarations.
* Move blocks from one reference to another using `<action method="unsetChild"></action>` and `<action method="insert"></action>`.
* ~~Create a `local.xml` in your theme as a place to store all of your theme modifications.  Don't create `catalog.xml`, `customer.xml`, `page.xml`, etc, files unless absolutely necessary.~~
* Avoid adding modifications to a `local.xml`: XML nodes under `local.xml` are final (cannot be overridden) , since they are merged last by the Config Model ; there are no 'generic' changes in Magento , since each functionality should have it's own Module
* (Continuing the idea above) Ideally each functionality is encapsulated in a Magento Module , in this case you should be doing layout updates in the module's configuration file (`config.xml`) and place all the layout changes in the module's layout file.
