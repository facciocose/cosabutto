var comune = "CT";

$(function() {
  var $title = $("#title");
  var $subtitle = $("#subtitle");
  var $icon = $("#icon");

  /* if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $.getJSON("https://nominatim.openstreetmap.org/reverse?zoom=8&format=json&json_callback=?", {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }, function(response) {

        comune = response.address.county;
        */
        var d = new Date();
        var dayOfTheWeek = d.getDay();
        var dayIndex = Object.keys(DB[comune].GIORNO)[dayOfTheWeek];
        var rifiutoDiOggi = DB[comune].GIORNO[dayIndex];
        var language = navigator.language || navigator.userLanguage;

        $title.text(rifiutoDiOggi.LABEL);
        $subtitle.text(DB[comune].LABEL);
        document.title = document.title + " a " + DB[comune].LABEL;

        $title.css({ color: rifiutoDiOggi.TEXT_COLOR});
        $subtitle.css({ color: rifiutoDiOggi.TEXT_COLOR});
        $("body").css({background: rifiutoDiOggi.COLOR});
        $icon.css({fill: rifiutoDiOggi.TEXT_COLOR});
     // });
   // });
  //}
});
