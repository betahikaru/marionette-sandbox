App.TodoView = Backbone.Marionette.ItemView.extend({
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
