import React, { PureComponent }  from 'react';
import s from "./Table.sass"
import moment from "moment"

const GENDER_ALIASES = {
	male: {
		className: "red"
	},
	"n/a": {
		title: "Not available",
		className: "gray"
	},
	female: {
		className: "blue"
	}
};

const TABLE_FIELDS = [
	{
		name: "name",
		title: "Name"
	},
	{
		name: "gender",
		title: "Gender",
		cb: gender => {
			const obj = GENDER_ALIASES[gender];
			if (obj) {
				return <span className={s[obj.className]}>{obj.title || gender}</span>
			}

			return <span className={s.gray}>{gender}</span>
		}
	},
	{
		name: "created",
		title: "Created at",
		cb: date => moment(date).format('DD/MM/YYYY hh:mm:ss a')
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
		const {data} = this.props;

		const rows = data && data.map((people, rowIndex) =>
			<tr key={rowIndex}>
				{
					TABLE_FIELDS.map((field, colIndex) =>
						<td key={colIndex}>
							{
								field.cb ? field.cb(people[field.name]) : people[field.name]
							}
						</td>
					)
				}
			</tr>
		);

		return (
			<table className={s.table}>
				<Thead/>

				<tbody>
					{rows}
				</tbody>

			</table>
		)
	}
}