import React from 'react'
import { hydrate } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { counterApp } from '../containers/reducers.js'
import { AppClient } from "./AppClient.js";

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(counterApp, preloadedState);

hydrate(
	<Provider store={store}>
		<AppClient />
		<div>nice</div>
	</Provider>,
	document.getElementById('root')
);