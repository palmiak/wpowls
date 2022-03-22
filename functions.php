<?php
require_once __DIR__ . '/vendor/autoload.php';
$timber = new \Timber\Timber();

$sage_includes = array(
	'lib/timber.php',
	'lib/setup.php',
	'lib/gutenberg.php',
	'lib/Class-owl-post.php',
	'lib/filters.php',
	'lib/class-css-vars.php',
	'lib/class-customizer.php',
	'lib/events.php',
);

foreach ( $sage_includes as $file ) {
	$filepath = locate_template( $file );
	if ( ! $filepath ) {
		trigger_error( sprintf( __( 'Error locating %s for inclusion', 'sasquatch' ), $file ), E_USER_ERROR );
	}

	require_once $filepath;
}

add_action(
	'wp_head',
	function() {
		?>
		<script>
			var algolia_ID = '<?php echo get_option( 'algolia_application_id' ); ?>';
			var algolia_API = '<?php echo get_option( 'algolia_search_api_key' ); ?>';
		</script>
		<?php
	}
);

add_action( 'init', array( 'sowka\css_vars\Css_Vars', 'get_instance' ) );
add_action( 'init', array( 'sowka\customizer\Customizer', 'get_instance' ), 99 );
