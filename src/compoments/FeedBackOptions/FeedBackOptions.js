import "./FeedBackOption.css";
import PropTypes from "prop-types";
export default function FeedBackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      <ul className="listButton">
        {options.map((option, index) => (
          <li key={index}>
            <button className="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
FeedBackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
