import PropTypes from "prop-types";
import "./header-button.css";

export default function HeaderButton({ text, onClick }) {
  const handleOnClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="row">
      <div className="col-auto">
        <button className="button" onClick={handleOnClick}>
          <span>{text}</span>
        </button>
      </div>
    </div>
  );
}

HeaderButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
