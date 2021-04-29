import React from 'react';
import ItemStatusFilter from './item-status-filter';

export default class SearchPanel extends React.PureComponent{
	constructor(props){
		super(props);
	}

    state = {
		term: ''
	}

	onSearchChange = (e) => {
		const term = e.target.value;
		this.setState({ term });
		this.props.onSearchChange(term);
	}

	render(){
		return (
			<input placeholder='type to search...' 
			className='form-control' 
			value={this.state.term} 
			onChange={this.onSearchChange} 
			style={this.searchStyle} /> 
		);
	}
}