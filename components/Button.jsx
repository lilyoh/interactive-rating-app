'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const Button = ({ selectedNumber }) => {
	const router = useRouter();

	const handleSubmit = () => {
		if (selectedNumber !== null) {
			fetch('/api/number', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ number: selectedNumber }),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log('Success:', data);
					router.push(`/thankyou`);
				})
				.catch((error) => console.error('Error:', error));
		}
	};

	return (
		<button
			className="text-white bg-orange-1 rounded-3xl p-2 text-[14px] hover:bg-white hover:text-orange-1 font-bold tracking-wider"
			onClick={handleSubmit}
		>
			SUBMIT
		</button>
	);
};

export default Button;
