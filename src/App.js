import React, { Component } from 'react';

// Parts
import Enemy from './components/parts/Enemy';
import Card from './components/parts/Card';
import Stats from './components/parts/Stats';
import GameInfo from './components/parts/GameInfo';

//Scenes
import ClassPicker from './components/scenes/ClassPicker';
import Combat from './components/scenes/Combat';

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
		let render;

	  if( this.props.gameData ) {
		  this.state.gameData = this.props.gameData;
		  this.state.currentState = this.props.gameData.current_state;
			console.log( this.props.gameData );

		  switch (this.state.currentState) {
		  	case 'player_turn':
					this.state.enemies = this.props.gameData.game_data.enemy.enemies;
					this.state.hand = this.props.gameData.game_data.player.hand.cards;
					this.state.gameId = this.props.gameData.game_data.game_id;

					render = (
					  <div className="App">
					  	<GameInfo data={this.state.gameData} />
						<Combat data={this.state} />
						<Stats data={this.state.gameData} />
					  </div>
					);
		  		break;
		  	default:
					render = (
					  <div className="App">
					  <div />
						<ClassPicker app={this} gameData={this.state.gameData} />
						<div />
					  </div>
					);
		  }
	  } else {
		  render = (<div className="App"></div>);
	  }

		return render;
  }
}

export default App;
