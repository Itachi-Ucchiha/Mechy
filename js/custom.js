
// FUNCTION GO SMOOTH TO TOP OF PAGE
$('#arrow-up').on('click', function() {
  const top = $('#header').position().top;

  $('html, body').animate(
    {
      scrollTop: top
    },
    900
  );
});

// FUNCTION GO SMOOTH TO SERVICES
$('#to-services').on('click', function() {
  const services = $('#usluge').position().top;

  $('html, body').animate(
    {
      scrollTop: services
    },
    900
  );
});

// STICKY NAVBAR
window.onscroll = function() {myFunction()};

    var header = document.getElementById("myNav");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

// MOBILE MENU

$( '#dl-menu' ).dlmenu({
  animationClasses : { classin : 'animation-class-name', classout : 'animation-class-name' }
});
  

// CHANGE THE DIV CONTENT

$('.caption').hide()

$("#service-1").hover(
  function () {
    $('#caption-1').stop().fadeTo("slow", 1);
  },
  function () {
    $('#caption-1').stop().fadeOut("slow");
  }
);

$("#service-2").hover(
  function () {
    $('#caption-2').stop().fadeTo("slow", 1);
  },
  function () {
    $('#caption-2').stop().fadeOut("slow");
  }
);

$("#service-3").hover(
  function () {
    $('#caption-3').stop().fadeTo("slow", 1);
  },
  function () {
    $('#caption-3').stop().fadeOut("slow");
  }
);

$("#service-4").hover(
  function () {
    $('#caption-4').stop().fadeTo("slow", 1);
  },
  function () {
    $('#caption-4').stop().fadeOut("slow");
  }
);

$("#service-5").hover(
  function () {
    $('#caption-5').stop().fadeTo("slow", 1);
  },
  function () {
    $('#caption-5').stop().fadeOut("slow");
  }
);

$("#service-6").hover(
  function () {
    $('#caption-6').stop().fadeTo("slow", 1);
  },
  function () {
    $('#caption-6').stop().fadeOut("slow");
  }
);

$("#service-7").hover(
  function () {
    $('#caption-7').stop().fadeTo("slow", 1);
  },
  function () {
    $('#caption-7').stop().fadeOut("slow");
  }
);

$("#service-8").hover(
  function () {
    $('#caption-8').stop().fadeTo("slow", 1);
  },
  function () {
    $('#caption-8').stop().fadeOut("slow");
  }
);