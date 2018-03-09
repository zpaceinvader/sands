import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);

		this.state = {
			isTargeting : false
		}

		this.setTarget = this.setTarget.bind( this );
  }

	setTarget( targetType ) {
		switch (targetType) {
			case 'creature':
				if ( this.state.isTargeting ) {
					this.setState(prevState => ({
						isTargeting: false
					}));
					window.targeting = false;
				} else if( !window.targeting ) {
					this.setState(prevState => ({
						isTargeting: true
					}));
					window.targeting = this.props.stats.number;
				}
				break;
			default:
				window.fetchState( '/game/play_card', this.props.gameId, ['card=' + this.props.stats.number, 'target=' + 0 ] );
		}
	}

  render() {
		//console.log( this.props.stats );
		const hasMana = ((parseInt(this.props.stats.cost) <= parseInt(this.props.mana)) ? true : false);
		let classes   = 'card';

		if ( ! hasMana ) {
			classes += ' invalid';
		}

		if ( this.state.isTargeting ) {
			classes += ' targeting';
		}

    return (
		<div className={classes} onClick={ () => { if( hasMana ) this.setTarget( this.props.stats.target ) } }>
			<div className="name">{this.props.stats.name}</div>
			<div className="cost">Cost: {this.props.stats.cost}</div>
			<div className="type">Type: {this.props.stats.type}</div>
			<div className="desc" dangerouslySetInnerHTML={{ __html: this.props.stats.text }} />
		</div>
    );
  }
}

export default Card;
