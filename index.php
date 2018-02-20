<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Planck
 */

planck_inc( 'global', 'header-page' );

if ( ! have_posts() ) {
	planck_inc( 'content', 'none' );
}

while ( have_posts() ) {
	the_post();

	planck_inc( get_post_type(), 'content', null, get_post_type() != 'post' ? get_post_type() : get_post_format() );
}

the_posts_navigation();
