<?php
/**
 * Page titles
 *
 * @package Planck
 */

namespace Dekode\Planck\Titles;

/**
 * Get title
 */
function title() {
	if ( is_home() ) {
		if ( get_option( 'page_for_posts', true ) ) {
			return get_the_title( get_option( 'page_for_posts', true ) );
		} else {
			return esc_html__( 'Latest Posts', 'planck' );
		}
	} elseif ( is_archive() ) {
		return get_the_archive_title();
	} elseif ( is_search() ) {
		/* translators: %s: search query */
		return sprintf( esc_html__( 'Search Results for %s', 'planck' ), get_search_query() );
	} elseif ( is_404() ) {
		return esc_html__( 'Not Found', 'planck' );
	} else {
		return get_the_title();
	}
}
