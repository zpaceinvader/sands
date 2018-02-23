import React, { Component } from 'react';

class Model extends Component {
	constructor(props){
		super(props);

		this.state = {
			currentCount: 1
	    }
	}

	componentDidMount() {
		const self = this;
		var intervalId = setInterval(function() {
			let count = self.state.currentCount + 1;
			if( count > 3 ) {
				count = 1;
			}
			self.setState({ currentCount: count });
		}, 800);
		// store intervalId in the state so it can be accessed later:
		this.setState({intervalId: intervalId});
	}

	componentWillUnmount() {
	// use intervalId from the state to clear the interval
		clearInterval(this.state.intervalId);
	}

	render() {
	// You do not need to decrease the value here
		return (
			<section>
				<img src={window.siteconfig.monsterAssets + "/wurm/idle/idle-" + this.state.currentCount + '.png'} />
			</section>
		);
	}
}

export default Model;
