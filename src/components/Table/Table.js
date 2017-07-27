import React, { PureComponent }  from 'react';
import s from "./Table.sass"

const TABLE_FIELDS = [
	{
		name: "name",
		title: "Name"
	},
	{
		name: "gender",
		title: "Gender"
	},
	{
		name: "name",
		title: "Created at"
	}
];

const Thead = () =>
	<thead>
		<tr>
			{
				TABLE_FIELDS.map(({title}, index) =>
					<td key={index}>{title}</td>
				)
			}
		</tr>
	</thead>;


export default class Table extends PureComponent {
	render() {
		return (
			<table className={s.table}>
				<Thead/>

				<tbody>
				<tr>
					<td>n</td>
					<td>n2</td>
					<td>n3</td>
				</tr>

				<tr>
					<td>n</td>
					<td>n2</td>
					<td>n3</td>
				</tr>

				<tr>
					<td>n</td>
					<td>n2</td>
					<td>n3</td>
				</tr>
				</tbody>

			</table>
		)
	}
}