import React from "react";
import PopupWithForm from "./PopupWithForm";


function AddPlacePopup(props) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: name,
      link: link
    });
  }

  function handleName(e) {
    setName(e.target.value);
  }
  function handleLink(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm name="add-photo"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>

      <label className="modal__label">
        <input type="text" className="modal__field modal__field_type_card-name" value={name} name="cardname"
          placeholder="Название" required id="cardname" style={{ minlength: "2", maxlength: "30" }} onChange={handleName} />
        <span className="modal__error cardname-error"></span>
      </label>
      <label className="modal__label">
        <input type="url" className="modal__field modal__field_type_card-link" value={link} name="cardlink"
          placeholder="Ссылка на картинку" required id="cardlink" onChange={handleLink} />
        <span className="modal__error cardlink-error"></span>
      </label>
    </PopupWithForm>
  )
}
export default AddPlacePopup;