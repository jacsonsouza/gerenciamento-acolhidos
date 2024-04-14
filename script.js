function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -25.3518725, lng: -51.4961365}, // Substitua SUA_LATITUDE e SUA_LONGITUDE pelas coordenadas desejadas
      zoom: 8 // Nível de zoom
    });
  }

  $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
