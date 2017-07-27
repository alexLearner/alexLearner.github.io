import React, { PureComponent }  from 'react';
import s from "./Pagination.sass"

export default class Pagination extends PureComponent {
	render() {
		return (
			<ul className={s.pagination}>
				<li>
					<a href="1"></a>
				</li>
			</ul>
		)

	}
}