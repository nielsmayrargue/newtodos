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
    Todos.insert({
    description: itemDescription,
    createdBy: currentUserId,
    isDone: false
    });
  },

  'changeStatus': function(itemId){
    if (Todos.find(itemId).fetch()[0].isDone == true) {
      Todos.update(itemId, {$set: {isDone: false}});
    }
    else {
      Todos.update(itemId, {$set: {isDone: true}});
    }
  }
});