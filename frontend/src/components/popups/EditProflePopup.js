import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../../context/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  function handleName(e) {
    setName(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm name="edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>

      <label className="modal__label">
        <input type="text" className="modal__field modal__field_type_name" value={name || ''} name="username"
          placeholder="Ваше имя" required id="username" style={{ minlength: "2", maxlength: "40" }}
          onChange={handleName} />
        <span className="modal__error username-error"></span>
      </label>
      <label className="modal__label">
        <input type="text" className="modal__field modal__field_type_occupation" value={description || ''} name="userjob"
          placeholder="Расскажите о себе" required id="userjob" style={{ minlength: "2", maxlength: "40" }}
          onChange={handleDescription} />
        <span className="modal__error userjob-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;