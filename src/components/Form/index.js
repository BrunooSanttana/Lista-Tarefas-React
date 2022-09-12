import React from "react";

import Proptypes from "prop-types";

//form
import { FaPlus } from "react-icons/fa";

import "./Form.css";



export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: Proptypes.func.isRequired,
  handleSubmit: Proptypes.func.isRequired,
  novaTarefa: Proptypes.string.isRequired,
};
