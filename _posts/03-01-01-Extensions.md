---
title: Extensions
permalink: extensions
---

All modifications to the core functionality of Magento should be done by way of Magento extensions.

A strong incentive for migrating to Magento is the number of extensions on [Magento Connect](www.magentocommerce.com/magento-connect).  Unlike Apple's App Store, there is no code review nor quality control procedure to listings.  These extensions should reside within the `community` code pool.

When building a Magento store, it is likely that you will have to add custom code in order to:

- Overwrite core functionality
- Overwrite community extension functionality
- Add independent/additional functionality

These changes should be made in a modular fashion (loosely coupled and high cohesion) within the `local` code pool.