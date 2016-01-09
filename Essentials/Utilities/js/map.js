		function initialize() {
		var mapCanvas1 = document.getElementById('map1');
        var mapOptions1 = {
          center: new google.maps.LatLng(39.167875, -86.522625),
          zoom:16,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map1 = new google.maps.Map(mapCanvas1, mapOptions1)	
			
		var mapCanvas2 = document.getElementById('map2');
        var mapOptions2 = {
          center: new google.maps.LatLng(39.184667, -86.538143),
          zoom:17,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map2 = new google.maps.Map(mapCanvas2, mapOptions2)
		
		var mapCanvas3 = document.getElementById('map3');
        var mapOptions3 = {
          center: new google.maps.LatLng(39.173391, -86.494236),
          zoom:17,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map3 = new google.maps.Map(mapCanvas3, mapOptions3)
		
		var mapCanvas4 = document.getElementById('map4');
        var mapOptions4 = {
          center: new google.maps.LatLng(39.168503, -86.498723),
          zoom:17,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map4 = new google.maps.Map(mapCanvas4, mapOptions4)
		
		var mapCanvas5 = document.getElementById('map5');
        var mapOptions5 = {
          center: new google.maps.LatLng(39.158988, -86.498462),
          zoom:17,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map5 = new google.maps.Map(mapCanvas5, mapOptions5)
		
		var mapCanvas6 = document.getElementById('map6');
        var mapOptions6 = {
          center: new google.maps.LatLng(39.170252, -86.491879),
          zoom:18,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map6 = new google.maps.Map(mapCanvas6, mapOptions6)
			
        var mapCanvas7 = document.getElementById('map7');
        var mapOptions7 = {
          center: new google.maps.LatLng(39.161712, -86.477423),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map7 = new google.maps.Map(mapCanvas7, mapOptions7)
		
		var mapCanvas10 = document.getElementById('map10');
        var mapOptions10 = {
          center: new google.maps.LatLng(39.182779, -86.533613),
          zoom:17,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map10 = new google.maps.Map(mapCanvas10, mapOptions10)
		
		var mapCanvas8 = document.getElementById('map8');
        var mapOptions8 = {
          center: new google.maps.LatLng(39.185732, -86.535780),
          zoom:17,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map8 = new google.maps.Map(mapCanvas8, mapOptions8)
		
		
		var mapCanvas9 = document.getElementById('map9');
        var mapOptions9 = {
          center: new google.maps.LatLng(39.170581, -86.535132),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map9 = new google.maps.Map(mapCanvas9, mapOptions9)

		
		
		
      }
	  
      google.maps.event.addDomListener(window, 'load', initialize);
	 
	