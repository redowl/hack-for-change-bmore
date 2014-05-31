var map;
var url = "http://data.maryland.gov/resource/qswz-v9jx.json";

function initialize() {
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(39, -76.5)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  $.getJSON(url, function(data) {
    $.each(data, function(i, row) {
      var myLatlng = new google.maps.LatLng(row.location_1.latitude, row.location_1.longitude);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: row.description
      });
    });
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
