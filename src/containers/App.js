import React from 'react';
import {selectorGetData} from "./selectors";
import {useSelector} from "react-redux";

export const App = () => {
	const counter = useSelector(
		selectorGetData
	);

	return <div>
		hellose
		<span>{counter.count}</span>
	</div>
};
