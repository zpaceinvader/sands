<?php
/**
 * The footer for our theme
 *
 * @package Planck
 */

	// Fire actions prior to including the footer module.
	do_action( 'planck_get_footer' );
	planck_inc( 'global', 'footer' );
	?>
</div>
<?php wp_footer(); ?>
</body>
</html>
