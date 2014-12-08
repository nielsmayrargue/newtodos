/*****************************************************************************/
/* CreateTodoItem: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CreateTodoItem.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'submit form': function(){
    event.preventDefault();
    var itemDescription = event.target.itemDescription.value;
    Meteor.call('insertNewItem', itemDescription);
    event.target.reset();
  }
});

Template.CreateTodoItem.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* CreateTodoItem: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateTodoItem.created = function () {
};

Template.CreateTodoItem.rendered = function () {
};

Template.CreateTodoItem.destroyed = function () {
};