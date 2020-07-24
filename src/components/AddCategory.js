import React, { useState } from "react";
import PropTypes from "prop-types";

const btnReact = {
  color: "#000000",
  backgroundColor: "#61dafb",
  borderColor: "#61dafb",
};

const AddCategory = ({ setCategoria }) => {
  const [nuevaCategoria, setNuevaCategoria] = useState("");

  const handleChange = (e) => {
    setNuevaCategoria(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if(nuevaCategoria.trim().length > 2){
      setCategoria( cat => [ nuevaCategoria, ...cat]);
      setNuevaCategoria('')
    }

    

  };

  return (
    <div className="col-md-12">
      <form className="form-row align-items-center" onSubmit={handleSubmit}>
        <div className="col-auto">
          <label htmlFor="nombre" className="text-white">
            Add Category
          </label>
          <input
            onChange={handleChange}
            id="nombre"
            type="text"
            name="nombre"
            className="form-control mb-2"
            value={nuevaCategoria}
          />
        </div>
        <div className="col-auto">
          <button className="btn mt-4" style={btnReact}>
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

AddCategory.propTypes = {
  setCategoria: PropTypes.func.isRequired
};

export default AddCategory;
