// Initializers
App.addInitializer(function(options){
  var todoNaviView = new App.TodoNaviView();
  var todo1 = new App.TodoModel({
    description: "TODO表示機能",
    done: true
  });
  var todo2 = new App.TodoModel({
    description: "TODO追加機能"
  });
  var todoCollection = new App.TodoCollection([todo1, todo2]);
  var todoListView = new App.TodoListView({
    collection: todoCollection
  });
  App.navigationRegion.show(todoNaviView);
  App.mainRegion.show(todoListView);
});

// Start App
var options = {};
App.start(options);
