import React, { Component } from 'react';

class Model extends Component {
	constructor(props){
		super(props);

		this.state = {
			currentCount: 1,
			animation: 'idle',
			model: ''
	    }
	}

	componentDidMount() {
		this.setState({ animation: this.props.animation });
		this.setState({ model: this.props.model });

		const self = this;

		var intervalId = setInterval(function() {
			let count = self.state.currentCount + 1;
			let maxCount = 3;
			if( 'idle' === self.state.animation ) {
				maxCount = 9;
			}

			if( count > maxCount ) {
				if( 'dead' === self.state.animation ) {
					clearInterval(self.state.intervalId);
					return;
				} else {
					self.setState({ animation: 'idle' });
					count = 1;
				}
			}
			self.setState({ currentCount: count });
		}, 200);
		// store intervalId in the state so it can be accessed later:
		this.setState({intervalId: intervalId});
	}

	componentWillUnmount() {
	// use intervalId from the state to clear the interval
		clearInterval(this.state.intervalId);
	}

	render() {
		const animation = this.state.animation;
		const model = this.state.model;
		const frame = this.state.currentCount;

		return (
			<section>
				<img src={window.siteconfig.monsterAssets + "/" + model + "/" + animation + "/" + frame + '.png'} />
			</section>
		);
	}
}

export default Model;
