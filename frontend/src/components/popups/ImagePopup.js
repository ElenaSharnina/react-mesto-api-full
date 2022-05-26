import React from "react";
function ImagePopup(props) {
  return (
    <div className={`modal modal_type_card ${props.isOpen ? 'modal_active' : ''}`} >
      <figure className="modal-card__container">
        <button type="button" className="modal__close-icon modal__close-icon_place_modal-card"
          aria-label="Закрыть" onClick={props.onClose}></button>
        <img className="modal-card__image" src={props.card.link} alt={props.card.name} />
        <figcaption className="modal-card__label">{props.card.name}</figcaption>
      </figure>
    </div>
  )
}
export default ImagePopup;