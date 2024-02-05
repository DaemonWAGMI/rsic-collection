const { stringify } = require('csv-stringify');
const fs = require('fs');
const path = require('path');

const collection = require('../data/collection.json');
const stream = fs.createWriteStream(path.resolve(__dirname, '../data/collection.csv'));

stringify(collection, {
  columns: [{
    key: 'id',
  }, {
    key: 'meta.name',
  }, {
    key: 'meta.attributes[0].value',
  }, {
    key: 'meta.attributes[1].value',
  }]
}).pipe(stream);
