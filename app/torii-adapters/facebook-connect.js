import CommonAdapter from 'vestorly-torii-221/torii-adapters/common'; 

export default CommonAdapter.extend({
  init() {
    this._super('facebook');
  },

  open(auth) {
    return this._super({ 
      provider: this.providerName,
      uid: auth.userId,
      credentials: {
        token: auth.accessToken,
      }
    });
  }
});
