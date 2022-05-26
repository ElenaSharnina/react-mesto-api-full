
export const objConfig = {
  formSelector: '.modal__form',
  inputSelector: '.modal__field',
  submitButtonSelector: '.modal__button',
  inactiveButtonClass: 'modal__button_disabled',
  inputErrorClass: 'modal__field_type_error',
  errorClass: 'modal__error_visible'
}
export const apiConfig = {
  url: 'https://api.mesto.students.nomoreparties.sbs',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`,
  }
}
