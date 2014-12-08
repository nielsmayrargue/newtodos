/*
 * Add query methods like this:
 *  Todos.findPublic = function () {
 *    return Todos.find({is_public: true});
 *  }
 */
Todos.allow({
  insert: function (currentUserId, doc) {
    return currentUserId;
  },

  update: function(currentUserId, doc, fieldName, modifier) {
    return doc.createdBy == currentUserId;
  },

  remove: function(currentUserId, doc) {
    return doc.createdBy == currentUserId;
  }
});

Todos.deny({

});