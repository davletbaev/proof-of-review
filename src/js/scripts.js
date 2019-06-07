let prevScroll;

$(document).ready(() => {
  objectFitImages()
  initAccordions()
  initSliders()
  initTooltips()
})

function initAccordions() {
  var windowWidth = $(window).width();
  if (windowWidth > 768) {
    $('.accordion__toggle').attr('aria-expanded', 'true')
    $('.accordion__content').addClass('show')
  }
}


function initMobileNav() {
  $('[data-toggle]').on('click', function(e) {
    if ($.modal.isActive()) {
      $(this).toggleClass('toggle--active')
      $('body').toggleClass('open-modal')
      window.scrollTo(0, prevScroll)
      $.modal.close()
      return
    }
    
    prevScroll = window.pageYOffset
    $('body').toggleClass('open-modal')
    $(this).toggleClass('toggle--active')
    const target = $(this).data('toggle')
    $(target).modal()
  })
}

function initSliders() {
  if ($('.slider').length) {
    function createSlider(elem, options) {
      if (elem.hasClass('slick-initialized')) {
        elem.slick('unslick');
      }
  
      let defaultOptions = {
        prevArrow: '<button type="button" class="slick-prev"><svg>' +
          '<use xlink:href="img/icons.svg#arrow-left"></use>' +
          '</svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg>' +
        '<use xlink:href="img/icons.svg#arrow-right"></use>' +
        '</svg></button>',
        slidesToShow: 1,
        initialSlide: 1,
        slidesToScroll: 1,
        variableWidth: false,
        centerMode: false,
        dots: false,
        arrows: true,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              initialSlide: 1,
              arrows: false,
              dots: true,
              centerMode: true,
              variableWidth: true
            }
          }
        ]
      }
  
      elem.slick(defaultOptions)
    }


    const teamSlider = $('#team-slider')
  
    createSlider(teamSlider)
  }
}

function initTooltips() {
  const tooltipToggle = $('[data-toggle="tooltip"]')
  tooltipToggle.tooltip()
}