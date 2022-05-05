import React from "react";
import "../styles.scss";
import {NavLink,} from "react-router-dom"

const MovieCard = (props) => {



    return (
        <NavLink to={`/detail/${props.object.imdbID}`} style={{ textDecoration: 'none' }}>
        <div className="img-card h-100">
            <div className="card img-card-border h-100">
                <img className="card-img-top" src={props.object.Poster}/>
                    <div className="card-body">
                        <p className="card-text text-center">{props.object.Title}</p>
                                <p className="card-content">Year : <span className="card-content-fill">{props.object.Year}</span></p>
                                <p className="card-content">Type : <span className="card-content-fill">{props.object.Type}</span></p>
                    </div>
            </div>
        </div>
        </NavLink>
            )

}

export default MovieCard