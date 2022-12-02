const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3060;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.post('/', (req, res) => {
    res.send('POST request to the homepage')
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
app.get('/sattrack', async (request,response) => {
    let velocity, altitude;
    const API_KEY = process.env.API_KEY;
    const n2yo_url = `https://api.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/1/1/&apiKey=${API_KEY}`;
    const n2yo_response = await fetch(n2yo_url);
    const sat_data = await n2yo_response.json();

    altitude = await sat_data.positions[0].sataltitude;
   
    calculateVelocity();
    const satData = {
        satPosition: sat_data,
        satVelocity: velocity
    };

    response.json(satData);

    function calculateVelocity(){
        const distance_around_earth = 1.55;
        const earthRadius = 6367;
        const seconds_in_hour = 3600;   
        const a = 2 * Math.PI;
        let c = earthRadius + altitude;
        const orbPeriod = Math.round(a * c) / distance_around_earth;
        velocity = orbPeriod / seconds_in_hour;
        return velocity;
    };
});

