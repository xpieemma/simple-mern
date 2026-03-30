<p align="center">
  <img src="https://user-images.githubusercontent.com/14852491/64910580-cc163700-d70f-11e9-99ec-8c49095a8c3b.png" />
  <br/>
  the simplest MERN (MongoDB, Express, React and Node) setup
</p>

## Live Deployments

- **Frontend**: [LIVE](https://simple-mern-frontend-n50l.onrender.com)
- **Backend API**: [live](https://simple-mern-backend-gd8v.onrender.com)

## Why?

While there are many MERN starters on the interwebs already, I've struggled to find a 'minimal viable' MERN app. Existing examples usually involve other libraries and tools such as Redux, React Router, Typescript, Docker etc. These are all great things, but add unnecessary complexity when you just want to start simple.

This MERN starter, `simple-mern` aims to be the minimum you need to get started with the stack.

## Getting Started

### Development

1. Install MongoDB and run on default port `27017`
2. `npm install` in both root directory and `client` directory
3. `npm start` in both root directory and `client` directory
4. Head to [localhost:3000](http://localhost:3000) to see the 'My Tasks' app

### Production (Local)

```bash
npm install
npm run build
npm run start:prod
The production app will be running at localhost:5000.

Production (Render)
This project is configured for deployment on Render:

Backend runs as a Web Service (Node.js)

Frontend runs as a Static Site (React)

MongoDB Atlas is used for the database

Environment variables required on Render:

MONGODB_URI – your MongoDB Atlas connection string

REACT_APP_API_URL – the URL of your backend Web Service

Extend simple-mern
While this boilerplate was designed to be as minimal as possible, support for other tech could be added in their own branches.

Current Extensions
with-axios: Replaces Axios with fetch - @leonlafa

with-react-router: Adds React Router - @leonlafa

with-material-ui: Adds Material UI - @leonlafa

with-docker: Adds Docker & Docker Compose - @alejandrotoga02

with-redux: Adds Redux for state management - @rahulSinha-01

Ideas for Future Extensions
Replace JavaScript with TypeScript

Multi-user setup with social auth (e.g. Google, Facebook etc. login using Passport)

Redux or MobX global state management for tasks

Static site generator using GatsbyJS or Next.js

If you'd like to add support for any of the above or something else, please open an issue letting me know, and I'll create a new branch to base the PR against.