		function initialize() {
		
		
		var mapCanvas7 = document.getElementById('map7');
        var mapOptions7 = {
          center: new google.maps.LatLng(39.151645, -86.577423),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker7 = new google.maps.Marker({
			position: new google.maps.LatLng(39.151645, -86.577423)
		});
        var map7 = new google.maps.Map(mapCanvas7, mapOptions7)	
			marker7.setMap(map7);
		
		
			
       		
      }
	  
      google.maps.event.addDomListener(window, 'load', initialize);
	 
	// JavaScript Document