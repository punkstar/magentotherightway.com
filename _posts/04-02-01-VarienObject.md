---
title: The Varien_Object
permalink: varien_object
isChild: true
---

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