    
var map;
function initMap() {
  var myLatLng = {lat: -16.457389199999998, lng: -71.5315308};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng,
         mapTypeControl: true,
         mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.TOP_CENTER
    },
         zoomControl: true,
         zoomControlOptions: {
              position: google.maps.ControlPosition.LEFT_CENTER
    },
         scaleControl: true,
         streetViewControl: true,
         streetViewControlOptions: {
              position: google.maps.ControlPosition.LEFT_TOP
    }
  });  

  var marker = new google.maps.Marker({
         position: myLatLng,
         map: map,
         title: 'Hello World!'
  });
    
  var image = '/img/nia.png';
  var beachMarker = new google.maps.Marker({
         position: {lat: -16.457389199999998, lng: -68.5315308},
         map: map,
         icon: image
  });
}


