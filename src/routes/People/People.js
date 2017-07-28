import React, { PureComponent } from "react"
import { Link } from "react-router-dom"
import s from "./People.sass"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import peopleIcon from "../../img/people.png"
import preloader from "../../img/preloader.gif"
import chubacka from "../../img/chubacka.jpg"
import Table from "../../components/Table/Table"
import Search from "../../components/Search/Search"
import Pagination from "../../components/Pagination/Pagination"
import * as actions from "../../actions/people"
import cx from "classnames"
import queryString from "querystring"

const VISIBLE_COUNT = 10;
const parseQuery = (search) => queryString.parse(search.replace("?", ""));

class People extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
		this.timer = {};

		this.change = this.change.bind(this);
		this.scroll = this.scroll.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const
			search = this.props.location.search,
			nextSearch = nextProps.location.search;

		if (search !== nextSearch) {
			const query = parseQuery(nextSearch);
			this.props.getPeople(query.search, query.page);
		}
	}


	change(search, prevSearch) {
		clearTimeout(this.timer);

		this.timer = setTimeout(() => {

			let query = parseQuery(this.props.location.search);

			if (search) {
				query.search = search;
			}
			else {
				delete query.search;
			}

			if (query.page && !prevSearch) {
				delete query.page;
			}

			this.props.history.push("?" + queryString.stringify(query));
		}, 300)
	}

	scroll() {
		// this.refs.search.refs.search.scrollIntoView({behavior: "smooth"});
	}


	componentDidMount() {
		const query = parseQuery(this.props.location.search);

		this.props.getPeople(query.search, query.page);
	}

	render() {
		const
			{
				results,
				count,
				details,
				fetched
			} = this.props.people,
			query = parseQuery(this.props.location.search),
			page = query.page,
			search = query.search;

		return (
			<div className={s.tabs}>
				<ul className={s.tabs_nav}>
					<li className={cx(s.tabs_nav_item, s.tabs_nav_item_active)}>
						<Link to="/">
							<img src={peopleIcon} alt="icon" className={s.tabs_icon} />
							People
						</Link>
					</li>
				</ul>

				<Search ref="search" value={search} onChange={this.change}/>

				<div className={s.tabs_container}>
					<div className={
						cx(s.preloader, {[s.visible]: !fetched})
					}>
						<img src={preloader} alt="" />
					</div>

					<div className={s.tabs_item}>
						{
							!count
								? <div className={s.tabs_not_found}>
										{details || "No people found, sorry!"}
										<img src={chubacka} alt="chubacka"/>
									</div>
								: <Table data={results} />
						}

					</div>
				</div>

				<Pagination
					count={Math.floor((count - 1) / VISIBLE_COUNT)}
					page={page}
					onClick={this.scroll}
					search={search} />
			</div>
		)

	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	getPeople: actions.getPeople
}, dispatch);

export default connect(
	state => ({
		people: state.people,
	}),
	mapDispatchToProps
)(People)