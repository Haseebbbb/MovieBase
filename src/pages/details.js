import React, {useEffect,useState} from "react";
import { useParams } from "react-router";
import "../styles.scss";
import axios from "axios";

const Details = () => {
    const [title,updateTitle] = useState("")
    const [year,updateYear] = useState("")
    const [released,updatereleased] = useState("")
    const [genre,updateGenre] = useState("")
    const [rating,updateRating] = useState("")
    const [plot,updatePlot] = useState("")
    const [poster,updatePoster] = useState("")


    const { id: titleId } = useParams();

    const MovieLookup = async () => {
        const res = await axios.get(`http://www.omdbapi.com/?apikey=cf83a991&i=${titleId}`)
        console.log(res.data.Title)
        updateTitle(res.data.Title)
        updateYear(res.data.Year)
        updatePlot(res.data.Plot)
        updatereleased(res.data.Released)
        updateGenre(res.data.Genre)
        updateRating(res.data.Ratings[0].Value)
        updatePoster(res.data.Poster)
    }



    useEffect(() => {
        MovieLookup()

    }, []);





    return (
        <div className="container-fluid">
            <div className="row justify-content-between mt-3">
                <div className="col-sm-4">
                <img className="card-img-top img-card-border" src={poster}/>
                </div>
                <div className="col-sm-6">
                    <div className="card img-card-border h-100">
                        <div className="card-body">
                            <div className="text-center">
                                <h2 className="statement-style">
                                    {title}
                                </h2>
                            </div>
                            <ul className="list-style">
                                <li className="list-item-style">Year : <span className="list-content-style">{year}</span></li>
                                <li className="list-item-style">Released : <span className="list-content-style">{released}</span></li>
                                <li className="list-item-style">Genre : <span className="list-content-style">{genre}</span></li>
                                <li className="list-item-style">Rating : <span className="list-content-style">{rating}</span></li>
                                <li className="list-item-style">Plot : <span className="list-content-style">{plot}</span></li>
                            </ul>

                        </div>
                    </div>

                </div>

            </div>           
        </div>
            )

}

export default Details