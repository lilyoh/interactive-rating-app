import React from 'react';
import { getNumber } from '../actions/getNumber';

const page = async () => {
	const number = await getNumber();
	console.log('number', number);

	return <div>rating: {number}</div>;
};

export default page;
