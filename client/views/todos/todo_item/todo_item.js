/*****************************************************************************/
/* TodoItem: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.TodoItem.events({
  'submit form': function(){
    event.preventDefault();
    var itemDescription = event.target.itemDescription.value;
    Meteor.call('insertNewItem', itemDescription);
    event.target.reset();
  }
});

Template.TodoItem.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* TodoItem: Lifecycle Hooks */
/*****************************************************************************/
Template.TodoItem.created = function () {
};

Template.TodoItem.rendered = function () {
};

Template.TodoItem.destroyed = function () {
};