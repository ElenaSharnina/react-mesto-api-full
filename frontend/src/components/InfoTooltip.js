import React from "react";
import successPic from '../images/Union.png';
import errorPic from '../images/Union2.png';

function InfoTooltip({ isOpen, onClose, isSuccess }) {
  return (
    <div className={`modal modal_type_infoTooltip ${isOpen ? 'modal_active' : ''}`}>
      <div className="modal__container modal__container_type_infoTooltip">
        <button type="button" className="modal__close-icon" aria-label="Закрыть" onClick={onClose}></button>
        <img className="infoTooltip__image" src={!isSuccess ? errorPic : successPic} alt="" />
        <p className="infoTooltip__text">{isSuccess ? "Вы успешно зарегистрировались!" :
          "Что-то пошло не так! Попробуйте ещё раз."}</p>
      </div>
    </div>
  )
}
export default InfoTooltip;