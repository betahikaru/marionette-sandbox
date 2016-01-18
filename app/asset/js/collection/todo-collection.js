App.TodoCollection = Backbone.Collection.extend({
  model: App.TodoModel,
  initialize: function(models, options) {
    this.listenTo(App.vent, "todo:create", this.onCreateTodo);
  },
  onCreateTodo: function(todoModel) {
    this.add(todoModel);
  }
});
