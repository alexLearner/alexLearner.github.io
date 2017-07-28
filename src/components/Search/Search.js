import React, { PureComponent }  from 'react';
import s from "./Search.sass"

class Search extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {value: props.value || ""};
		this.change = this.change.bind(this);
	}

	change(e) {
		const
			{value} = e.target,
			prevValue = this.state.value,
			{onChange} = this.props;

		this.setState({value});

		if (onChange) {
			onChange(value, prevValue)
		}
	}

	render() {
		return (
			<input
				className={s.search}
				value={this.state.value}
			  onChange={this.change}
			  type="search"
				ref="search"
			  placeholder="Start typing for search..."
			  name="search"
			/>
		)
	}
}

export default Search;