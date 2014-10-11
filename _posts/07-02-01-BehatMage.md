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

BehatMage can be installed using composer with the following composer.json

{% highlight json %}
{
    "require": {
        "php": ">=5.4.0"
    },
    "require-dev": {
        "magetest/magento-behat-extension": "dev-feature/Behat3",
        "behat/mink-selenium2-driver": "*",
        "behat/mink-goutte-driver": "1.0.*",
    },
    "config": {
        "bin-dir": "bin"
    },
    "autoload": {
        "psr-0": {
            "MageTest\\PhpSpec\\MagentoExtension": "src",
            "": [
                "public/app/code/local",
                "public/app/code/community",
                "public/app/code/core",
                "public/app",
                "public/lib",
                "features/bootstrap"
            ],
            "Mage" : "public/app/code/core"
        }
    }
}
{% endhighlight %}

Once BehatMage is installed you can then use Behat within a Magento project. BehatMage provides additional contexts files to support
Magento as well as providing access to Mage within context files.

For more information on using BehatMage please refer to the github repo [here](https://github.com/MageTest/BehatMage)
