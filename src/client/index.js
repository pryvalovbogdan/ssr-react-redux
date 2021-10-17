import React from 'react'
import { hydrate } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { App } from '../containers/App'
import { counterApp } from '../containers/reducers'
import logger from 'redux-logger'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__
console.log('window.__PRELOADED_STATE__', window.__PRELOADED_STATE__);
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(counterApp, preloadedState, applyMiddleware(logger));

hydrate(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);