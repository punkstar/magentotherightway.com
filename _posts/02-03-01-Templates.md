---
title: Templates
permalink: templates
isChild: true
---

* Ensure your strings are wrapped with `$this->__('')` for translations.
* Add `/** @var $this Mage_Core_Block_Template */` (replacing the correct class name) at the top of your template file -- your IDE will love you.
* When overriding another phtml file, add @see app/design/original/path/to/original.phtml at the top of your file.  During upgrades new files may be inserted in the middle of the inheritance change - making comparing an override with the original extremely difficult.
* Keep as much of your logic in your block as possible.  This makes the logic reusable and allows the delegation of templating tasks to less experienced members of staff.
