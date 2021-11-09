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

  // Валидация форм
  $('.form').each(function () {
    $(this).validate({
      errorClass: 'invalid',
      messages: {
        name: {
          required: 'Please specify your name',
          minlength: 'At least 2 characters required',
        },
        phone: {
          required: 'Please enter your phone number',
          minlength: 'Please enter at least 10 characters',
        },
        email: {
          required: 'We need your email address to contact you',
          email: 'Your email address must be in the format of name@domain.com',
        },
      },
    })
  })
})
