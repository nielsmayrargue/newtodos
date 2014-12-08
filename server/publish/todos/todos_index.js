/*****************************************************************************/
/* TodosIndex Publish Functions
/*****************************************************************************/

Meteor.publish('todos_index', function () {
  var currentUserId = this.userId;
  return Todos.find({
    createdBy: currentUserId
  })
});