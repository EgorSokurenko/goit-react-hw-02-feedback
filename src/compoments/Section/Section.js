import propTypes from "prop-types";
import "./Section.css";
export default function Section({ title, children }) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      {children}
    </div>
  );
}
Section.propTypes = {
  title: propTypes.string,
  children: propTypes.array,
};
