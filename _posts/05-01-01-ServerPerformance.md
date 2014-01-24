---
title: Server/Performance
permalink: server-performance
---

There are few basic methods to speed up Magento installation, a number of which are described in an official Magento [whitepaper](http://www.slideshare.net/quartsoft/optimizing-magento-for-peak-performance?ref=http://quartsoft.com/blog/201211/improving-performance-of-magento-store) on the topic.

* For your database server use [Percona](http://www.percona.com/software/percona-server) instead of MySQL.
* For better application performance use PHP version >= 5.4. Here some [benchmarks](http://www.eschrade.com/page/magento-performance-on-php-5-3-5-4-and-5-5rc3/) and the latest [5.4 support patch](http://magento.com/blog/magento-news/magento-now-supports-php-54).
* Install a [bytecode cache for PHP](http://www.phptherightway.com/#bytecode_cache) such as APC.
* Remember to disable Xdebug on production servers.
* Use [nginx](http://nginx.org/) + [php-fpm](http://php-fpm.org/) instead of [apache](https://httpd.apache.org/).
* Ensure Magento cache is enabled in production environments. 
* Enable merging CSS and JS files in Magento. You can use [Fooman Speedster Advanced](http://www.magentocommerce.com/magento-connect/fooman-speedster-advanced.html) for on-the-fly minification and intelligent combined file grouping.
* Use Varnish for full page caching.  Use [Turpentine](https://github.com/nexcess/magento-turpentine) for (almost) drop-in support.
