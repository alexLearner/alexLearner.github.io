import React from "react";
import { Route, Switch } from "react-router-dom"
import People from "./routes/People/People"
import NotFound from "./routes/NotFound/NotFound"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import s from "./App.sass"

const App = () => (
	<div className={s.wrapper}>
		<div className={s.layout}>
			<Header />

			<main className={s.main}>
				<Switch>
					<Route path="/" component={People} />
					<Route component={NotFound} />
				</Switch>
			</main>

			<Footer />
		</div>
	</div>

);

export default App;
