/*****************************************************************************/
/* TodosDetail Publish Functions
/*****************************************************************************/

Meteor.publish('todos_detail', function (id) {
  // you can remove this if you return a cursor
  return Todos.find({_id: id}); // don't use .findOne() because it returns an object while we want to return a cursor, cause with a cursor update will be send down to the client automatically
});