const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/page2':
      htmlHandler.getPage(request, response, '/client2.html');
      break;
    case '/page3':
      htmlHandler.getPage(request, response, '/client3.html');
      break;
    case '/party.mp4':
    case '/bird.mp4':
      mediaHandler.getVideo(request, response);
      break;
    case '/bling.mp3':
      mediaHandler.getAudio(request, response);
      break;
    case '/':
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
