import React, { useState,useEffect } from "react";
import SearchCard from "../components/searchCard"
import "../styles.scss";
import axios from "axios";
import MovieCard from "../components/movieCard"

const Main = () => {
    const [titles, updateTitles] = useState([])
    const [statement, updateStatement] = useState("Search Results will be displayed here...")
    const [page, updatePage] = useState(1)
    const [totalPages,updateTotalPages] = useState(1)
    const [searchInput, updateSearchInput] = useState("")
    const [searchInputType, updateSearchInputType] = useState("")

    const pageUp = async() =>{
        
        if (page + 1 > totalPages){
            
        }
        else{
            updatePage(page + 1)
            
                
        }
    }

    const pageDown = () =>{
        if (page - 1 <= 0){
            
        }
        else{
            updatePage(page - 1)
        }
    }

    const searchFunc = async (searchVal,searchValType) => {
        try {
            updateSearchInput(searchVal)
            updateSearchInputType(searchValType)
            const res = await axios.get(`http://www.omdbapi.com/?apikey=cf83a991&s=${searchVal}&type=${searchValType}`)
            if (res.data.Response === "True") {
                updateTitles(res.data.Search)
                updateStatement("Search Results")
                let total = res.data.totalResults
                total = parseInt(total)
                let tempTotalPages = 0
                if (total%10 > 0){
                    tempTotalPages = 1
                }
                tempTotalPages += Math.floor(total / 10)
                updateTotalPages(tempTotalPages)
            }
            else {
                updateTitles([])
                updateStatement("Too many Results, narrow down your query")
            }

        } catch (error) {
            console.log(error)
        };
    }

    const updateSearch = async() =>{
        try {
        const res = await axios.get(`http://www.omdbapi.com/?apikey=cf83a991&s=${searchInput}&page=${page}&type=${searchInputType}`)
            if (res.data.Response === "True") {
                updateTitles(res.data.Search)
            }
            else {
            
            }

        } catch (error) {
            console.log(error)
        };

    }

    useEffect(() => {
        updateSearch()

    }, [page]);

    return (
        <>
            <SearchCard props={searchFunc} />

            <div className="container-fluid">
                <div className="row text-center my-3">
                    <h3 className="statement-style">{statement}</h3>
                </div>
                <div className="row">
                    {titles.map((title) => {
                        return (
                            <div className="col-sm-3 d-flex justify-content-center my-3 center-block">
                                <center>
                                <MovieCard object={title} />
                                </center>
                            </div>)
                    })}
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <div className="btn-style-left">
                                <button className="btn" type="submit" onClick={pageDown}>
                                    <span className="btn-text">{`<`}</span>
                                    </button>
                                    </div>
                            </div>
                            <input type="number" className="form-control" style={{"textAlign":"center"}} readOnly placeholder={page} />
                            <div className="input-group-append">
                            <div className="btn-style">
                                <button className="btn" type="submit" onClick={pageUp}>
                                    <span className="btn-text">{`>`}</span>
                                    </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}

export default Main