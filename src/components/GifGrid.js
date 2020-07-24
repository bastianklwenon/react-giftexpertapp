import React from "react";
import GifGridItem from "./GifGridItem";
import { useFetchGif } from "../hooks/useFetchGifs";


const GifGrid = ({ categoria }) => {


  const {data,loading} = useFetchGif(categoria);


  return (
    <div className="col-md-12 animate__animated animate__fadeIn">
      {loading && <h3 className="text-white text-center animate__animated animate__flash">Cargando...</h3>}
      <h2 className="text-white text-center">{categoria}</h2>
      <div className="row row-cols-1 row-cols-md-3">
        {data.map((g) => (
          <GifGridItem gif={g} key={g.id} />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
