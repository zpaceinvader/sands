import React, { Component } from 'react';

import Player from './../parts/Player';
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
				<div className="scene combat">
					<div className="arena">
						<div className="player-models">
							<Player gameId={this.state.gameId} gameData={this.props.data.gameData} />
						</div>
						<div className="enemy-models">
							{this.state.enemies.map((enemy, index) =>
								<Enemy key={enemy.target} gameId={this.state.gameId} stats={enemy} />
							)}
						</div>
					</div>
					<div className="player-hand">
						{this.state.hand.map((card, index) =>
							<Card key={card.number} gameId={this.state.gameId} mana={this.state.mana} stats={card} />
						)}
					</div>
					<div className="scene-controls">
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
