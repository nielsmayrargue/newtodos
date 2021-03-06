/*****************************************************************************/
/* TodoItem: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.TodoItem.events({
  'click .changeStatus': function(){
    itemId = this._id;
    Meteor.call('changeStatus', itemId);
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