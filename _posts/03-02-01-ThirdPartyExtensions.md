---
title: Third Party Extensions
permalink: third-part-extensions
isChild: true
---

* Perform a code review of any extension you install on a client site.
* Don't edit any 3rd party extension directly, because your changes may be lost when the extension is updated. Instead, create your own local module that depends on the one you want to edit and that either rewrites its models/blocks or uses events to achieve the desired effect.
* Check if the extension you are about to install doesn't rewrite any models or blocks already rewritten by other extensions on your Magento instance. If it does, you are facing a rewrite conflict and you need to make your own local module that depends on both modules (so it's loaded after them) and rewrites the same models/blocks in a way that won't prevent any of conflicting modules from working correctly.
* Build a list of trusted (and untrusted) extension providers.