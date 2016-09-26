---
title: Observers
permalink: Observers
isChild: true
---

The best way to add code to Magento is to make use of the events system.  This allows custom code to be fired upon receipt of an event without having to rewrite models or blocks.

Developing with observers means that the code is more independent and less likely to conflict with other extensions.

* Take a look at this [events cheat sheet](http://www.nicksays.co.uk/magento-events-cheat-sheet-1-9/) for an idea of where events are fired.
* When developing your own extensions try and fire events at points where developers may consider extending your code in the future with `Mage::dispatchEvent`.
* Always try to listen to specific events instead of generic events that are dispatched multiple times during the application life cycle. This will make sure that the code only runs when it's necessary.