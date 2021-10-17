import React from 'react';
import {selectorGetData} from "./selectors";
import {useSelector} from "react-redux";

export const App = () => {
	const counter = useSelector(
		selectorGetData
	);
	console.log('counter', counter);
	return <div>
		hellose
		<span>{counter.count}</span>
	</div>
};
