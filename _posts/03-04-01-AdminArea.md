---
title: Admin Area
permalink: admin-area
isChild: true
---

* Use an ACL entry to allow administators to restrict, based on user roles, access to your interface.
* Extend from `Mage_Adminhtml_Controller_Action` when creating your admin controllers to inherit session configuration changes and CSRF mitigation, amongst other things.
* Use the standard `/admin` prefix for your admin routes instead of inventing your own.
