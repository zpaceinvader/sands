import React, { Component } from 'react';

class Player extends Component {
  constructor(props){
    super(props);
  }

  render() {
	this.player = this.props.data.game_data.player;
	console.log(this.player);
    return (
		<div className="player">
			<span>Health: <span>{this.player.health}/{this.player.max_health}</span></span>
			<span>Mana: <span>{this.player.mana}</span></span>
			<span>Cards in drawpile: <span>{this.player.draw_pile.count}</span></span>
			<span>Cards in discard pile: <span>{this.player.discard_pile.count}</span></span>
			<span onClick={ () => {window.fetchState( '/game/create' ) } } className="btn">New game</span>
		</div>
    );
  }
}

export default Player;
