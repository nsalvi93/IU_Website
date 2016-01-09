		function initialize() {
		var mapCanvas1 = document.getElementById('map1');
        var mapOptions1 = {
          center: new google.maps.LatLng(39.1206658,-86.5719064),
          zoom:14,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker1 = new google.maps.Marker({
			position: new google.maps.LatLng(39.1206658,-86.5719064)
		});
        var map1 = new google.maps.Map(mapCanvas1, mapOptions1)	
			marker1.setMap(map1);
			
		var mapCanvas2 = document.getElementById('map2');
        var mapOptions2 = {
          center: new google.maps.LatLng(39.160026, -86.540587),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker2 = new google.maps.Marker({
			position: new google.maps.LatLng(39.160026, -86.540587)
		});
        var map2 = new google.maps.Map(mapCanvas2, mapOptions2)	
			marker2.setMap(map2);
		
		var mapCanvas3 = document.getElementById('map3');
        var mapOptions3 = {
          center: new google.maps.LatLng(39.205903, -86.550822),
          zoom:16,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
       var marker3 = new google.maps.Marker({
			position: new google.maps.LatLng(39.205903, -86.550822)
		});
        var map3 = new google.maps.Map(mapCanvas3, mapOptions3)	
			marker3.setMap(map3);
		
		var mapCanvas4 = document.getElementById('map4');
        var mapOptions4 = {
          center: new google.maps.LatLng(39.161707, -86.545246),
          zoom:16,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
       var marker4 = new google.maps.Marker({
			position: new google.maps.LatLng(39.161707, -86.545246)
		});
        var map4 = new google.maps.Map(mapCanvas4, mapOptions4)	
			marker4.setMap(map4);
		
		var mapCanvas5 = document.getElementById('map5');
        var mapOptions5 = {
          center: new google.maps.LatLng(39.172109, -86.515122),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
       var marker5 = new google.maps.Marker({
			position: new google.maps.LatLng(39.172109, -86.515122)
		});
        var map5 = new google.maps.Map(mapCanvas5, mapOptions5)	
			marker5.setMap(map5);
		
		var mapCanvas6 = document.getElementById('map6');
        var mapOptions6 = {
          center: new google.maps.LatLng(39.206657, -86.578249),
          zoom:17,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker6 = new google.maps.Marker({
			position: new google.maps.LatLng(39.206657, -86.578249)
		});
        var map6 = new google.maps.Map(mapCanvas6, mapOptions6)	
			marker6.setMap(map6);
		
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