(function($) {
  $(document).ready(() => {
    objectFitImages()
    initAccordions()
    initSliders()
    initTooltips()
    initContactForm()
    initTabs()
  })

  function initAccordions() {
    var windowWidth = $(window).width();
    if (windowWidth > 768) {
      $('.accordion__toggle').attr('aria-expanded', 'true')
      $('.accordion__content').addClass('show')
    }
  }

  function initSliders() {
    if ($('.slider').length) {
      function createSlider(elem, options) {

        if (elem.hasClass('slick-initialized')) {
          elem.slick('unslick');
        }
    
        let defaultOptions = {
          prevArrow: '<button type="button" class="slick-prev"><svg>' +
            '<use href="img/icons.svg#arrow-left"></use>' +
            '</svg></button>',
          nextArrow: '<button type="button" class="slick-next"><svg>' +
          '<use href="img/icons.svg#arrow-right"></use>' +
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


      const sliders = $('.slider')
    
      createSlider(sliders)
    }
  }

  function initTooltips() {
    const tooltipToggle = $('[data-toggle="tooltip"]')
    tooltipToggle.tooltip({
      boundary: 'window'
    })
  }

  /*
   * Contact Form Event Handlers Initialization
   */

  function initContactForm() {
    if ($('#contact-form').length) {
      document.addEventListener( 'wpcf7mailsent', function( event ) {
        $('#contact-form-success').addClass('visible')
      }, false );

      document.addEventListener( 'wpcf7mailfailed', function( event ) {
        $('#contact-form-error').addClass('visible')
      }, false );
    }

    if ($('#subscription-form').length) {
      document.addEventListener( 'wpcf7mailsent', function( event ) {
        $('#subscription-form-success').addClass('visible')
      }, false );

      document.addEventListener( 'wpcf7mailfailed', function( event ) {
        $('#subscription-form-error').addClass('visible')
      }, false );
    }
  }

  function initTabs() {
    const tabs = $('.tabs');

    if (tabs.length) {
      const nav = tabs.find('.nav-tabs');
      const navItems = tabs.find('.nav-item');

      navItems.appendTo(nav);

      const firstNavItem = navItems.first().find('.nav-link');
      firstNavItem.addClass('active');
      firstNavItem.attr('aria-selected', true);

      tabs.find(firstNavItem.attr('href')).addClass('show')
      tabs.find(firstNavItem.attr('href')).addClass('active')

      tabs.removeClass('loading');
    }
  }
})(jQuery)