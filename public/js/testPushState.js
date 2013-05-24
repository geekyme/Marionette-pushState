App = new Backbone.Marionette.Application();

App.Layout = Backbone.Marionette.Layout.extend({
	el: '#testPushState',
	regions:{
		items:"#items" 
	},
	events: {
			// for compatibility with pushstate
		'click a:not([data-bypass])': function(e){
			var href = $(e.target).attr('href');
		    var protocol = this.protocol + '//';

		    if (href.slice(protocol.length) !== protocol) {
		      e.preventDefault();
		      Backbone.history.navigate(href, {trigger: true});
		    }
		}
	}
});

App.layout = new App.Layout();
App.TestRouting = function(){
	var TestRouting = {};
	TestRouting.Router = Backbone.Marionette.AppRouter.extend({
		appRoutes: {
			"": "home",
			"showItems": "showItems"
		}
	});
	App.addInitializer(function(){
		TestRouting.router = new TestRouting.Router({
			controller: App.TestItem // put all route function in this object
		});	
	})

	return TestRouting;
}();


// TestItem Class - contain views, models, collections that are related to the test item
App.TestItem = function(){
	TestItem = {};

	TestItem.Model = Backbone.Model.extend({
		defaults: {
			// my models from my api have these attributes, change if yours is different
			id: null, 
			desc: 'temp description',
			label: 'temp name'
		}
	})

	// fill in your own api route to obtain the item models
	TestItem.Collection = Backbone.Collection.extend({
		initialize: function(){
			this.on('reset', function(){
				console.log('fetching models from server');
			});
		},
		model: TestItem.Model,
		url: '/api/all/items'
	});

	// custom template function - necessary for templatizer to work properly.
	// {item: model} is necessary because the testitem.jade has the variable 'item'
	TestItem.View = Backbone.Marionette.ItemView.extend({
		template: function(model){
			return templatizer.item({item: model});
		},
		events: {
			// this helps to test progressive enhancement: server loading the html then backbone binding its views to existing html
			'click': 'alertStuff'
		},
		alertStuff: function(e){
			// my model happen to have a desc attribute, change this if your model is different.
			alert(this.model.get('desc'));
		},
		onRender: function () {
	      // get rid of that pesky wrapping-div
	      // assumes 1 child element.
	      this.$el = this.$el.children();
	      this.setElement(this.$el);
	    }
	})

	// a view that is not rendered, but rather attached to the existing DOM sent by the server
	// will store all the item views in the ul element '#items'
	TestItem.CollectionView = Backbone.Marionette.CompositeView.extend({

		template: function(){
			//no template required
		},
		itemView: TestItem.View, 
		// method to attach the collection view to the DOM, 
		attachToView: function(){
		    self = this;
		    $('#items').find("li").each(function(index){
		      var itemEl = $(this);
		      var id = itemEl.attr("data-id");
		      var item = self.collection.get(id);
		      new TestItem.View({
		        model: item,
		        el: itemEl
		      });
		    });
		},
	})

	// handle the browser route #home
	TestItem.home = function(){
		App.layout.items.close()
		console.log('home');
	}

	// handle the browser route #showItems
	TestItem.showItems = function(){
		// bootstrapped models
		if(Models.length > 0){
			console.log('using bootstrapped models');
			// need to parse the stringified models
			var testItems = new TestItem.Collection(Models);
			testView = new TestItem.CollectionView({collection: testItems})
			testView.attachToView();			
		}else{
		// progressive enhancement
			var testItems = new TestItem.Collection();
			testItems.fetch();
			var testView = new TestItem.CollectionView({collection: testItems})
			App.layout.items.show(testView)				
		}
		console.log('showItems');
	}

	return TestItem;
}();


// start backbone history after all routers , etc are initialized.
App.on("initialize:after", function(){
    if (!Backbone.history.started){
      Backbone.history.start({pushState: true});
      console.log('backbone history started');
    }
 });

$(function(){
	App.start();
})