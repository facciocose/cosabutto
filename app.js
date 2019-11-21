var comune = "CT";

$(function() {
  var $title = $("#title");
  var $subtitle = $("#subtitle");
  var $description = $("#description");
  var $icon = $("#icon");
  var $footer = $("#footer");

  var d = new Date();
  var dayOfTheWeek = d.getDay();
  var dayIndex = Object.keys(DB[comune].GIORNO)[dayOfTheWeek];
  var rifiutoDiOggi = DB[comune].GIORNO[dayIndex];
  var language = navigator.language || navigator.userLanguage;

  $title.text(rifiutoDiOggi.LABEL);
  $subtitle.text(DB[comune].LABEL);
  $description.text(DB[comune].DESCRIPTION);
  document.title = document.title + " a " + DB[comune].LABEL;

  $title.css({ color: rifiutoDiOggi.TEXT_COLOR});
  $subtitle.css({ color: rifiutoDiOggi.TEXT_COLOR});
  $description.css({ color: rifiutoDiOggi.TEXT_COLOR});
  $("body").css({background: rifiutoDiOggi.COLOR});
  $icon.css({fill: rifiutoDiOggi.TEXT_COLOR});
  $(".flickity-button-icon").css({fill: rifiutoDiOggi.TEXT_COLOR});

  var i;

  $.each(DB[comune].GIORNO, function(k, v) {
    var element = $('<div class="carousel-cell"><h3>' + k + '</h3><p>' + v.LABEL + '</p></div>');
    element.css({background: v.COLOR, color: v.TEXT_COLOR});
    $footer.append(element);
  });

  $footer.flickity({
    pageDots: false
  });
});

