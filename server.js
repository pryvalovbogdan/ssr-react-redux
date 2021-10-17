import Express from 'express';

import { handleRender } from './src/server/server-render-middleware';

const app = Express();
const port = 4000;

//Serve static files
app.use('./dist', Express.static('dist'));

// This is fired every time the server side receives a request
app.use(handleRender);

app.listen(port);
