---
title: Templates
permalink: templates
isChild: true
---

* Ensure your strings are wrapped with `$this->__('')` for translations.
* Add `/** @var $this Mage_Core_Block_Template */` (replacing the correct class name) at the top of your template file -- your IDE will love you.
* Keep as much of your logic in your block as possible.  This makes the logic reusable and allows the delegation of templating tasks to less experienced members of staff.