import React  from "react";
import { Link } from "react-router-dom";
import s from "./NotFound.sass"

export default () =>
	<div className={s.not_found}>
		Page was not found
		<br />
		<Link to="/">Go to Main page</Link>
	</div>;