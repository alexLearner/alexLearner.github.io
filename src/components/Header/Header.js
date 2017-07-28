import React  from 'react';
import { Link } from "react-router-dom"
import s from "./Header.sass"

export default () =>
	<header className={s.header}>
		<Link to="/">
			<h1 className={s.header_title}>Star Wars</h1>
			<span className={s.header_info}>Encyclopedia</span>
		</Link>
	</header>;