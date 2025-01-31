const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};
const getPage = (request, response, filename) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  const page = fs.readFileSync(`${__dirname}/../client${filename}`);
  response.write(page);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getPage = getPage;
