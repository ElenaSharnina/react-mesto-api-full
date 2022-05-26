import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`modal modal_type_${props.name} ${props.isOpen ? 'modal_active' : ''}`}>
      <div className={`modal__container modal__container_type_${props.name}`}>
        <button type="button" className="modal__close-icon modal__close-icon_place_regform" aria-label="Закрыть" onClick={props.onClose}></button>
        <h2 className="modal__title">{props.title}</h2>
        <form className={`modal__form modal__form_place_${props.name}`} name={props.name} onSubmit={props.onSubmit}>
          {props.children}
          <button type="submit"
            className="modal__button modal__button_place_profile modal__button_loader">{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}
export default PopupWithForm;