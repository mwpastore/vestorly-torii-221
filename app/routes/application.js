import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.get('session').get('isAuthenticated'))
      return;

    this.get('session').fetch();
  },

  actions: {
    loginWithFacebook() {
      const route = this; 
      this.get('session').open('facebook-connect').then(() => {
        route.transitionTo('dashboard');
      });
    },

    logout() {
      const route = this; 
      this.get('session').close().then(() => {
        route.transitionTo('index');
      });
    },

    accessDenied() {
      this.transitionTo('index');
    }
  }
});
