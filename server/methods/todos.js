/*****************************************************************************/
/* Todos Methods */
/*****************************************************************************/

Meteor.methods({
 /*
  * Example:
  *  '/app/todos/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */
  'insertNewItem': function(itemDescription){
    var currentUserId = Meteor.userId();
    TodoList.insert({
    description: itemDescription,
    createdBy: currentUserId,
    isDone: false
    });
  },

  'changeStatus': function(itemId){
    if (TodoList.find(itemId).fetch()[0].isDone == true) {
      TodoList.update(itemId, {$set: {isDone: false}});
    }
    else {
      TodoList.update(itemId, {$set: {isDone: true}});
    }
  }
});