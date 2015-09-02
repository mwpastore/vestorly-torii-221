import Ember from 'ember';
import apiAjax from 'vestorly-torii-221/utils/api-ajax';

export default Ember.Object.extend({
  providerName: null,

  init(providerName) {
    this._super();
    this.providerName = providerName;
  },

  open(postData) {
    return apiAjax('POST', `/auth/${this.providerName}/callback`, {
      data: postData
    });
  },

  fetch() {
    return apiAjax('GET', '/session/info');
  },

  close() {
    return apiAjax('POST', '/session/end');
  }
});
