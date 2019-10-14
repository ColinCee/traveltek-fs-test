import express from 'express'
import departure from './routes/airport';
import cors from 'cors'

const app = express();
app.use(cors())


const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use('/departure', departure)

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});