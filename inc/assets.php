<?php
/**
 * Enqueue assets
 *
 * @package Planck
 */

namespace Dekode\Planck\Assets;

/**
 * Dependencies
 */
use Heisenberg;

/**
 * Enqueue scripts.
 */
function scripts() {
	wp_enqueue_script( 'planck-commons', Heisenberg\get_assets_uri( 'commons.js' ), [], null, true );
	wp_enqueue_script( 'planck-main', Heisenberg\get_assets_uri( 'main.js' ), [ 'planck-commons' ], null, true );

	wp_localize_script( 'planck-main', 'siteconfig', [
		'debug' => SCRIPT_DEBUG || WP_DEBUG,
		'images' => get_template_directory_uri() . '/dist/images/',
		'monsterAssets' => get_template_directory_uri() . '/src/monsters/',
		'restUrl' => home_url( 'wp-json' ),
		'ajaxUrl' => admin_url( 'admin-ajax.php' ),
	] );
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\styles' );

/**
 * Enqueue styles.
 */
function styles() {
	wp_enqueue_style( 'planck-main', Heisenberg\get_assets_uri( 'main.css' ), [], null );
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\scripts' );

/**
 * Enqueue editor style.
 */
function editor_style() {
	add_editor_style( Heisenberg\get_assets_uri( 'editor.css' ) );
}
add_action( 'admin_init', __NAMESPACE__ . '\\editor_style' );
