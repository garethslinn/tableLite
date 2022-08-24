import React from 'react';
import { Table } from './table';

// https://www.w3.org/WAI/tutorials/tables/examples/multiplecolumnheaders

export const TableLite = ({
	data,
	isHoriziontal = false,
	cn = null,
}) => {
	const idCaption = `cpation-${Math.random().toString(36).slice(2)}`;
	const idSummary = `summary-${Math.random().toString(36).slice(2)}`;
	return (
		<>
			{data?.caption || data?.summary ? (
				<figure>
					<figcaption>
						<span id={idCaption}>
							<strong>{data.caption}</strong>
						</span>
						<br />
						<span id={idSummary}>{data.summary}</span>
						<br />
						<br />
						<Table
							idCaption={idCaption}
							idSummary={idSummary}
							isHoriziontal={isHoriziontal}
							cn={cn}
							data={data}
						/>
					</figcaption>
				</figure>
			) : (
				<Table isHoriziontal={isHoriziontal} cn={cn} data={data} />
			)}
		</>
	);
};
