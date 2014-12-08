TodosIndexController = RouteController.extend({

  waitOn: function () {
    //layoutTemplate: 'NoBreadcrumbs', if not in action already
    Meteor.subscribe('todos_index');
  },

  data: function () {
  },

  action: function () {
    this.render();
    this.layout('NoBreadcrumbs'); // permet de fixer un layout suivant le fait que le user soit log-in ou pas par exemple
  }
});