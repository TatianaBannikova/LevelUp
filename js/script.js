//
// slider
$(function() {
  $('.review__swiper').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
    responsive: [
    {
        breakpoint: 1025,
        settings: {

          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {

          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  })
})
// timer
function countDown() {
  var seconds = 1800;
  var timer = setInterval(function() {
      if (seconds > 0) {
          seconds --;
          var h = seconds/3600 ^ 0,
              m = (seconds-h*3600)/60 ^ 0,
              s = seconds-h*3600-m*60,
              time = +(m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
          $(".timer").text(time);
      } else {
          clearInterval(timer);
      }
  }, 1000);
}
$(function() { countDown()});
// scroll js
let scrollBtn1 = document.querySelector('.header__btn'),
    scrollBtn2 = document.querySelector('.composition__btn'),
    scrollBtn3 = document.querySelector('.review__btn'),
    form = document.querySelector('.form');
function scrollTo(elem) {
  window.scroll({
      left: 0, 
      top: elem.offsetTop,
      behavior: "smooth"
    })
}
scrollBtn1.addEventListener('click', () => {
  scrollTo(form);
})
scrollBtn2.addEventListener('click', () => {
  scrollTo(form);
})
scrollBtn3.addEventListener('click', () => {
  scrollTo(form);
})
// validation form
let submitbtn = document.querySelector('.form__btn');
function ValidationForm() {
      if (document.getElementById('form__name').value === '' && 
          document.querySelector('.error-text-name').classList.contains('none') === true) {
        document.querySelector('.error-text-name').classList.remove('none');
      } else { document.querySelector('.error-text-name').classList.add('none'); }

      if (document.getElementById('form__tel').value === '' && 
          document.querySelector('.error-text-tel').classList.contains('none') === true) {
        document.querySelector('.error-text-tel').classList.remove('none');
      } else { document.querySelector('.error-text-tel').classList.add('none'); }

      if (document.getElementById('form__email').value === '' && 
          document.querySelector('.error-text-email').classList.contains('none') === true) {
        document.querySelector('.error-text-email').classList.remove('none');
      } else { document.querySelector('.error-text-email').classList.add('none'); }
} 
function ClearForm () {
  document.getElementById('form__name').value === '';
  document.getElementById('form__tel').value === '';
  document.getElementById('form__email').value === '';
}
submitbtn.addEventListener('click', (event) => {
  event.preventDefault();
  ValidationForm();
  if (  document.getElementById('form__name').value != '' &&
        document.getElementById('form__tel').value != '' &&
        document.getElementById('form__email').value != '') {
  ClearForm();
} else { return }
}) 
