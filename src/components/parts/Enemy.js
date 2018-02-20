import React, { Component } from 'react';

class Enemy extends Component {
  constructor(props){
    super(props);
  }

  render() {console.log( this );
    return (
		<div className="enemy">
			<div>{this.props.stats.name}</div>
			<div>Attack: {this.props.stats.attack}</div>
			<div>Health: {this.props.stats.health}/{this.props.stats.max_health}</div>
		</div>
    );
  }
}

export default Enemy;
