import React, { Component } from 'react';

class GameInfo extends Component {
  constructor(props){
    super(props);
  }

  render() {console.log( this );
    return (
		<div className="debug">
			<h2>Debug</h2>
			<div>
				<span>Current state: <span>{this.props.data.current_state}</span></span>
			</div>
			<div>
				<span>Game ID: <span>{this.props.data.game_data.game_id}</span></span>
			</div>
			<div>
				<span>Class: <span>{this.props.data.game_data.player.class}</span></span>
			</div>
		</div>
    );
  }
}

export default GameInfo;
