import express from 'express'
import departure from './routes/airport';
import cors from 'cors'
import flight from './routes/flight';

const app = express();
app.use(cors())


const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use('/airport', departure)
app.use('/flight', flight)
// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});