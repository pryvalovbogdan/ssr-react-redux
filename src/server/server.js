import express from 'express';

import { handleRender } from './server-renderer.js';

const app = express();
const port = 4000;

//Serve static files
app.use(express.static('dist'));

// This is fired every time the server side receives a request
app.use(handleRender);

app.listen(port);
