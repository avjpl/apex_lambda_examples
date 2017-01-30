'use strict';

const MongoClient = require('mongodb').MongoClient,
      assert = require('assert');

module.exports = class DispatchMessage {
  constructor() {
    this.url = '';
  }

  connect(cb) {
    MongoClient.connect(this.url, (err, db) => {
      assert.equal(null, err);
      cb(db);
    });
  }

  save(message) {
    this.connect((db) => {
      db.collection('dispatch').insertOne(message).then((result) => {
        db.close();
      });
    });
  }
}
