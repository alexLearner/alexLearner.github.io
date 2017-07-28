import React from "react";
import s from "./Pagination.sass"
import {Link} from "react-router-dom"
import cx from "classnames"

export default props => {
	let {count, search, page} = props;

	if (!page) {
		page = 1;
	}

	search = search ? `&search=${search}` : "";
	page = +page;

	if (count <= 0 || !count) {
		return null;
	}

	let elems = [];
	for (let i = 1; i <= count + 1; i++) {
		elems.push(
			<li
				onClick={props.onClick}
				key={i}
				className={cx(s.pagination_item, {[s.active]: page === i})}>
				<Link to={`/?page=${i}${search}`}>{i}</Link>
			</li>
		)
	}

	return (
		<ul className={s.pagination}>
			<li
				onClick={props.onClick}
				className={cx(s.pagination_item, {[s.active]: page === 1})}>
				<Link to={`/?page=1${search}`}>«</Link>
			</li>
			{elems}
			<li
				onClick={props.onClick}
				className={
					cx(s.pagination_item, {[s.active]: page === count + 1})
				}>
				<Link to={`/?page=${count + 1}${search}`}>»</Link>
			</li>
		</ul>
	)

}