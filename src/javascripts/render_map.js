var map;

// <script type="text/javascript" src="javascripts/markers.js"></script>

var locations = [
    { name: "Talbot County Career Center",
      street: "301 Bay Street",
      city: "Easton",
      zip: "21601",
      lat: 38.778,
      long: -76.083
    },
    { name: "My house",
      street: "1825 Aliceanna Street",
      city: "Baltimore",
      zip: "21231",
      lat: 39.000,
      long: -75.000
    },

];

function initialize() {
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(39, -76)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  locations.forEach( function (location)
  {
      var myLatlng = new google.maps.LatLng(location.lat, location.long);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: location.name
      });
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
