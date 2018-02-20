<?php
/**
 * Theme helpers
 *
 * @package Planck
 */

namespace Dekode\Planck;

/**
 * Load templates from the template-parts folder
 *
 * @param string $type Type of component.
 * @param string $component File name of the component.
 * @param mixed  $value Value param to pass to the component.
 * @param string $component_type Alternative template file.
 * @param string $path Path to the template-parts folder.
 */
function inc( $type, $component, $value = null, $component_type = '', $path = 'template-parts' ) {
	$templates = array();

	if ( ! empty( $component_type ) ) {
		if ( $component_type !== $type ) {
			$templates[] = $path . '/' . $type . '-' . $component_type . '/' . $component . '-' . $component_type . '.php'; // /1+4/2+4/
		}
		$templates[]  = $path . '/' . $type . '/' . $component . '-' . $component_type . '.php'; // /1/2+4/
		$templates[] = $path . '/' . $component . '-' . $component_type . '.php'; // /2+4/
	} else {
		$templates[] = $path . '/' . $type . '/' . $component . '.php'; // /1/2/
	}

	$templates[] = $path . '/' . $component . '.php'; // /2/

	$template = locate_template( $templates );

	if ( '' !== $template ) {
		include apply_filters( 'planck_inc_template', $template );
	} elseif ( WP_DEBUG ) {
		echo esc_html( 'CANNOT FIND COMPONENT(S): "' . implode( '\' or \'', $templates ) . '"' );
	}
}

/**
 * Returns the templates from the template-parts folder.
 *
 * @param string $type Type of component.
 * @param string $component File name of the component.
 * @param mixed  $value Value param to pass to the component.
 * @param string $component_type Alternative template file.
 * @param string $path Path to the template-parts folder.
 *
 * @return string The component
 */
function ret( $type, $component, $value = null, $component_type = '', $path = 'template-parts' ) {
	ob_start();
	inc( $type, $component, $value, $component_type, $path );
	$output = ob_get_contents();
	ob_end_clean();

	return $output;
}
