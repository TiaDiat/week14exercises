//create a function to add the map, with one variable for map properties 

function myMap () {
//update the location to your favorite place on Earth
	var mapProp = {
		center: new google.maps.LatLng(54.969655, 82.6692294),
		zoom: 5,
	//disable the default controls on the map
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

//add the map to the screen using the google.maps.Map method
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

//create a marker and set the position to mapProp.center 
	var marker = new google.maps.Marker({
		position: mapProp.center
	});	

//add the marker to the map using the Google setMap method
	marker.setMap(map);

//using the google.maps.event.addListener method, add an event so when you click on the marker it zooms in on the map marker
	google.maps.event.addListener(marker, 'click', function(){
		map.setZoom(9);
		map.setCenter(marker.getPosition());
	});

};

// Using the google.maps.event.addDomListener method, select the window and when it loads, run the function to add the map
google.maps.event.addDomListener(window, 'load', myMap);
