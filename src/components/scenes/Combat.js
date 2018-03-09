import React, { Component } from 'react';

import Enemy from './../parts/Enemy';
import Card from './../parts/Card';

class Combat extends Component {
  constructor(props){
    super(props);

	this.state = {
		enemies: [],
		hand: [],
		gameId: null
    }
}

  render() {
	  if( this.props.data ) {
		  this.state.enemies = this.props.data.enemies;
		  this.state.hand = this.props.data.hand;
		  this.state.gameId = this.props.data.gameId;
			this.state.mana = this.props.data.gameData.game_data.player.mana;

		  return (
			  <div className="scene">
				  <div className="game-object"><span className="label">Enemies</span>
	  				{this.state.enemies.map((enemy, index) =>
	  				<Enemy key={enemy.target} gameId={this.state.gameId} stats={enemy} />
	  			  )}
	  			</div>
	  			<div className="game-object"><span className="label">Hand</span>
	  				{this.state.hand.map((card, index) =>
	  				<Card key={card.number} gameId={this.state.gameId} mana={this.state.mana} stats={card} />
	  			  )}
	  			</div>
	  			<div className="game-object">
	  				<span onClick={ () => {window.fetchState( '/game/end_turn', this.state.gameId, [] ) } } className="btn">End turn</span>
	  			</div>
			</div>
	      );
	  } else {
		  return (
	  		<div className="scene">No data</div>
	      );
	  }
  }
}

export default Combat;
