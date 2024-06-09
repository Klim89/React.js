import * as React from "react";
import PropTypes from "prop-types";

const Student = ({ name, age, isStudent }) => {
  return (
    <>
      <h2>Имя: {name}</h2>
      <p>Возраст: {age}</p>
      <p>{isStudent ? "Студент" : "Не студент"}</p>
    </>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool,
};
export default Student;
