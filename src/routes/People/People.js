import React, { PureComponent }  from 'react';
import s from "./People.sass"
import people from "../../img/people.png"
import Table from "../../components/Table/Table"
import Search from "../../components/Search/Search"
import Pagination from "../../components/Pagination/Pagination"

export default class Peoples extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		return (
			<div className={s.tabs}>
				<ul className={s.tabs_nav}>
					<li className={s.tabs_nav_item}>
						<img src={people} alt="icon" className={s.tabs_icon} />
						People
					</li>
				</ul>

				<Search />

				<div className={s.tabs_containers}>
					<div className={s.tabs_item}>
						<Table />
					</div>
				</div>

				<Pagination />
			</div>
		)

	}


}