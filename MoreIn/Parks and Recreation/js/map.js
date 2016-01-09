		function initialize() {
		var mapCanvas1 = document.getElementById('map1');
        var mapOptions1 = {
          center: new google.maps.LatLng(39.1553044, -86.5243626),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
       var marker1 = new google.maps.Marker({
			position: new google.maps.LatLng(39.1553044, -86.5243626)
		});
        var map1 = new google.maps.Map(mapCanvas1, mapOptions1)	
			marker1.setMap(map1);
			
		var mapCanvas2 = document.getElementById('map2');
        var mapOptions2 = {
          center: new google.maps.LatLng(39.0272821, -86.5786958),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker2 = new google.maps.Marker({
			position: new google.maps.LatLng(39.0272821, -86.5786958)
		});
        var map2 = new google.maps.Map(mapCanvas2, mapOptions2)	
			marker2.setMap(map2);
		
		var mapCanvas3 = document.getElementById('map3');
        var mapOptions3 = {
          center: new google.maps.LatLng(39.1736465, -86.5130081),
          zoom:17,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
		
       var marker3 = new google.maps.Marker({
			position: new google.maps.LatLng(39.1736465, -86.5130081)
		});
        var map3 = new google.maps.Map(mapCanvas3, mapOptions3)
		marker3.setMap(map3);
		
		var mapCanvas4 = document.getElementById('map4');
        var mapOptions4 = {
          center: new google.maps.LatLng(39.0211256, -86.4933181),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker4 = new google.maps.Marker({
			position: new google.maps.LatLng(39.0211256, -86.4933181)
		});
        var map4 = new google.maps.Map(mapCanvas4, mapOptions4)
		marker4.setMap(map4);
		
		var mapCanvas5 = document.getElementById('map5');
        var mapOptions5 = {
          center: new google.maps.LatLng(39.2015471, -86.5211791),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker5 = new google.maps.Marker({
			position: new google.maps.LatLng(39.2015471, -86.5211791)
		});
		var map5 = new google.maps.Map(mapCanvas5, mapOptions5)
		marker5.setMap(map5);
		
		var mapCanvas6 = document.getElementById('map6');
        var mapOptions6 = {
          center: new google.maps.LatLng(38.4761744, -86.5400398),
          zoom:17,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker6 = new google.maps.Marker({
			position: new google.maps.LatLng(38.4761744, -86.5400398)
		});
		var map6 = new google.maps.Map(mapCanvas6, mapOptions6)
		marker6.setMap(map6);
			
        var mapCanvas7 = document.getElementById('map7');
        var mapOptions7 = {
          center: new google.maps.LatLng(39.1797203, -86.5177171),
          zoom:17,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker7 = new google.maps.Marker({
			position: new google.maps.LatLng(39.1797203, -86.5177171)
		});
        var map7 = new google.maps.Map(mapCanvas7, mapOptions7)
		marker7.setMap(map7);
		
		
		var mapCanvas10 = document.getElementById('map10');
        var mapOptions10 = {
          center: new google.maps.LatLng(39.1137145, -86.5883934),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker10 = new google.maps.Marker({
			position: new google.maps.LatLng(39.1137145, -86.5883934)
		});
		var map10 = new google.maps.Map(mapCanvas10, mapOptions10)
		marker10.setMap(map10);
		
		var mapCanvas8 = document.getElementById('map8');
        var mapOptions8 = {
          center: new google.maps.LatLng(39.1824798, -86.5191288),
          zoom:16,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker8 = new google.maps.Marker({
			position: new google.maps.LatLng(39.1824798, -86.5191288)
		});
        var map8 = new google.maps.Map(mapCanvas8, mapOptions8)
		marker8.setMap(map8);
		
		
		var mapCanvas9 = document.getElementById('map9');
        var mapOptions9 = {
          center: new google.maps.LatLng(39.1015148, -86.5363443),
          zoom:18,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var marker9 = new google.maps.Marker({
			position: new google.maps.LatLng(39.1015148, -86.5363443)
		});
		var map9 = new google.maps.Map(mapCanvas9, mapOptions9)
		marker9.setMap(map9);
		
		
		var mapCanvas11 = document.getElementById('map11');
        var mapOptions11 = {
          center: new google.maps.LatLng(39.1553044, -86.5243626),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map11 = new google.maps.Map(mapCanvas11, mapOptions11)
		
		var mapCanvas12 = document.getElementById('map12');
        var mapOptions12 = {
          center: new google.maps.LatLng(39.1553044, -86.5243626),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map12 = new google.maps.Map(mapCanvas12, mapOptions12)
		
		var mapCanvas13 = document.getElementById('map13');
        var mapOptions13 = {
          center: new google.maps.LatLng(39.1553044, -86.5243626),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map13 = new google.maps.Map(mapCanvas13, mapOptions13)
		
		var mapCanvas14 = document.getElementById('map14');
        var mapOptions14 = {
          center: new google.maps.LatLng(39.1553044, -86.5243626),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map14 = new google.maps.Map(mapCanvas14, mapOptions14)
		
		var mapCanvas15 = document.getElementById('map15');
        var mapOptions15 = {
          center: new google.maps.LatLng(39.1553044, -86.5243626),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map15 = new google.maps.Map(mapCanvas15, mapOptions15)


		
		
		
      }
	  
      google.maps.event.addDomListener(window, 'load', initialize)
	
	
	
	 
	 
	