# start:
```C
npm install
```
```C
node test.js // to see interaction between server and client
```
```C
node server.js // just run server manually
```
The client library polls the server using exponential backoff to efficiently, starting with a 1-second delay between requests and doubles the delay after each request.

You can use the client library in your own project with:
```
const VideoTranslationClient = require('./VideoTranslationClient');

const client = new VideoTranslationClient('<your server url>');
client.waitForCompletion()
    .then(result => console.log(`Final result: ${result}`))
    .catch(err => console.error(err.message));
```