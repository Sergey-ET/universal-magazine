$(document).ready(function () {
  var menuButton = $('.menu-button')
  menuButton.on('click', function () {
    $('.navbar-menu').toggleClass('navbar-menu--visible')
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
      },
    })
  })
})
