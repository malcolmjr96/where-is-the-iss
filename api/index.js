import Bugsnag from '@bugsnag/js'
import bugsnagPluginExpress from '@bugsnag/plugin-express';
Bugsnag.start({
    apiKey: `${BSAPIKEY}` || process.env.BSAPIKEY,
    plugins: [bugsnagPluginExpress]
  })

import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from 'express';
import cors from 'cors'

const app = express();
const middleware = Bugsnag.getPlugin('express')
app.use(middleware.requestHandler)
//const router = express.Router();

const port = process.env.PORT || 3060;
import fetch from 'node-fetch';


app.use(cors({
    origin: 'https://shark-app-raee6.ondigitalocean.app/track'
}));

app.use(express.static('public'))

//app.get('/', (req, res) => {
//    res.send('hello world!');
//});

app.post('/', (req, res) => {
    console.log('test');
    res.send('POST request to the homepage')
});


app.get('/track', async (req,res) => {
    let velocity, altitude;

    const API_KEY = `${API_KEY}` || process.env.API_KEY;
    const n2yo_url = `https://api.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/1/1/&apiKey=${API_KEY}`;
    const n2yo_response = await fetch(n2yo_url);
    const sat_data = await n2yo_response.json();

    altitude = await sat_data.positions[0].sataltitude;
    velocity = await calculateVelocity();

    const satData = {
        satPosition: sat_data,
        satVelocity: velocity,
    };
    Bugsnag.notify(new Error('Fetch Data'))



    function calculateVelocity(){
        const distance_around_earth = 1.55;
        const earthRadius = 6367;
        const seconds_in_hour = 3600;   
        const a = 2 * Math.PI;
        let c = earthRadius + altitude;
        const orbPeriod = Math.round(a * c) / distance_around_earth;
        velocity = orbPeriod / seconds_in_hour;
        Bugsnag.notify(new Error('Calculate Velocity'))
        return velocity;
    }

    Bugsnag.notify(new Error('Finished!'))
    return res.status(422).json(satData);
  //  res.send(satData);
    //res.status(404).send("Sorry can't find that!")
});
// Bugsnag.notify(new Error('Test error'))
// app.use(function (req, res, next) {
//     throw new Error('Test error')
//   })

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});

app.use(middleware.errorHandler)