---
title: BehatMage
permalink: behat_mage
isChild: true
---

### Behat
Behaviour-driven development is an “outside-in” methodology. It starts at the outside by identifying business outcomes,
and then drills down into the feature set that will achieve those outcomes. Each feature is captured as a “story”,
which defines the scope of the feature along with its acceptance criteria.Behat is a BDD php framework, that allows developer to
test PHP applications using human-readable sentences to describe features and scenarios about how the application should behave in order to
test its functionality.


### BehatMage
BehatMage is an extension for proving Behat with context about Magento specific functionality, allowing developers to define scenarios and
steps for testing Magento with BDD tools.Reasons for using BehatMage over just Behat are that we have included some initial step definitions
for working with Magento a little easier. E.g. I log in as… I see in configuration… As well as fixtures that allow us to put the system in a
known state before we start testing. E.g. Given the following products exist: Extending the BehatContext also provides us access to the Mage
namespace so we can define our own assertions based on Magento objects.
