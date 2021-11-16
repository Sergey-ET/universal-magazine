$(document).ready(function () {
  var menuButton = $('.menu-button')
  menuButton.on('click', function () {
    $('.navbar-menu').toggleClass('navbar-menu--visible')
  })
  var menuButtonLight = $('.menu-button--light')
  menuButtonLight.on('click', function () {
    $('.navbar-menu--light').toggleClass('navbar-menu--visible--light')
  })

  var modalButton = $('[data-toggle=modal]')
  var closeModalButton = $('.modal__close')
  modalButton.on('click', openModal)
  closeModalButton.on('click', closeModal)

  function openModal() {
    var modalOverlay = $('.modal__overlay')
    var modalDialog = $('.modal__dialog')
    modalOverlay.addClass('modal__overlay--visible')
    modalDialog.addClass('modal__dialog--visible')
  }
  function closeModal(event) {
    event.preventDefault()
    var modalOverlay = $('.modal__overlay')
    var modalDialog = $('.modal__dialog')
    modalOverlay.removeClass('modal__overlay--visible')
    modalDialog.removeClass('modal__dialog--visible')
  }

  $(document).keydown(function (event) {
    if (event.keyCode === 27) {
      $('.modal__overlay').removeClass('modal__overlay--visible')
      $('.modal__dialog').removeClass('modal__dialog--visible')
    }
  })

  $(document).click(function (e) {
    if ($(e.target).is('.modal__overlay')) {
      $('.modal__overlay').removeClass('modal__overlay--visible')
      $('.modal__dialog').removeClass('modal__dialog--visible')
    }
  })

  // Валидация форм
  $('.form').each(function () {
    $(this).validate({
      errorClass: 'invalid',
      messages: {
        name: {
          required: 'Пожалуйста, укажите Ваше имя',
          minlength: 'Введите как минимум 2 буквы',
        },
        phone: {
          required: 'Пожалуйста, введите Ваш номер телефона',
          minlength: 'Введите как минимум 10 цифр',
        },
        email: {
          required: 'Пожалуйста, введите адрес Вашей эл. почты',
          email: 'Адрес эл. почты должен быть в формате name@domain.com',
        },
        checkbox: {
          required: 'Это обязательное поле!',
        },
        comment: {
          required: 'Пожалуйста, напишите Ваш комментарий',
          minlength: 'Сообщение должно содержать минимум 100 символов',
        },
      },
    })
  })

  var tabsItem = $('.reco-tabs__item')
  var contentItem = $('.reco-content__item')

  tabsItem.on('click', function (event) {
    var activeContent = $(this).attr('data-target')
    tabsItem.removeClass('reco-tabs__item--active')
    contentItem.removeClass('reco-content__item--active')
    $(activeContent).addClass('reco-content__item--active')
    $(this).addClass('reco-tabs__item--active')
  })

  $('.news-card__info-bookmark-1').on('click', function () {
    if ($('.news-card__info-bookmark-1').css('fill') == 'rgb(188, 191, 194)') {
      $('.news-card__info-bookmark-1').css({ fill: 'rgb(255, 79, 82)' })
    } else {
      $('.news-card__info-bookmark-1').css({ fill: 'rgb(188, 191, 194)' })
    }
  })
  $('.news-card__info-bookmark-2').on('click', function () {
    if ($('.news-card__info-bookmark-2').css('fill') == 'rgb(188, 191, 194)') {
      $('.news-card__info-bookmark-2').css({ fill: 'rgb(255, 79, 82)' })
    } else {
      $('.news-card__info-bookmark-2').css({ fill: 'rgb(188, 191, 194)' })
    }
  })
  $('.news-card__info-bookmark-3').on('click', function () {
    if ($('.news-card__info-bookmark-3').css('fill') == 'rgb(188, 191, 194)') {
      $('.news-card__info-bookmark-3').css({ fill: 'rgb(255, 79, 82)' })
    } else {
      $('.news-card__info-bookmark-3').css({ fill: 'rgb(188, 191, 194)' })
    }
  })
  $('.news-card__info-bookmark-4').on('click', function () {
    if ($('.news-card__info-bookmark-4').css('fill') == 'rgb(188, 191, 194)') {
      $('.news-card__info-bookmark-4').css({ fill: 'rgb(255, 79, 82)' })
    } else {
      $('.news-card__info-bookmark-4').css({ fill: 'rgb(188, 191, 194)' })
    }
  })
  $('.news-card__info-bookmark-5').on('click', function () {
    if ($('.news-card__info-bookmark-5').css('fill') == 'rgb(188, 191, 194)') {
      $('.news-card__info-bookmark-5').css({ fill: 'rgb(255, 79, 82)' })
    } else {
      $('.news-card__info-bookmark-5').css({ fill: 'rgb(188, 191, 194)' })
    }
  })
  $('.news-card__info-bookmark-6').on('click', function () {
    if ($('.news-card__info-bookmark-6').css('fill') == 'rgb(188, 191, 194)') {
      $('.news-card__info-bookmark-6').css({ fill: 'rgb(255, 79, 82)' })
    } else {
      $('.news-card__info-bookmark-6').css({ fill: 'rgb(188, 191, 194)' })
    }
  })
  $('.hero-bookmark').on('click', function () {
    if ($('.hero-bookmark').css('fill') == 'rgb(188, 191, 194)') {
      $('.hero-bookmark').css({ fill: 'rgb(255, 79, 82)' })
    } else {
      $('.hero-bookmark').css({ fill: 'rgb(188, 191, 194)' })
    }
  })

  const hotSlider = new Swiper('.hot-slider', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  })

  const articleSlider = new Swiper('.slider-article1', {
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.slider-article1__button--next',
      prevEl: '.slider-article1__button--prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  })

  var commentsButton = $('.comments-button')
  commentsButton.on('click', function () {
    $('.comments-card--hidden')
      .toggle('slow')
      .toggleClass('comments-card--hidden--visible')
  })
})
