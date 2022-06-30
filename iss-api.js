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
 const intervalID = setInterval(getISS, 2500);

 const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

 let firstTime = true;

 async function getISS() {
     const response = await fetch(api_url);
     const data = await response.json();
     const { latitude, longitude, velocity, altitude, units } = data;

     //L.marker([latitude, longitude]).addTo(mymap);
     marker.setLatLng([latitude,longitude]);

     if (firstTime) {
         mymap.setView([latitude,longitude], 3);
         firstTime = false;
     }

     document.getElementById('lat').textContent = latitude.toFixed(2);
     document.getElementById('lon').textContent = longitude.toFixed(2);
     document.getElementById('vel').textContent = velocity.toFixed(2);
     document.getElementById('alt').textContent = altitude.toFixed(2) + " " + units;
 }
 
 getISS();