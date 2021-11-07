import propTypes from "prop-types";
import "./Notification.css";
export default function Notification({ message }) {
  return <p className="message">{message}</p>;
}
Notification.propTypes = {
  message: propTypes.string,
};
