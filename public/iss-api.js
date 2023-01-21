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
// setInterval(fetchData, 138000);

let firstTime = true;
const button = document.getElementById('control');

button.addEventListener("click", async (event) => {
    let startTime, endTime;
    startTime = performance.now();
    console.log('Start Time: ' + startTime);
    let response = await fetch('https://shark-app-raee6.ondigitalocean.app/track')
        .then((res) => {
            let data = res.json();
            return data;
        });

    console.log(response);
    //L.marker([latitude, longitude]).addTo(mymap);
    // marker.setLatLng([satlat,satlong]);

    // if (firstTime) {
    //     mymap.setView([satlat,satlong], 3);
    //     firstTime = false;
    // }
    // Modifying html elements using specified ID's to include data from API.
    // document.getElementById('lat').textContent = satlat.toFixed(2);
    // document.getElementById('lon').textContent = satlong.toFixed(2);
    // document.getElementById('vel').textContent = sat_velocity.toFixed(2);
    // document.getElementById('alt').textContent = satalt.toFixed(2);
    endTime = performance.now();
    let timediff = startTime - endTime;
    timediff /= 1000; 
    let seconds = Math.round(timediff);
    console.log(seconds + " seconds");
  //  return sat_long;
});

