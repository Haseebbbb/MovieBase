import React, {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../styles.scss";


const SearchCard = (props) => {
    const [searchVal, updateSearchVal] = useState("")
    const [searchValType, updateSearchValType] = useState("")
    
    const changeValTitle = (event) => {
        updateSearchVal(event.target.value);
    }

    const changeValType = (event) => {
        updateSearchValType(event.target.value);
    }

    const onSearch = async() => {
        try {
            props.props(searchVal,searchValType);
        } catch (error) {
            console.log(error)
        };
    }





    return (
        <div>
        <div className="card search-box container-fluid" >
            <div className="card-body">
                <div className="row justify-content-center">
                    <div className="col-sm-10">
                        <label for="exampleFormControlInput1" className="form-label">
                            <span className="label-style">Title</span>
                        </label>
                        <div className="input-group">
                            <input type="text" className="form-control" onChange={changeValTitle} placeholder="Type to search..." />
                            <div className="input-group-append">
                                <div className="btn-style">
                                <button className="btn" type="submit" onClick={onSearch}>
                                    <span className="btn-text">Search</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-3 mb-3">
                    <div className="col-sm-3">
                        <label for="exampleDataList" className="form-label">Type</label>
                        <input className="form-control" list="datalistOptions" id="exampleDataList" onChange={changeValType} placeholder="Type to search..." />
                        <datalist id="datalistOptions">
                            <option value="movie" />
                            <option value="series" />
                            <option value="episode" />
                        </datalist>
                    </div>

                    {/* <div className="col-sm-3">
                        <label for="exampleDataList" className="form-label">Datalist example</label>
                        <div className="form-control">
                        <DatePicker />
                        </div>
                    </div> */}


                </div>
            </div>
        </div>
        </div>
    )

}

export default SearchCard