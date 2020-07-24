import React, { useState } from "react";
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const containerStyle = {
  backgroundColor : '#282c34'
}

const rStyle = {
  borderTop: '1px solid white'
}



const GiffExpertApp = () => {
  //const categories = ['Hajime no ippo', 'kuroko no basket', 'GTO' ]
  const [categoria, setCategoria] = useState([]);
  

  

  return (
    <div className="container" style={containerStyle}>
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center text-white mt-3">GiffExpertApp</h2>
        </div>
      </div>
      <div className="row">
        
          <AddCategory 
            setCategoria={setCategoria}
          />

      </div>
      <hr style={rStyle}/>
      <div className="row">
        <div className="col-md-12">
          <h4 className="h4 text-white">Categorias</h4>
        </div>
      </div>
      <div className="row">
        {
          categoria.map(cats =>
          <GifGrid
            categoria={cats}
            key={cats}
          />)
        }
      </div>
    </div>
  );
};

GiffExpertApp.propTypes = {};

export default GiffExpertApp;
