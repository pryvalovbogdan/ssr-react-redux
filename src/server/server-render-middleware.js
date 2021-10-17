import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { App } from '../containers/App';
import { counterApp } from '../containers/reducers';
import { renderToString } from 'react-dom/server';
import logger from 'redux-logger';

function handleRender(req, res) {
	// Compile an initial state
	let preloadedState = { counter: 23 };

	// Create a new Redux store instance
	const store = createStore(counterApp, preloadedState, applyMiddleware(logger));

	// Render the component to a string
	const html = renderToString(
		<Provider store={store}>
			<App />
		</Provider>
	);

	// Grab the initial state from our Redux store
	const finalState = store.getState();

	// Send the rendered page back to the client
	res.send(renderFullPage(html, finalState))
}


// We are going to fill these out in the sections to follow

function renderFullPage(html, preloadedState) {
	return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/usage/server-rendering#security-considerations
			          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
					/</g,
					'\\u003c'
				)}
        </script>
        <script src="./client/index.js"></script>
      </body>
    </html>
    `
}

module.exports = {
	handleRender
};
