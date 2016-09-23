---
title: Setup Resources
permalink: setup-resources
isChild: true
---

* Avoid using raw SQL queries inside setup scripts, instead use the built in `Varien_Db_Ddl` class to abstract 
database interactions, this allows the resources to be database agnostic and makes sure they run in all 
supported database engines..
* Use the `getTable()` function to get table names instead of hard coding them, this will make 
sure that scripts run successfully when using table prefixes.
* Extensions can create a lot of tables, attributes and files on installation that can linger if we choose to uninstall it. 
Consider creating a script that can be run to automatically clear all the resources that were generated.
