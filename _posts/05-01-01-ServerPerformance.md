---
title: Server/Performance
permalink: server-performance
---

There are few basic methods to speed up Magento installation, a number of which are described in an official Magento [whitepaper](http://www.slideshare.net/quartsoft/optimizing-magento-for-peak-performance?ref=http://quartsoft.com/blog/201211/improving-performance-of-magento-store) on the topic.

* For database server use Percona instead of MySQL.
* For better application performance use PHP version >= 5.4. Here some [benchmarks](http://www.eschrade.com/page/magento-performance-on-php-5-3-5-4-and-5-5rc3/).
* Install some cache for PHP (apc, opcache).
* Remember to disable Xdebug on production servers.
* Use nginx + php-fpm instead of Apache2.
* Remember to enable Magento cache on production environment. 
* Enable merging CSS and JS files in Magento. You can use [Fooman Speedster](http://www.magentocommerce.com/magento-connect/fooman-speedster.html) for better results.
* Use Varnish for full page caching.
