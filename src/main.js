import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.fetchState = function( endpoint, gameId, variables ) {
	let query = '';
	if ( gameId ) {
		query += '?game_id=' + gameId;

		if( variables ) {
			for (var i = 0; i < variables.length; i++) {
				query += '&' + variables[i];
			}
		}
	}
	let restPath = window.siteconfig.restUrl + '/cge' + endpoint + '/' + query;
	console.log( restPath );
	fetch( restPath )
	  .then(res => res.json())
	  .then(state =>  {localStorage.setItem( 'gameId', state.game_data.game_id ); ReactDOM.render(<App gameData={state} />, document.getElementById('root'))});
}
window.fetchState( '/game/create' );
const gameId = localStorage.getItem( 'gameId' );

if ( gameId && gameId !== null ) {
	window.fetchState( '/game/game_state', gameId );
} else {
	window.fetchState( '/game/create' );
}

ReactDOM.render(<App />, document.getElementById('root'));

//registerServiceWorker();
