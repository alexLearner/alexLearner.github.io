import React from 'react';
import { Route } from 'react-router-dom'
import People from './routes/People/People'
import Header from "./components/Header/Header"
import s from "./app.sass"

const App = () => (
	<div className={s.wrapper}>
		<Header />

		<main className={s.main}>
			<Route exact path="/" component={People} />
		</main>
	</div>

);

export default App;
