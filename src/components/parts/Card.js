import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
  }

  render() {console.log( this );
    return (
		<div onClick={ () => {window.fetchState( '/game/play_card', this.props.gameId, ['card=' + this.props.stats.number, 'target=1' ] ) } } className="card">
			<div>{this.props.stats.name}</div>
			<div>Cost: {this.props.stats.cost}</div>
			<div>Type: {this.props.stats.type}</div>
			<div dangerouslySetInnerHTML={{ __html: this.props.stats.text }} />
		</div>
    );
  }
}

export default Card;
