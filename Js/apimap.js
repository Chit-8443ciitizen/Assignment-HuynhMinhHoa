var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7749, lng: -122.4194},
    zoom: 8
  });
  
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 16.07593, lng: 108.16996},
      zoom: 15,
    });
    var marker = new google.maps.Marker({
      position: {lat: 16.07593, lng: 108.16996},
      map: map,
      title: 'WEBMINTON',
    });
  }
