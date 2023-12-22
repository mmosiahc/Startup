const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Get your messages
apiRouter.get('/messages', (_req, res) => {
  res.send(messages);
});

// Submit a lovebox message
apiRouter.post('/messages', (req, res) => {
  messages = updateMessages(req.body, messages);
  res.send(messages);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateMessages considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.
let messages = [{ date: "January", from: "michael", message :"I have 4 kids already", time: "08:00am"}];
function updateMessages(newMessage, messages) {
  let found = false;
  for (const [i, prevMessage] of messages.entries()) {
    if (newMessage.message > prevMessage.message) {
      messages.splice(i, 0, newMessage);
      found = true;
      break;
    }
  }

  if (!found) {
    messages.push(newMessage);
  }

  if (messages.length > 10) {
    messages.length = 10;
  }

  return messages;
}