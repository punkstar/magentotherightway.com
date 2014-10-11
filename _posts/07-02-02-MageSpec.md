---
title: MageSpec
permalink: mage_spec
isChild: true
---

### What is PHPSpec

PHPspec is a development tool derived from BDD technique called specs or SpecBDD; there is no real difference between
SpecBDD and TDD other than the language that is used to describe the scenarios and features.

When using PHPSpec the focus is all about the “Behaviour” of the method as opposed to traditional TDD where the focus is all on
“testing”. We write our specifications as if we were talking to a stake holder in the project: It should do something when I
apply something else.

### What is MageSpec

MageSpec is an extension to the SpecBDD tool PHPSpec, Its main purpose is to allow an easy integration into Magento when
describing behaviour. It does this by exposing the Magento classes required and creates a level of knowledge about Models Blocks
and controllers… MageSpec helps keep the focus on the red green refactor loop by:

   * Describe
   * Implement
   * Refactor


We achieve this by adding additional helpers to the PHPSpec CLI for describing key components within Magento ( Blocks, Models,
    Controllers ) this validates the modules vendor name and module name to ensure Magento compatibility.


A recently added feature is automatic code generation for modules including app/etc/modules/…. and the concept of Magento code
 pools. For a developer this allows us to describe in the CLI, implement in the IDE and assert via the CLI reducing the need for manual steps of boilerplate code and browser refreshes.

BehatMage can be installed using composer with the following composer.json

{% highlight json %}
{
    "require": {
        "php": ">=5.4.0"
    },
    "require-dev": {
        "magetest/magento-phpspec-extension": "2.1.*"
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


For more information on using MageSpec please refer to the github repo [here](https://github.com/MageTest/MageSpec)
