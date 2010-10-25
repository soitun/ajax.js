module( "ajax", {
	setup: function() {
		ajax.setup( {
		} );
	},
	teardown: function() {
	}
} );

asyncTest( "Normal get and post", function() {
	expect( 2 );
	stop();
	ajax( {
		type: "post",
		dataType: "json",
		data: { id: 5 },
		url: "data/post.html",
		success: function( data ) {
			ok( data, "post data" );
		},
		error: function() {
		}
	} );
	ajax( {
		type: "get",
		dataType: "json",
		data: { id: 5 },
		url: "data/post.html",
		success: function( data ) {
			start();
			ok( data.name, "get json data" );
		},
		error: function() {
		}
	} );
} );


asyncTest( "jsonp", function() {
	expect( 5 );
	stop();
	var load = false;
	ajax( {
		type: "get",
		dataType: "jsonp",
		forceRemote: true,
		async: true,
		data: { id: 5, sleep: 1 },
		url: "data/jsonp.php",
		success: function( data ) {
			ok( load, "success async get remote data" );
			start();
		},
		error: function() {
		}
	} );
	ajax( {
		type: "get",
		dataType: "jsonp",
		forceRemote: true,
		async: true,
		data: { id: 5 },
		url: "data/jsonp.php",
		success: function( data ) {
			load = true;
			ok( data.name, "success get remote data" );
		},
		error: function() {
		}
	} );
	ajax( {
		type: "get",
		dataType: "jsonp",
		forceRemote: true,
		data: { id: 5 },
		url: "data/jsonp2.php",
		success: function( data ) {
		},
		error: function() {
			ok( true, "remote network error" );
		}
	} );

	ajax( {
		type: "get",
		dataType: "jsonp",
		data: { id: 5 },
		url: "data/jsonp.php",
		success: function( data ) {
			ok( data.name, "success get local data" );
		},
		error: function() {
		}
	} );
	ajax( {
		type: "get",
		dataType: "jsonp",
		data: { id: 5 },
		url: "data/jsonp2.php",
		success: function( data ) {
		},
		error: function() {
			ok( true, "local network error" );
		}
	} );
} );


