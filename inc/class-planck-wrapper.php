<?php
/**
 * Theme wrapper
 *
 * @package Planck
 */

namespace Dekode\Planck\Wrapper;

/**
 * Get path to main template
 */
function template_path() {
	return Planck_Wrapper::$main_template;
}

/**
 * Get path to sidebar template
 */
function sidebar_path() {
	return new Planck_Wrapper( 'sidebar.php' );
}

/**
 * Wrapper class
 */
class Planck_Wrapper {
	/**
	 * Stores the full path to the main template file
	 *
	 * @var string
	 */
	public static $main_template;

	/**
	 * Basename of template file
	 *
	 * @var string
	 */
	public $slug;

	/**
	 * Array of templates
	 *
	 * @var array
	 */
	public $templates;

	/**
	 * Stores the base name of the template file; e.g. 'page' for 'page.php' etc.
	 *
	 * @var string
	 */
	public static $base;

	/**
	 * Constructor.
	 *
	 * @param string $template Url to base template.
	 */
	public function __construct( $template = 'base.php' ) {
		$this->slug      = basename( $template, '.php' );
		$this->templates = [ $template ];

		if ( self::$base ) {
			$str = substr( $template, 0, - 4 );
			array_unshift( $this->templates, sprintf( $str . '-%s.php', self::$base ) );
		}
	}

	/**
	 * Locate template
	 */
	public function __toString() {
		$this->templates = apply_filters( 'planck_wrap_' . $this->slug, $this->templates );

		return locate_template( $this->templates );
	}

	/**
	 * Wrap content in base template
	 *
	 * @param string $main The path of the template to include.
	 */
	public static function wrap( $main ) {
		// Check for other filters returning null.
		if ( ! is_string( $main ) ) {
			return $main;
		}

		self::$main_template = $main;
		self::$base          = basename( self::$main_template, '.php' );

		if ( 'index' === self::$base ) {
			self::$base = false;
		}

		return new Planck_Wrapper();
	}
}

add_filter( 'template_include', [ __NAMESPACE__ . '\\Planck_Wrapper', 'wrap' ], 109 );
