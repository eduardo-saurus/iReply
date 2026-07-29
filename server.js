const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/status', (req, res) => {
  res.json({ status: "active", message: "Operational" });
});

app.get('/device/:name', (req, res) => {
  const deviceName = req.params.name;
  res.send(`Information for device: ${deviceName}`);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

