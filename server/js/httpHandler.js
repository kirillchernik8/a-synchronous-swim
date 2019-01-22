const headers = require('./cors');

module.exports = (req, res) => {
  res.writeHead(200, headers);
  res.end();
};
