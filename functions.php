<?php
/**
 * Planck functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Planck
 */

/**
 * Planck includes
 *
 * The $planck_includes array determines the code library included in your theme.
 * Add or remove files to the array as needed. Supports child theme overrides.
 *
 * Please note that missing files will produce a fatal error.
 */
$planck_includes = [
	'inc/class-heisenberg.php',     // Heisenberg
	'inc/setup.php',                // Theme setup
	'inc/assets.php',               // Enqueue assets
	'inc/helpers.php',              // Helper functions
	'inc/titles.php',               // Page titles
	'inc/extras.php',               // Custom functions that act independently of the theme templates.
	'inc/class-planck-wrapper.php', // Theme wrapper class.
];

foreach ( $planck_includes as $file ) {
	$filepath = locate_template( $file );

	if ( ! $filepath ) {
		/* translators: %s: filepath */
		trigger_error( sprintf( esc_html__( 'Error locating %s for inclusion', 'planck' ), esc_html( $file ) ), E_USER_ERROR );
	}

	require_once $filepath;
}

unset( $file, $filepath );

if ( ! function_exists( 'planck_inc' ) ) {
	/**
	 * Alias inc() for less tendinitis.
	 *
	 * @param string $type Type of component.
	 * @param string $component File name of the component.
	 * @param mixed  $value Value param to pass to the component.
	 * @param string $component_type Alternative template file.
	 * @param string $path Path to the template-parts folder.
	 */
	function planck_inc( $type, $component, $value = null, $component_type = '', $path = 'template-parts' ) {
		\Dekode\Planck\inc( $type, $component, $value, $component_type, $path );
	}
}

if ( ! function_exists( 'planck_ret' ) ) {
	/**
	 * Alias req() for less tendinitis.
	 *
	 * @param string $type Type of component.
	 * @param string $component File name of the component.
	 * @param mixed  $value Value param to pass to the component.
	 * @param string $component_type Alternative template file.
	 * @param string $path Path to the template-parts folder.
	 *
	 * @return string The component
	 */
	function planck_ret( $type, $component, $value = null, $component_type = '', $path = 'template-parts' ) {
		return \Dekode\Planck\ret( $type, $component, $value, $component_type, $path );
	}
}
