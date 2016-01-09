		function initialize() {
		
		
		var mapCanvas8 = document.getElementById('map8');
        var mapOptions8 = {
          center: new google.maps.LatLng(39.153324, -86.540635),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker8 = new google.maps.Marker({
			position: new google.maps.LatLng(39.153324, -86.540635)
		});
        var map8 = new google.maps.Map(mapCanvas8, mapOptions8)	
			marker8.setMap(map8);
		
		
       		
      }
	  
      google.maps.event.addDomListener(window, 'load', initialize);
	 
	// JavaScript Document