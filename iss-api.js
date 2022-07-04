 // making a map and tiles
 const mymap = L.map('issMap').setView([0, 0], 1);
 const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap.org</a> contributors.';

 const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
 const tiles = L.tileLayer(tileUrl, { attribution });
 tiles.addTo(mymap);

 // making a marker with a custom icon
 const issIcon = L.icon({
     iconUrl: 'iss200.png',
     iconSize: [50, 32],
     iconAnchor: [25, 16],
 });
 const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

 // sets interval of 2.30min to fetch the data.
//const intervalID = setInterval(getISS,10500);

const api_url = 'https://uphere-space1.p.rapidapi.com/satellite/25544/location';

let firstTime = true;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '92ce42a640msh35c6eb22faa7f4bp1394e7jsn7db9ada4a3c6',
		'X-RapidAPI-Host': '',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

async function getISS() {
    const response = await fetch(api_url, options);
    const data = await response.json();
    //const { latitude, longitude, velocity, altitude, units } = data;
    const test = data.height;
    console.log(test);

    //L.marker([latitude, longitude]).addTo(mymap);
    marker.setLatLng([latitude,longitude]);

    if (firstTime) {
        mymap.setView([latitude,longitude], 3);
        firstTime = false;
    }

    document.getElementById('lat').textContent = test.toFixed(2);
    document.getElementById('lon').textContent = test.toFixed(2);
    document.getElementById('vel').textContent = speed.toFixed(2);
    document.getElementById('alt').textContent = test.toFixed(2) + " ";
}

getISS();







