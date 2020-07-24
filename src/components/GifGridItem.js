import React from 'react'

const bordesito = {
    border:"5px solid #61dafb"
}

const GifGridItem = ({gif}) => {
    return (
        <div className="col mb-4">
            <div className="card card-background animate__animated animate__fadeIn" style={bordesito}>
                <img src={gif.url} className="card-img-top" alt={gif.title}/>
                <div className="card-body">
                    <h5 className="card-title text-white">{gif.title}</h5>
                </div>
            </div>
        </div>
    )
}

export default GifGridItem;
