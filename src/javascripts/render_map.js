var map;

var locations = [
    { "name": "slkjafl fskj df",
      "lat": 67,
      "lon": 34
    },
    { "name": "slkjafl fskj df",
      "lat": 67,
      "lon": 34
    }
]

function initialize() {
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(39, -76)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
