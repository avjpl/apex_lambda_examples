'use strict';

require('es6-promise').polyfill();
const PostMessage = require('./PostMessage');

console.log('starting function');
export default function(evt, ctx, cb) {
  const message = JSON.parse(evt.Records[0].Sns.Message);
  const postMessage = new PostMessage();

  postMessage.save(message);
}