import React from 'react';

// https://www.w3.org/WAI/tutorials/tables/examples/multiplecolumnheaders

export const Table = ({
	data,
	idCaption = null,
	idSummary = null,
	isHoriziontal = null,
	cn,
}) => {
	return (
		<table
			className={cn}
			aria-labelledby={idCaption}
			aria-describedby={idSummary}
		>
			{!isHoriziontal && (
				<thead>
					<tr>
						{data.header.map((item, index) => {
							return <th>{item}</th>;
						})}
					</tr>
				</thead>
			)}

			<tbody>
				{data?.body.map((item, index) => {
					return (
						<tr>
							{data?.header && isHoriziontal && (
								<th>{data.header[index]}</th>
							)}
							{Object.values(item).map((value) => {
								return <td>{value}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

// eslint-disable-next-line no-lone-blocks
{
	/* <h2>horizontal</h2>
			<table>
				<tr>
					<th>Date</th>
					<td>12 February</td>
					<td>24 March</td>
					<td>14 April</td>
				</tr>
				<tr>
					<th>Event</th>
					<td>Waltz with Strauss</td>
					<td>The Obelisks</td>
					<td>The What</td>
				</tr>
				<tr>
					<th>Venue</th>
					<td>Main Hall</td>
					<td>West Wing</td>
					<td>Main Hall</td>
				</tr>
			</table> */
}
// eslint-disable-next-line no-lone-blocks
{
	/* // 
			<h2>Table with header cells in the top row only</h2>
			<table>
				<tr>
					<td></td>
					<th scope='col'>Monday</th>
					<th scope='col'>Tuesday</th>
					<th scope='col'>Wednesday</th>
					<th scope='col'>Thursday</th>
					<th scope='col'>Friday</th>
				</tr>
				<tr>
					<th scope='row'>09:00 – 11:00</th>
					<td>Closed</td>
					<td>Open</td>
					<td>Open</td>
					<td>Closed</td>
					<td>Closed</td>
				</tr>
				<tr>
					<th scope='row'>11:00 – 13:00</th>
					<td>Open</td>
					<td>Open</td>
					<td>Closed</td>
					<td>Closed</td>
					<td>Closed</td>
				</tr>
				<tr>
					<th scope='row'>13:00 – 15:00</th>
					<td>Open</td>
					<td>Open</td>
					<td>Open</td>
					<td>Closed</td>
					<td>Closed</td>
				</tr>
				<tr>
					<th scope='row'>15:00 – 17:00</th>
					<td>Closed</td>
					<td>Closed</td>
					<td>Closed</td>
					<td>Open</td>
					<td>Open</td>
				</tr>
			</table>
			<h2>Table with an offset column of header cells</h2>
			<table>
				<caption>Holidays taken in the last six months</caption>
				<thead>
					<tr>
						<th scope='col'>
							<abbr title='Identification Number'>ID</abbr>
						</th>
						<th scope='col'>Name</th>
						<th scope='col'>July</th>
						<th scope='col'>August</th>
						<th scope='col'>September</th>
						<th scope='col'>October</th>
						<th scope='col'>November</th>
						<th scope='col'>December</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>215</td>
						<th scope='row'>Abel</th>
						<td>5</td>
						<td>2</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>3</td>
					</tr>

					<tr>
						<td>231</td>
						<th scope='row'>Annette </th>
						<td>0</td>
						<td>5</td>
						<td>3</td>
						<td>0</td>
						<td>0</td>
						<td>6</td>
					</tr>

					<tr>
						<td>173</td>
						<th scope='row'>Bernard</th>
						<td>2</td>
						<td>0</td>
						<td>0</td>
						<td>5</td>
						<td>0</td>
						<td>0</td>
					</tr>

					<tr>
						<td>141</td>
						<th scope='row'>Gerald</th>
						<td>0</td>
						<td>10</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>8</td>
					</tr>

					<tr>
						<td>99</td>
						<th scope='row'>Michael</th>
						<td>8</td>
						<td>8</td>
						<td>8</td>
						<td>8</td>
						<td>0</td>
						<td>4</td>
					</tr>
				</tbody>
			</table>
			<h2>Table with two tier headers</h2>
			<table>
				<col />
				<colgroup span='2'></colgroup>
				<colgroup span='2'></colgroup>
				<tr>
					<td rowspan='2'></td>
					<th colspan='2' scope='colgroup'>
						Mars
					</th>
					<th colspan='2' scope='colgroup'>
						Venus
					</th>
				</tr>
				<tr>
					<th scope='col'>Produced</th>
					<th scope='col'>Sold</th>
					<th scope='col'>Produced</th>
					<th scope='col'>Sold</th>
				</tr>
				<tr>
					<th scope='row'>Teddy Bears</th>
					<td>50,000</td>
					<td>30,000</td>
					<td>100,000</td>
					<td>80,000</td>
				</tr>
				<tr>
					<th scope='row'>Board Games</th>
					<td>10,000</td>
					<td>5,000</td>
					<td>12,000</td>
					<td>9,000</td>
				</tr>
			</table>
			<h2>Table with headers spanning multiple rows or columns</h2>
			<table>
				<caption>Poster availability</caption>
				<col />
				<col />
				<colgroup span='3'></colgroup>
				<thead>
					<tr>
						<th scope='col'>Poster name</th>
						<th scope='col'>Color</th>
						<th colspan='3' scope='colgroup'>
							Sizes available
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th rowspan='3' scope='rowgroup'>
							Zodiac
						</th>
						<th scope='row'>Full color</th>
						<td>A2</td>
						<td>A3</td>
						<td>A4</td>
					</tr>
					<tr>
						<th scope='row'>Black and white</th>
						<td>A1</td>
						<td>A2</td>
						<td>A3</td>
					</tr>
					<tr>
						<th scope='row'>Sepia</th>
						<td>A3</td>
						<td>A4</td>
						<td>A5</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th rowspan='2' scope='rowgroup'>
							Angels
						</th>
						<th scope='row'>Black and white</th>
						<td>A1</td>
						<td>A3</td>
						<td>A4</td>
					</tr>
					<tr>
						<th scope='row'>Sepia</th>
						<td>A2</td>
						<td>A3</td>
						<td>A5</td>
					</tr>
				</tbody>
			</table>
			<h2>Table with multiple column headers in each column</h2>
			<table>
				<tr>
					<caption>Supplier contacts</caption>
					<th id='blank'>&nbsp;</th>
					<th id='co1' headers='blank'>
						Example 1 Ltd
					</th>
					<th id='co2' headers='blank'>
						Example 2 Co
					</th>
				</tr>
				<tr>
					<th id='c1' headers='blank'>
						Contact
					</th>
					<td headers='co1 c1'>James Phillips</td>
					<td headers='co2 c1'>Marie Beauchamp</td>
				</tr>
				<tr>
					<th id='p1' headers='blank'>
						Position
					</th>
					<td headers='co1 p1'>Sales Director</td>
					<td headers='co2 p1'>Sales Manager</td>
				</tr>
				<tr>
					<th id='e1' headers='blank'>
						Email
					</th>
					<td headers='co1 e1'>jp@1ltd.example.com</td>
					<td headers='co2 e1'>marie@2co.example.com</td>
				</tr>
				<tr>
					<th>&nbsp;</th>
					<th id='co3' headers='blank'>
						Example 3 Ltd
					</th>
					<th id='co4' headers='blank'>
						Example 4 Inc
					</th>
				</tr>
				<tr>
					<th id='c2' headers='blank'>
						Contact
					</th>
					<td headers='co3 c2'>Suzette Jones</td>
					<td headers='co4 c2'>Alex Howe</td>
				</tr>
				<tr>
					<th id='p2' headers='blank'>
						Position
					</th>
					<td headers='co3 p2'>Sales Officer</td>
					<td headers='co4 p2'>Sales Director</td>
				</tr>
				<tr>
					<th id='e2' headers='blank'>
						Email
					</th>
					<td headers='co3 e2'>Suz@ltd3.example.com</td>
					<td headers='co4 e2'>howe@4inc.example.com</td>
				</tr>
			</table>


 */
}
