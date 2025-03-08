const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // JSON request bodies handle කිරීම

// Default route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Bot add/update route
app.post('/bot-update', (req, res) => {
  const botData = req.body.botData;  // POST request එකෙන් bot data එක ලබාගන්න
  res.send(`Bot updated with: ${botData}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
