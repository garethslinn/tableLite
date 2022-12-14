import React from 'react';
import './App.css';
import { TableLite } from './tableLite';

function App() {
	const data = {
		header: ['Date Joined', 'Event', 'Value'],
		// header: ['Date Joined', 'Event'],
		type: 1, // 1 standard, 2 double
		caption: 'This is a caption',
		summary:
			'It was popularised in the 1960s with the release of versions of Lorem Ipsum.',
		body: [
			{
				dateJoined: '25th Dec 2022',
				event: 'christmas Day',
				venue: 'All Saints Church',
			},
			{
				dateJoined: '13th September 2022',
				event: 'Genreal Meeting',
				venue: 'Main Hall',
			},
			{
				dateJoined: '12th Feb 2022',
				event: 'Birthday Celebration',
				venue: 'Main Hall',
			},
		],
	};

	return (
		<div className='App'>
			<TableLite cn={'table-lite'} isHoriziontalx data={data} />
		</div>
	);
}

export default App;
