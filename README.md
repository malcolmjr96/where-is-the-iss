# Intro
Where is the ISS, is a project that originally started by two co-workers who were learning how to code. After completely the tutorial by The Coding Train, we wanted to expand on it and add more features. The project used to track only the ISS but now have expanding the code and API, the project can track different and soon multiple satelites. 

The project uses Node.js and express for setting up the server. The server then communicates with the API provided by n2yo.com and returns it to the client (user browser).

## Dependencies
- dotenv: 16.0.3
- express: 4.18.2
- Node.js v18.12.1

## Potential avenues
- how far is the ISS from you
- how long it will take to go over top of you? 

## Our project uses:
- [n2yo.com](https://n2yo.com) Satellite Tracking
- [openstreetmap.org](https://openstreetmap.org) Provides map data.
- [leafletjs.com](https://leafletjs.com/) Makes maps more interactive. 

## Installing
- Note: You will need to install [Node.js](https://nodejs.org/en/download/) v18.12.1 or higher.
- Clone the repo, then open the terminal and navigate to the folder containing the cloned files. 
- Modify .env_sample with your API Key from n2yo.com and then rename the file to .env. 
- Type node index.js in the terminal. 
