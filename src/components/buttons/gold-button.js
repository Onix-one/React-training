import PropTypes from "prop-types";
import css from "./gold-button.module.css";

export default function GoldButton({ text, onClick, size }) {
  const handleOnClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <button className={css.button + ` col-${size}`} onClick={handleOnClick}>
          <span>{text}</span>
        </button>
      </div>
    </div>
  );
}

GoldButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
