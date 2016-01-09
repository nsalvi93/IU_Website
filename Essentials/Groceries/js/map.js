		function initialize() {
		var mapCanvas1 = document.getElementById('map1');
        var mapOptions1 = {
          center: new google.maps.LatLng(39.153956, -86.495457),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
		var marker1 = new google.maps.Marker({
			position: new google.maps.LatLng(39.153956, -86.495457)
		});
        var map1 = new google.maps.Map(mapCanvas1, mapOptions1)	
			marker1.setMap(map1);
			
			
		var mapCanvas2 = document.getElementById('map2');
        var mapOptions2 = {
          center: new google.maps.LatLng(39.167797, -86.537092),
          zoom:17,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker2 = new google.maps.Marker({
			position: new google.maps.LatLng(39.167797, -86.537092)
		});
        var map2 = new google.maps.Map(mapCanvas2, mapOptions2)	
			marker2.setMap(map2);
			
			
		var mapCanvas3 = document.getElementById('map3');
        var mapOptions3 = {
          center: new google.maps.LatLng(39.187483, -86.540069),
          zoom:17,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
		var marker3 = new google.maps.Marker({
			position: new google.maps.LatLng(39.187483, -86.540069)
		});
        var map3 = new google.maps.Map(mapCanvas3, mapOptions3)
		marker3.setMap(map3);
		
		
		var mapCanvas4 = document.getElementById('map4');
        var mapOptions4 = {
          center: new google.maps.LatLng(39.161112, -86.533161),
          zoom:17,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
		var marker4 = new google.maps.Marker({
			position: new google.maps.LatLng(39.161112, -86.533161)
		});
        var map4 = new google.maps.Map(mapCanvas4, mapOptions4)
		marker4.setMap(map4);
		
		
		var mapCanvas5 = document.getElementById('map5');
        var mapOptions5 = {
          center: new google.maps.LatLng(39.171769, -86.510536),
          zoom:17,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker5 = new google.maps.Marker({
			position: new google.maps.LatLng(39.171769, -86.510536)
		});
		var map5 = new google.maps.Map(mapCanvas5, mapOptions5)
		marker5.setMap(map5);
		
		
		var mapCanvas6 = document.getElementById('map6');
        var mapOptions6 = {
          center: new google.maps.LatLng(39.152118, -86.495560),
          zoom:17,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker6 = new google.maps.Marker({
			position: new google.maps.LatLng(39.152118, -86.495560)
		});
		var map6 = new google.maps.Map(mapCanvas6, mapOptions6)
		marker6.setMap(map6);
		
			
        var mapCanvas7 = document.getElementById('map7');
        var mapOptions7 = {
          center: new google.maps.LatLng(39.137887, -86.531677),
          zoom:18,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
		var marker7 = new google.maps.Marker({
			position: new google.maps.LatLng(39.137887, -86.531677)
		});
        var map7 = new google.maps.Map(mapCanvas7, mapOptions7)
		marker7.setMap(map7);
		
		
		var mapCanvas10 = document.getElementById('map10');
        var mapOptions10 = {
          center: new google.maps.LatLng(39.161594, -86.494308),
          zoom:17,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker10 = new google.maps.Marker({
			position: new google.maps.LatLng(39.161594, -86.494308)
		});
		var map10 = new google.maps.Map(mapCanvas10, mapOptions10)
		marker10.setMap(map10);
		
		
		var mapCanvas8 = document.getElementById('map8');
        var mapOptions8 = {
          center: new google.maps.LatLng(39.147129, -86.576221),
          zoom:16,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
		var marker8 = new google.maps.Marker({
			position: new google.maps.LatLng(39.147129, -86.576221)
		});
        var map8 = new google.maps.Map(mapCanvas8, mapOptions8)
		marker8.setMap(map8);
		
		var mapCanvas9 = document.getElementById('map9');
        var mapOptions9 = {
          center: new google.maps.LatLng(39.141291, -86.579995),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker9 = new google.maps.Marker({
			position: new google.maps.LatLng(39.141291, -86.579995)
		});
		var map9 = new google.maps.Map(mapCanvas9, mapOptions9)
		marker9.setMap(map9);
		
		
		
      }
	  
	  google.maps.event.addDomListener(window, 'load', initialize);
      google.maps.event.addDomListener(window, 'load', function(){
	
	
	var mapDiv = document.getElementById('watever');
	 google.maps.event.addDomListener(mapDiv, 'click', initialize);
	
	});
	 
	