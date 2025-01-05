



/*========== Start Swiper Tour slider ==========*/

$(document).ready(function () {
    var swiper = new Swiper(".first-tours-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        }, 
        on: {
          slideChange: function () {
            // Trigger the animation when a slide changes
            const activeSlide = document.querySelector('.swiper-slide-active .slide-description');
            activeSlide.classList.add('animate__animated', 'animate__fadeInUp');
          },
          slideChangeTransitionEnd: function () {
            // Remove the animation after it's done
            const previousSlide = document.querySelectorAll('.swiper-slide:not(.swiper-slide-active) .slide-description');
            previousSlide.forEach(slide => slide.classList.remove('animate__animated', 'animate__fadeInUp'));
          }
        },
      },
    });
  });
  /*========== end Swiper Tour slider ==========*/



  /*-----------  accordion ---------*/
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

/*-----------  accordion ---------*/



$(function () {

  
  $(document).ready(function () {
    // Initiate the swiper
      var swiper = new Swiper(".partnerSwiper", {
        slidesPerView: 6,
        spaceBetween: 20,
        autoplay: true,
        loop: true,
        breakpoints: {
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 50,
          }
        }
      })
  })
  
  
  })
  



  /*-----------  start scroll-up  ---------*/

    /*---------- 05. Scroll To Top ----------*/
    // progressAvtivation
    if($('.scroll-top')) {
        
      var scrollTopbtn = document.querySelector('.scroll-top');
      var progressPath = document.querySelector('.scroll-top path');
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
      progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
      var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
      }
      updateProgress();
      $(window).scroll(updateProgress);	
      var offset = 50;
      var duration = 750;
      jQuery(window).on('scroll', function() {
          if (jQuery(this).scrollTop() > offset) {
              jQuery(scrollTopbtn).addClass('show');
          } else {
              jQuery(scrollTopbtn).removeClass('show');
          }
      });				
      jQuery(scrollTopbtn).on('click', function(event) {
          event.preventDefault();
          jQuery('html, body').animate({scrollTop: 0}, duration);
          return false;
      })
  }

/*-----------  end scroll-up  ---------*/




/* ===============================  counterUp =============================== */


$('.counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  

});



/* ===============================  counterUp =============================== */


var swiper = new Swiper(".tour-details .mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});