# Intro
Where is the ISS, is a project that originally started by two co-workers who were learning how to code. After completely the tutorial by The Coding Train, we wanted to expand on it and add more features. The project used to track only the ISS but now have expanding the code and API, the project can track different and soon multiple satelites. 

The project uses Node.js and express for setting up the server. The server then communicates with the API provided by n2yo.com and returns it to the client (user browser).

## Dependencies 
- dotenv: [16.0.3](https://www.npmjs.com/package/dotenv)
- express: [4.18.2](https://www.npmjs.com/package/express)
- Node.js [v18.12.1](https://nodejs.org/en/download/)

## Our project uses:
- [n2yo.com](https://n2yo.com) Satellite Tracking
- [openstreetmap.org](https://openstreetmap.org) Provides map data.
- [leafletjs.com](https://leafletjs.com/) Makes maps more interactive. 

## Installing
- Note: You will need to install [Node.js](https://nodejs.org/en/download/) v18.12.1 or higher.
- Clone the repo, then open the terminal and navigate to the folder containing the cloned files. 
- Run `npm install`, it will install all of the project dependencies. 
- Modify `.env_sample` with your API Key from n2yo.com and then rename the file to .env. 
- After project dependencies have all been installed, type `npm run start` this will start the server and serve webpages to `http://localhost:3060` by default.
- If project does not start, type `node index.js` in the terminal. 

## Future Changes / ideas
- Deploying project to Google Cloud, and automatically deploying new changes (Needed)
- Add history page? Requires database (which is not too hard to implement).
- how far is the ISS from you?
- how long it will take to go over top of you?
