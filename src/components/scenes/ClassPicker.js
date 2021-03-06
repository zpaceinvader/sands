import React, { Component } from 'react';

class ClassPicker extends Component {
  constructor(props){
    super(props);

	this.data = {
		options: [],
		fetch: false,
		gameId: null
    }
}

  render() {
	  if( this.props.gameData ) {
		  this.data.options = this.props.gameData.action.options;
		  this.gameId = this.props.gameData.game_data.game_id;

		  return (
	  		<div className="scene class-picker">
			<div />
			<div>
				<div className="sceneDesc">
					<h1>Pick a class!</h1>
				</div>
				<div className="picker-buttons">
	  			{this.data.options.map((option, index) =>
					<span key={index} onClick={ () => {window.fetchState( '/game/response', this.gameId, ['response=' + option.id] ) } } key={index} className="btn">
						{option.name}
					</span>
	  			)}
				</div>
				</div>
				<div />
	  		</div>
	      );
	  } else {
		  return (
	  		<div className="scene">No data</div>
	      );
	  }
  }
}

export default ClassPicker;
