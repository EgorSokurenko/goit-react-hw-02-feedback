import "./FeedBackOption.css";
import PropTypes from "prop-types";
export default function FeedBackOptions({ OnAddBad, OnAddGood, OnAddNeutral }) {
  return (
    <div>
      <ul className="listButton">
        <li>
          <button onClick={OnAddGood}>Good</button>
        </li>
        <li>
          <button onClick={OnAddNeutral}>Neutral</button>
        </li>
        <li>
          <button onClick={OnAddBad}>Bad</button>
        </li>
      </ul>
    </div>
  );
}
FeedBackOptions.propTypes = {
  OnAddBad: PropTypes.func,
  OnAddGood: PropTypes.func,
  OnAddNeutral: PropTypes.func,
};
