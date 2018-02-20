import React, { Component } from 'react';

// Parts
import Enemy from './components/parts/Enemy';
import Card from './components/parts/Card';

//Scenes
import ClassPicker from './components/scenes/ClassPicker';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
		currentState: 'new_game',
	  	gameData: false,

		enemies: [],
		hand: [],
		gameId: null
    }
  }

  render() {
	  if( this.props.gameData ) {
		  this.state.gameData = this.props.gameData;
		  this.state.currentState = this.props.gameData.current_state;
		  console.log( this.props.gameData );

		  switch (this.state.currentState) {
		  	case 'player_turn':
				this.state.enemies = this.props.gameData.game_data.enemy.enemies;
				this.state.hand = this.props.gameData.game_data.player.hand.cards;
				this.state.gameId = this.props.gameData.game_data.game_id;

				return (
				  <div className="App">
					<div className="App-header">
					  <h2>A card game</h2>
					</div>
					<div className="game-object"><span className="label">Game</span>
						{this.state.gameData.game_id}
					</div>
					<div className="game-object"><span className="label">Enemies</span>
						{this.state.enemies.map((enemy, index) =>
						<Enemy key={index} stats={enemy} />
					  )}
					</div>
					<div className="game-object"><span className="label">Hand</span>
						{this.state.hand.map((card, index) =>
						<Card key={index} gameId={this.state.gameId} stats={card} />
					  )}
					</div>
					<div className="game-object">
						<span onClick={ () => {window.fetchState( '/game/end_turn', this.state.gameId, [] ) } } className="btn">End turn</span>
					</div>
				  </div>
				);
		  		break;
		  	default:
				return (
				  <div className="App">
					<ClassPicker app={this} gameData={this.state.gameData} />
				  </div>
				);
		  }
	  } else {
		  return (<div className="App"></div>);
	  }
  }
}

export default App;
