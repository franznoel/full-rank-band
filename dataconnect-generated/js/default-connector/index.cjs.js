const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'full-rank-band',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

