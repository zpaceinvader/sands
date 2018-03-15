import React, { Component } from 'react';

class Model extends Component {
	constructor(props){
		super(props);

		this.state = {
			currentCount: 1,
			animation: 'idle',
			model: '',
			animationFrames: 0,
	    }

		this.animations = {
			wurm: {
				idle : {
					frames: 3,
					framerate: 500
				}
			},
			nomad: {
				idle : {
					frames: 1,
					framerate: 200
				}
			}
		}
	}

	componentDidMount() {
		this.setState({ animation: this.props.animation });
		this.setState({ model: this.props.model });

		const self = this;
		const frames = this.animations[ this.props.model ][ this.props.animation ];

		var intervalId = setInterval(function() {
			let count = self.state.currentCount + 1;
			let maxCount = frames.frames;

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
		}, frames.framerate);
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
				<img src={window.siteconfig.characterAssets + "/" + model + "/" + animation + "/" + frame + '.png'} />
			</section>
		);
	}
}

export default Model;
