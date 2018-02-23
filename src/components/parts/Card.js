import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
  }

  render() {console.log( this );
    return (
		<div onClick={ () => {window.fetchState( '/game/play_card', this.props.gameId, ['card=' + this.props.stats.number, 'target=1' ] ) } } className="card">
			<div className="name">{this.props.stats.name}</div>
			<div className="cost">Cost: {this.props.stats.cost}</div>
			<div className="type">Type: {this.props.stats.type}</div>
			<div className="desc" dangerouslySetInnerHTML={{ __html: this.props.stats.text }} />
		</div>
    );
  }
}

export default Card;
