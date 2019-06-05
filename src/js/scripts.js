let prevScroll;

$(document).ready(() => {
  objectFitImages()
  initSelects()
  initSliders()
})


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
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: false,
        ...options
      }
  
      elem.slick(defaultOptions)
    }
  
    window.addEventListener('changeDeviceType', (e) => {
      const partnersSlider = $('[data-slick="partners"]')
      const reviewsSlider = $('[data-slick="reviews"]')
  
      if (e.detail.device === 'desktop') {
        createSlider(partnersSlider, { slidesToShow: 5, slidesToScroll: 5, variableWidth: true, centerMode: false })
        createSlider(reviewsSlider, { slidesToShow: 2, slidesToScroll: 2, variableWidth: false })
      } else if (e.detail.device === 'tablet') {
        createSlider(partnersSlider, { slidesToShow: 3, slidesToScroll: 3, variableWidth: true, centerMode: true })
        createSlider(reviewsSlider, { slidesToShow: 1, slidesToScroll: 1, variableWidth: false })
      } else {
        createSlider(partnersSlider, { slidesToShow: 1, slidesToScroll: 1, variableWidth: true, centerMode: true })
        createSlider(reviewsSlider, { slidesToShow: 1, slidesToScroll: 1, variableWidth: false })
      }
    })
  }
}