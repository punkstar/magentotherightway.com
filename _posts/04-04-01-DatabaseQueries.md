---
title: Database Queries
permalink: debugging-database-queries
isChild: true
---

* There are a number of methods to retrieve the SQL behind most collection queries for debugging:
	- `$collection->getSelect()->assemble()`
	- `$collection->printLogQuery(true)` will echo, `$collection->printLogQuery(false, true)` will log to `system.log`
	- Setting the value of `Varien_Db_Adapter_Pdo_Mysql::$_debug` to `true` will log all queries to `Varien_Db_Adapter_Pdo_Mysql::$_debugFile`.