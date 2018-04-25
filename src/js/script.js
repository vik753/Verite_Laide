//= ============Header Menu===============

console.log('Hello 333')
var scroll = new SmoothScroll('a[href*="#"]')

/* $(document).click(function (e){
  console.log(e.target);
}) */

var topMobMenuOpen = $('.svg-icon__mobIco-open')
var navTopMobMenu = $('.nav-topMenu')
var navTopMobMenuClose = $('.svg-icon__mobIco')

topMobMenuOpen.on('click', mobTopMenuOpen)
navTopMobMenuClose.on('click', mobTopMenuClose)

function mobTopMenuOpen () {
  topMobMenuOpen.css({
    display: 'none'
  })
  navTopMobMenu.css({
    display: 'block',
    animation: 'bounceInDown 1s'
  })
}

function mobTopMenuClose () {
  // console.log('click');
  navTopMobMenu.css({
    animation: 'bounceOutUp 1s'
  })
  setTimeout(() => {
    navTopMobMenu.css({
      display: 'none'
    })
    topMobMenuOpen.css({
      display: 'block'
    })
  }, 900)
}

//= =======Google-Maps==============
var map;
const cnt = {
  lat: 45.462941,
  lng: 9.207026
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: cnt,
    zoom: 15
  });
  const marker = new google.maps.Marker({
    position: cnt,
    map: map,
    title: '"Vérité Laide" photostudio',
    icon: 'img/VeriteLaideGmapIco.png'
  })
  const infoWindow = new google.maps.InfoWindow({
    content: '"Vérité Laide" photostudio, Piazza Cinque Giornate, 3, 20100 Milano MI, Italy'
  })
  marker.addListener('click', function() {
    infoWindow.open(map, marker)
  })
}

// ============Portfolio-galary=====================
let $portfolioGallery = $('.portfolio__gallery')

$('.portfolio__gallery').imagesLoaded(function () {
  $portfolioGallery.isotope({
    itemSelector: '.portfolio__img',
    horizontalOrder: true,
    layoutMode: 'masonry',
    filter: '.portfolio__img', // start filter
    masonry: {
      gutter: '.gutter-sizer'
    }
  })
})

$('.galleryBlock__btn').click(function () {
  const $this = $(this)
  const filter = '.' + $this.data('filter')
  $portfolioGallery.isotope({
    filter: filter
  })
})

//= ======================Media for js

/* function initTablet() {
  device = 'tablet';
  $('.header__menu_link').css({
    backgroundColor: "transparent",
    borderBottom: '1px solid transparent',
    border: "1px solid transparent",
    fontStyle: 'normal',
    left: '0',
    width: 'auto'
  });
}

function initMobile() {
  device = 'mobile';
  $('.header__menu_link').css({
    border: "none",
    backgroundColor: "rgba(0,0,0,0.9)"
  });
} */

/* ssm.addState({
  id: 'tablet',
  query: '(max-width: 768px)',
  onEnter: function() {
    initTablet();
  }
});

ssm.addState({
  id: 'tablet',
  query: '(min-width: 575px)',
  onEnter: function() {
    initTablet();
  }
});

ssm.addState({
  id: 'mobile',
  query: '(max-width: 576px)',
  onEnter: function() {
    initMobile();
  }
});

//===================SlickSlider===============

/* $(document).ready(function() {
  $('.team_slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
  //fade: true,
  });
}); */

//= ================BX-Slider====================
/*  //Initialize the slider
$(document).ready(function() {
  $('.testimonials_slider').bxSlider({
    auto: true,
    stopAutoOnClick: true,
    pause: 4000,
    controls: false,
  });
}); */



//= =======================Animation========

/* jQuery(document).ready(function() {
  jQuery('.container-header').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated lightSpeedIn', // Class to add to the elements when they are visible
    offset: 100
  });
}); */
