import React from 'react';

class AppHeader extends React.Component {
	

	constructor(props){
		super(props);
	}

    appHeaderCaption = 'Todo List';

	render(){
		const { importantCount, doneCount } = this.props;
		return (
			<h4>Important: {importantCount}, done: {doneCount}</h4>
		);
	}
}

export default AppHeader;