---
title: Server/Performance
permalink: server-performance
---

There are few basic methods to speed up Magento installation.

* For database server use Percona instead of MySQL.
* For better application performance use PHP version >= 5.4.
* Install some cache for PHP (apc, opcache).
* Remember to disable Xdebug on production servers.
* Use nginx + php-fpm instead of Apache2.
* Remember to enable Magento cache on production environment. 
