---
title: Layouts
permalink: layouts
isChild: true
---

* Use `<update handle="" />` to refactor repeated block declarations.
* Move blocks from one reference to another using `<action method="unsetChild"></action>` and `<action method="insert"></action>`.
* Create a `local.xml` in your theme as a place to store all of your theme modifications.  Don't create `catalog.xml`, `customer.xml`, `page.xml`, etc, files unless absolutely necessary.