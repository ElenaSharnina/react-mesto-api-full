import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const [avatar, setAvatar] = React.useState('');
  const inputRef = React.useRef();

  React.useEffect(() => {
    setAvatar('');
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: inputRef.current.value
    });
  }

  function handleAvatar(e) {
    setAvatar(e.target.value);
  }

  return (
    <PopupWithForm name="edit-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        <input type="url" className="modal__field modal__field_type_url-avatar" value={avatar} name="avatar"
          placeholder="Ссылка на аватар" required id="avatar" ref={inputRef} onChange={handleAvatar} />
        <span className="modal__error avatar-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;