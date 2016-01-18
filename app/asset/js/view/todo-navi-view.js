App.TodoNaviView = Backbone.Marionette.ItemView.extend({
  template: "#todo-navigation-template",
  ui: {
    "create_button": "button",
    "todo_desc_text": "#inputTodoDesc"
  },
  events: {
    "click @ui.create_button": "createTodo"
  },
  createTodo: function() {
    var todoDesc = this.ui.todo_desc_text.val();
    var todoModel = new App.TodoModel({
      description: todoDesc
    });
    App.vent.trigger("todo:create", todoModel);
  }
});
