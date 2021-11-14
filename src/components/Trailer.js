import React from 'react'
import {useHistory} from "react-router-dom";



function Trailer() {

    let history = useHistory()

    return (
        <div className="row">
            <h1>Trailer</h1>
            <button className="btn " onClick={()=> {history.push("/")}}>Back</button>
            {/* {
            Movie.map((list,key) => (
                <div key={key} className="MovieTrailer">
                    <h1>Description: {list.description}</h1>
                    <iframe width="90%" height="800" src={list.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            ))
            } */}
        </div>
    )
}

export default Trailer
