import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner === currentUser._id;
  const cardDeleteButtonClassName = `button ${isOwn ? "element__delete" : "element__delete_hidden"
    }`;

  const isLiked = props.card.likes.some((i) => i === currentUser._id);
  const cardLikeButtonClassName = `button ${isLiked ? "element__like element__like_active" : "element__like"
    }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }
  function handleCardDelete() {
    props.onCardDelete(props.card);
  }
  return (
    <div className="element">
      <div className="element__foto-zone">
        <img
          className="element__image"
          src={props.card.link}
          alt={props.card.name}
          onClick={handleClick}
        />
        <button
          type="button"
          className={cardDeleteButtonClassName}
          aria-label="Удалить"
          onClick={handleCardDelete}
        ></button>
      </div>
      <div className="element__caption-zone">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__likes">
          <button
            type="button"
            className={cardLikeButtonClassName}
            aria-label="Нравится"
            onClick={handleLikeClick}
          ></button>
          <p
            className={`${props.card.likes.length !== 0
              ? "element__count"
              : "element__count_disactive element__count"
              }`}
          >
            {props.card.likes.length}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
