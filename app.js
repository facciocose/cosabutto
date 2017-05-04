var comune = "CT";

var DB = {
  CT: {
    LABEL: "Catania",
    RIFIUTO: {
      INDIFFERENZIATO: {
        COLOR: "#455660",
        TEXT_COLOR: "#fff",
        LABEL: "Indifferenziato"
      },
      ORGANICO: {
        COLOR: "#7E543B",
        TEXT_COLOR: "#fff",
        LABEL: "Organico"
      },
      CARTA: {
        COLOR: "#016AAB",
        TEXT_COLOR: "#fff",
        LABEL: "Carta"
      },
      PLASTICA: {
        COLOR: "#E9C74B",
        TEXT_COLOR: "#000",
        LABEL: "Plastica"
      },
      VETRO: {
        COLOR: "#4E6F16",
        TEXT_COLOR: "#fff",
        LABEL: "Vetro"
      }
    }
  }
};

DB.CT.GIORNO = {
  DOMENICA: DB.CT.RIFIUTO.VETRO,
  LUNEDI: DB.CT.RIFIUTO.INDIFFERENZIATO,
  MARTEDI: DB.CT.RIFIUTO.ORGANICO,
  MERCOLEDI: DB.CT.RIFIUTO.CARTA,
  GIOVEDI: DB.CT.RIFIUTO.ORGANICO,
  VENERDI: DB.CT.RIFIUTO.PLASTICA,
  SABATO: DB.CT.RIFIUTO.ORGANICO
};


$(function() {
  var $title = $("#title");
  var $subtitle = $("#subtitle");
  var $icon = $("#icon");

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $.getJSON("http://nominatim.openstreetmap.org/reverse?zoom=8&format=json&json_callback=?", {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }, function(response) {
        comune = response.address.county;
        var d = new Date();
        var dayOfTheWeek = d.getDay();
        var dayIndex = Object.keys(DB[comune].GIORNO)[dayOfTheWeek];
        var rifiutoDiOggi = DB[comune].GIORNO[dayIndex];
        var language = navigator.language || navigator.userLanguage;

        $title.text(rifiutoDiOggi.LABEL);
        $subtitle.text(DB[comune].LABEL);

        $title.css({ color: rifiutoDiOggi.TEXT_COLOR});
        $subtitle.css({ color: rifiutoDiOggi.TEXT_COLOR});
        $("body").css({background: rifiutoDiOggi.COLOR});
        $icon.css({fill: rifiutoDiOggi.TEXT_COLOR});
      });
    });
  }
});
