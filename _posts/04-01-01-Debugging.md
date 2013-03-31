---
title: Debugging
permalink: debugging
---

### The Varien_Object

* Don't `var_dump()`, you'll probably get a WSOD.

You can inspect the contents of a `Varien_Object` with the following snippet:

{% highlight php %}
foreach ($object->getData() as $key => $value) {
    if (is_object($value)) {
        printf("%s => (%s)\n", $key, get_class($value));
    } else if (is_array($value)) {
        printf("%s => %s\n", $key, json_encode($value));
    } else {
        printf("%s => %s\n", $key, $value);
    }
}
{% endhighlight %}

### Logging

* Write to log files in `var/log/` by using `Mage::log($message, $severity, $filename, $force)`.
* Use the severity levels as defined in `Zend_Log`.
* Write to your own file, try to stick to the naming convention `$company_$extension_$specific.log`, e.g. `meanbee_shippingrules_requests.log`.
* Add a "Debug Mode" toggle to your extension that forces logging, even if globally disabled.