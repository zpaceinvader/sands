import React, { Component } from 'react';
import Model from './../parts/Model';

class Enemy extends Component {
  constructor(props){
    super(props);
  }

  render() {console.log( this );
	  this.curses = '';
	if( this.props.stats.curses ) {
		this.curses = <div className="curses">
			{this.props.stats.curses.map((curse, index) =>
				<span key={index}>{curse.effect}</span>
			)}
		</div>
	}
    return (
		<div className="enemy">
			<Model model="wurm" />
			<div className="name">{this.props.stats.name}</div>
			<div>Attack: {this.props.stats.attack}</div>
			<div>Health: {this.props.stats.health}/{this.props.stats.max_health}</div>
			{this.curses}
		</div>
    );
  }
}

export default Enemy;
