import React from 'react';
import {selectorGetData} from "./selectors.js";
import {useSelector} from "react-redux";

export const App = () => {
	const counter = useSelector(
		selectorGetData
	);
	console.log('counter.count', counter);

	return <div>
		hello
		<span>{counter}</span>
	</div>
};
