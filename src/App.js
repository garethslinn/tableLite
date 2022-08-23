import React from 'react';
import './App.css';
import { TableLite } from './tableLite';

function App() {
	const data = {
		header: ['Date Joined', 'Event', 'Value'],
		type: 'standard',
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
			<header className='App-header'>
				<TableLite
					cn={'table-lite'}
					isHoriziontal={true}
					data={data}
				/>
			</header>
		</div>
	);
}

export default App;
