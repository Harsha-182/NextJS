'use client'

import './globals.css'

import {useState} from 'react';

interface WrapperProps {
	children: React.ReactNode;
}

const ErrorSimulator = ({
	message = "An error ocurred"
}: {
	message ?: string;
}) => {
	const [error, setError] = useState(false);

	if(error) throw new Error(message);

	return(
		<button
			title='Simulate an error'
			className='bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-shadow-2xs'
			onClick={() => setError(true)}
		>
			Simulate Error
		</button>
	)
}

const ErrorWrapper = ({children}: WrapperProps) => {
	return(
		<div
			// className='flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300'
		>
			{/* <div className='absolute top-0 left-4 -translate-y-1/2'>
				<ErrorSimulator
					message='Simulated error in root layouot'
				/>
			</div> */}
			<div>{children}</div>;
		</div>
	)
}

export default ErrorWrapper;