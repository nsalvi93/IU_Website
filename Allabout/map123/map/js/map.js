function initial()
{
	var mapCanvas22 = document.getElementById("map22");
        var mapOptions22 = {
          center: new google.maps.LatLng(39.170190, -86.514716),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
		var marker22 = new google.maps.Marker({
			position: new google.maps.LatLng(39.170190, -86.514716)
		});
        var map22 = new google.maps.Map(mapCanvas22, mapOptions22);
		    marker22.setMap(map22);







	
	
	
	
	}








function initialize()
{
	
	
	//window.alert("please");
	
/*var myCenter=new google.maps.LatLng(39.168780399999996,-86.49823);
	var mapProp = {
  center:myCenter,
  zoom:15,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };



var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);*/

var mapCanvas = document.getElementById("map1");
        var mapOptions = {
          center: new google.maps.LatLng(39.1649427, -86.51741040000002),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(39.1649427, -86.51741040000002)
		});
        var map = new google.maps.Map(mapCanvas, mapOptions);
		    marker.setMap(map);






var mapCanvas1 = document.getElementById("map2");
        var mapOptions1 = {
          center: new google.maps.LatLng(39.1649427, -86.51741040000002),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
		var marker1 = new google.maps.Marker({
			position: new google.maps.LatLng(39.1649427, -86.51741040000002)
		});
        var map1 = new google.maps.Map(mapCanvas1, mapOptions1);
		    marker1.setMap(map1);


var mapCanvas2 = document.getElementById("map3");
        var mapOptions2 = {
          center: new google.maps.LatLng(39.1649427, -86.51741040000002),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
		var marker2 = new google.maps.Marker({
			position: new google.maps.LatLng(39.1649427, -86.51741040000002)
		});
        var map2 = new google.maps.Map(mapCanvas2, mapOptions2);
		    marker2.setMap(map2);
			
			
			
			var mapCanvas3 = document.getElementById("map4");
        var mapOptions3 = {
          center: new google.maps.LatLng(39.1649427, -86.51741040000002),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
		var marker3 = new google.maps.Marker({
			position: new google.maps.LatLng(39.1649427, -86.51741040000002)
		});
        var map3 = new google.maps.Map(mapCanvas3, mapOptions3);
		    marker3.setMap(map3);
			
			
			
			
			
			var mapCanvas4 = document.getElementById("map5");
        var mapOptions4 = {
          center: new google.maps.LatLng(39.1649427, -86.51741040000002),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
		var marker4 = new google.maps.Marker({
			position: new google.maps.LatLng(39.1649427, -86.51741040000002)
		});
        var map4 = new google.maps.Map(mapCanvas4, mapOptions4);
		    marker4.setMap(map4);




			var mapCanvas5 = document.getElementById("map6");
        var mapOptions5 = {
          center: new google.maps.LatLng(39.1649427, -86.51741040000002),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
		var marker5 = new google.maps.Marker({
			position: new google.maps.LatLng(39.1649427, -86.51741040000002)
		});
        var map5 = new google.maps.Map(mapCanvas5, mapOptions5);
		    marker5.setMap(map5);



		var mapCanvas6 = document.getElementById("map7");
        var mapOptions6 = {
          center: new google.maps.LatLng(39.1649427, -86.51741040000002),
          zoom:15,
		  zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
		var marker6 = new google.maps.Marker({
			position: new google.maps.LatLng(39.1649427, -86.51741040000002)
		});
        var map6 = new google.maps.Map(mapCanvas6, mapOptions6);
		    marker6.setMap(map6);










}
google.maps.event.addDomListener(window, 'load', initial);
google.maps.event.addDomListener(window, 'load', function(){
	
	
	var mapDiv = document.getElementById('clickit');
	google.maps.event.addDomListener(mapDiv, 'click', initialize);
	
	
	
});




