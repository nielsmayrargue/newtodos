/*****************************************************************************/
/* TodosIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.TodosIndex.events({
  'click .changeStatus': function(){
    itemId = this._id;
    Meteor.call('changeStatus', itemId);
  }
});

Template.TodosIndex.helpers({
  'items': function() {
    return Todos.find({});
  },
  'doneClass': function() {
    var item = Todos.find(this._id).fetch();
    if(item[0].isDone == true) {
      return "doneClass"
    }
  },
  'checked': function() {
    var item = Todos.find(this._id).fetch();
    if(item[0].isDone == true) {
      return "checked"
    }
  }
});

/*****************************************************************************/
/* TodosIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosIndex.created = function () {
};

Template.TodosIndex.rendered = function () {
};

Template.TodosIndex.destroyed = function () {
};