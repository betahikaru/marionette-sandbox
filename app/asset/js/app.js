// Application
App = new Backbone.Marionette.Application();

// Event
//   Usage: App.vent.trigger("someEvent", "a");
App.vent.on("someEvent", function(someData){
  alert("Received", someData);
});

// Regions
App.addRegions({
  mainRegion: "#main-content",
  navigationRegion: "#navigation"
});

// Models
TodoModel = Backbone.Model.extend({
  defaults: {
    "description": "",
    "done": false
  }
});
TodoCollection = Backbone.Collection.extend({
  model: TodoModel
});

// Views
TodoNaviView = Backbone.Marionette.ItemView.extend({
  template: "#todo-navigation-template"
});
TodoView = Backbone.Marionette.ItemView.extend({
  template: "#todo-template",
  ui: {
    checkbox: "input[type=checkbox]"
  },
  onRender: function() {
    // Update checked property
    var doned = this.model.get('done');
    this.ui.checkbox.prop('checked', doned);
  }
});
TodoListView = Backbone.Marionette.CollectionView.extend({
  itemView: TodoView
});

// Initializers
App.addInitializer(function(options){
  var todoNaviView = new TodoNaviView();
  var todo1 = new TodoModel({
    description: "TODO表示機能",
    done: true
  });
  var todo2 = new TodoModel({
    description: "TODO追加機能"
  });
  var todoCollection = new TodoCollection([todo1, todo2]);
  var todoListView = new TodoListView({
    collection: todoCollection
  });
  App.navigationRegion.show(todoNaviView);
  App.mainRegion.show(todoListView);
});

// Start App
var options = {};
App.start(options);
