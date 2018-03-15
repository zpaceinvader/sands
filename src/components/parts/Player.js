import React, { Component } from 'react';
import Model from './../parts/Model';

class Player extends Component {
  constructor(props){
    super(props);

	this.state = {
		player: null
	}
  }

  render() {
	this.state.player = this.props.gameData.game_data.player;

    return (
		<div className="player-model">
			<Model animation="idle" model="nomad" />
			<div>Health: {this.state.player.health}/{this.state.player.max_health}</div>
		</div>
    );
  }
}

export default Player;
