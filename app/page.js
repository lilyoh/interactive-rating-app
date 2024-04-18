'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import { useState } from 'react';

const page = () => {
	const [selectedNumber, setSelectedNumber] = useState(null);

	const handleClick = (number) => {
		setSelectedNumber(number);
	};

	return (
		<div className="h-screen bg-dark-1 flexCenter">
			<div className="bg-dark-2 rounded-3xl p-8 flex flex-col gap-6 w-[400px]">
				<div className="bg-dark-3 p-2 rounded-full w-[40px] h-[40px] flexCenter">
					<Image
						src="/icon-star.svg"
						alt="star"
						width={15}
						height={15}
					/>
				</div>
				<p className="text-white font-bold text-[24px]">How did we do?</p>
				<p className="text-gray-1 -mt-4">
					Please let us know how we did with your support request. All feedback is appreciated to help us improve our
					offering!
				</p>
				<div className="flexBetween">
					{RATE_NUMBERS.map((number) => (
						<p
							key={number}
							className={`text-white bg-dark-3 rounded-full w-[40px] h-[40px] text-[14px] flexCenter cursor-pointer hover:bg-orange-1 hover:text-white ${
								selectedNumber === number ? 'bg-orange-1 text-white' : ''
							}`}
							onClick={() => handleClick(number)}
						>
							{number}
						</p>
					))}
				</div>
				<Button selectedNumber={selectedNumber} />
			</div>
		</div>
	);
};

export default page;

const RATE_NUMBERS = [1, 2, 3, 4, 5];
