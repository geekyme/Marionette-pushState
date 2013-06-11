# Marionette PushState
This is a demo app built to improve my own understanding of Backbone.Marionette, along with how to use Backbone.js pushState in conjunction with a node.js express server. I tried to look for a few examples to do it but I could not find any so I made my own example. I did not put in much effort in designing the app, simply wanted to experiment with Marionette functionality, so pardon the bad design. There may still be some bugs though. Feel free to contribute.

[DEMO](http://pin.gs:3000/)
[For a more advanced example](https://github.com/geekyme/openshop)

In this app, I demonstrate progressive enhancement with the use of pushState. 

Two cases happen in this demo app:

* A user landing on '/' then clicking on the link to go to '#showItems' will see the same page as another user who landed directly on '/showItems'. Backbone takes care of fetching models & rendering the HTML in this case.
* The second user who landed on directly '/showItems' will see HTML that is sent directly from the server. Backbone does not fetch any new models nor render new views. It simply attaches views to the existing HTML in this case. 

Some other features that is used in this app but won't be going into detail:
* Sharing of jade templates between frontend & backend : templatizer.js
* Backbone Views, Models, Collections
* Marionette CompositeViews & ItemViews
* Marionette Layout & Regions
* Marionette AppRouter
* Node.js server stack - used helmet in this case for improved security

In both cases, views are created but in different ways. Hope this helps people who want to learn more about Backbone Marionette + Node.js


#### important
* For windows, in app.js line 9 - make sure its '\\views'
* For linux, in app.js line 9 - make sure its '/views'
* The above two is because of a problem in the package walkdir in templatizer. Changing the slashes seems to help.
* By default, I've configured a database in memory. If you want persistent records, do remember to adjust /models/db.js with your own database setup. After that, adjust /models/item.js with your own API method