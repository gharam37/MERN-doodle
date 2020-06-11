import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index';
import cors from 'cors'
// Instantiate express
const app = express();
// Set our port
const port =process.env.PORT || 3001;
// Configure app to user bodyParser

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
// Register our routes in app

app.use('/', routes);


app.use(express.static('public'));

// Start our server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
// Export our app for testing purposes
export default app;