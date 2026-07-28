const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/status', (req, res) => {
  res.json({ status: "active", message: "Operational" });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});