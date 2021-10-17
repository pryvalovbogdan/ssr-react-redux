import React, {useEffect, useState} from 'react';
import {selectorGetData} from "../containers/selectors.js";
import {useSelector} from "react-redux";
import axios from "axios";

export const AppClient = () => {
	const counter = useSelector(
		selectorGetData
	);
	console.log('counter.count', counter);
	const [data, setData] = useState();

	useEffect(() => {
		axios.get(
			'https://content.guardianapis.com/search?q=trending&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c'
		)
			.then(response => setData(response.data.response));
	}, []);

	console.log('data', data);
	return <div>
		<span>{counter}</span>
		{data?.results?.map(item => <div key={item.id}>
			<h3>{item.fields.headline}</h3>
		</div>)}
	</div>
};
