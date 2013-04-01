---
title: Logging
permalink: logging
isChild: true
---

* Write to log files in `var/log/` by using `Mage::log($message, $severity, $filename, $force)`.
* Use the severity levels as defined in `Zend_Log`.
* Write to your own file, try to stick to the naming convention `$company_$extension_$specific.log`, e.g. `meanbee_shippingrules_requests.log`.
* Add a "Debug Mode" toggle to your extension that forces logging, even if globally disabled.
* eCommerce applications require tracability and the rapid tracking down of issues, so log anything that might make your life easier in the future.
* There's nothing worse than an empty log file, although a log file full useless crap comes a close second.