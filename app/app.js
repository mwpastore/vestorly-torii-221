import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
// https://github.com/Vestorly/torii/issues/210
// https://github.com/Vestorly/torii/issues/211
import toriiLoadInitializers from 'torii/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);
// https://github.com/Vestorly/torii/issues/210
// https://github.com/Vestorly/torii/issues/211
toriiLoadInitializers(App, config.modulePrefix);

export default App;
