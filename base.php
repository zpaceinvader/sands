<?php
/**
 * A template wrapper, which is used in all template files.
 *
 * The base template allows us to pull all common template parts into a single file to eliminate repetition.
 *
 * @package Planck
 */

use Dekode\Planck\Setup;
use Dekode\Planck\Wrapper;

get_header();
?>

<div id="root"></div>


<pre>
	Starte nytt spill:
/wp-json/cge/game/create

Velge klasse:
/wp-json/cge/game/response?game_id=<gameid>&response=<klasseid>

Spill et kort:
/wp-json/cge/game/play_card?game_id=<gameid>&card=<card_number>&target=<target_id> (evt blank eller "self")

End turn:
/wp-json/cge/game/end_turn?game_id=<gameid>

Få current game state:
/wp-json/cge/game/game_state?game_id=<gameid>
</pre>
<?php
get_footer();
