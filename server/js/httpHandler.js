const headers = require('./cors');
var messages = require('./messageQueue.js') // importing the messages object to get access to its methods



module.exports = (req, res) => {
  if (req.method === 'GET') {
    statusCode = 200;
    res.writeHead(statusCode, headers);
    res.end(messages.dequeue()); // here we return the first element in the direction's queue
  } else {
    statusCode = 404
    res.writeHead(statusCode, headers)
    res.end()
  }
};