<?php
/**
 * Heisenberg
 *
 * @package Planck
 */

namespace Heisenberg;

/**
 * Heisenberg manifest class.
 */
class Heisenberg {
	/**
	 * Manifest.
	 *
	 * @var array
	 */
	public $manifest;

	/**
	 * Dist.
	 *
	 * @var string
	 */
	public $dist;

	/**
	 * Instance
	 *
	 * @var object
	 */
	private static $instance = null;

	/**
	 * Instance
	 */
	public static function instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->dist = get_template_directory_uri() . '/dist';
		// Fetch manifest.
		$manifest_path = get_template_directory() . '/dist/assets.json';
		$this->manifest = file_exists( $manifest_path ) ? json_decode( file_get_contents( $manifest_path ), true ) : [];
	}

	/**
	 * Get asset filename
	 *
	 * @param string $asset Asset name.
	 * @return string|bool Filename if found or false
	 */
	public function get( $asset ) {
		return isset( $this->manifest[ $asset ] ) ? $this->manifest[ $asset ] : false;
	}

	/**
	 * Get asset uri
	 *
	 * @param string $asset Asset name.
	 * @return string Asset uri
	 */
	public function get_assets_uri( $asset ) {
		return $this->get( $asset ) ? "{$this->dist}/{$this->get( $asset )}" : false;
	}
}

/**
 * Get asset uri
 *
 * @param string $asset Asset name.
 * @return string Asset uri
 */
function get_assets_uri( $asset ) {
	return Heisenberg::instance()->get_assets_uri( $asset );
}
