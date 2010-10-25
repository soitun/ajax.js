<?php

if ( isset( $_GET["sleep"] ) ) {
	sleep( (int)$_GET["sleep"] );
}

if ( isset( $_GET["callback"] ) ) {
	echo $_GET["callback"] .'({"name": "jack"})';
} else {
	echo '{"name": "jack"}';
}
