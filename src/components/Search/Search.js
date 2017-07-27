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
			{onChange} = this.props;

		this.setState({value});

		if (onChange) {
			onChange(value)
		}
	}

	render() {
		return (
			<input
				className={s.search}
				value={this.state.value}
			  onChange={this.change}
			  name="q"
			/>
		)
	}
}

export default Search;