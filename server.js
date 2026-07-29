const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const sensorData = [];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/status', (req, res) => {
    res.json({
        status: 'active',
        message: 'Operational'
    });
});

app.get('/device/:name', (req, res) => {
    const { name } = req.params;

    res.json({
        device: name,
        message: `Information for device: ${name}`
    });
});

app.post('/device/sensor1/data', (req, res) => {
    const reading = req.body;

    sensorData.push(reading);

    res.status(201).json({
        totalReadings: sensorData.length,
        data: reading
    });
});

app.get('/device/sensor1/data', (req, res) => {
    res.json({
        totalReadings: sensorData.length,
        data: sensorData
    });
});

app.listen(PORT, () => {
});