import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//import registerServiceWorker from './registerServiceWorker';

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

	let restPath = 'http://sands.site/wp-json/cge' + endpoint + '/' + query;
	console.log( restPath );
	fetch( restPath )
	  .then(res => res.json())
	  .then(state =>  ReactDOM.render(<App gameData={state} />, document.getElementById('root')));
}

ReactDOM.render(<App />, document.getElementById('root'));
window.fetchState( '/game/create' );

//registerServiceWorker();
