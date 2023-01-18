<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
// define('DB_NAME', 'cheroqtj_cake.new');
define('DB_NAME', 'cake.new');

/** Database username */
// define('DB_USER', 'cheroqtj_chernetska');
define('DB_USER', 'root');

/** Database password */
// define('DB_PASSWORD', 'cake.new');
define('DB_PASSWORD', '');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'vj3;T7~K,8D7=O=|Fj[sr,0`8R}${o_4?I]5ZpdKokc.F J<u#eF3tc@Na??)lTG');
define('SECURE_AUTH_KEY',  '7Mc?^u5W+hk+cwx@(L%v7[A3Y|tU|A@#+kpo_/v]acOC1mCKvrK*$*}`i*=b^z@L');
define('LOGGED_IN_KEY',    '=7qh$tDRE GKW,N~FaP|Ow@5%u#9uqCE/&JGxr)H70P}w;)KB|1x.4U9^^crtT)}');
define('NONCE_KEY',        'jMSj9#DFp=xd^awG1p!PZsWfjOjJYzH.})Gzma:Q SYLA-/563Pi>k?cEOl~}eeo');
define('AUTH_SALT',        'xrPrBT($dE^Ss>$f}8o:u&[%1;Ob:sS^{9;&=3.hZahmfewAzbyuHY[:QA|9A;.R');
define('SECURE_AUTH_SALT', 'LWwY)*Oh%>w1CI+3wWCaIJPo.EhZ^ej)xCM~b]v,lbv>m}5l.e3,OCQZG;S>vFGG');
define('LOGGED_IN_SALT',   '_xOWI30O|m~:#2P8ssQsR)-(-f[cT{T(l>kOMqhr$2{-u@d*j5HJRT-(v9Co2Utt');
define('NONCE_SALT',       'rg-<c&15VPO,iL6sv{5(+MqX>lN_^c=|2i}:-$vi:XT*Lf).5tKG5dRJ)VvIJi{1');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
