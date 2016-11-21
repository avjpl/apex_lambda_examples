'use strict';

const rp = require('request-promise');

module.exports = class PostMessage {
  constructor() {
    this.endpoint = 'https://echo.getpostman.com/post';
  }

  save(message) {
    const options = {
      method: 'POST',
      uri: this.endpoint,
      body: message,
      json: true
    };

    rp(options)
      .then((res) => {
        console.log(`res.data: ${ JSON.stringify(res.data) }`);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
