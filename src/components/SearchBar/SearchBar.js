import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../../components/SearchBar/SearchBar.css'

const SearchBar = ({ data, placeholder ,open}) => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord.toUpperCase());
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        console.log(newFilter)
        const newarr = newFilter.map(e => {
            return {
                'title': e.title.toUpperCase(),
                'link' : e.link
            }
        })
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newarr);
        }
       
    };
      const clearInput=(event)=>{
           setFilteredData([])
           setWordEntered("")
      }


    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />

            </div>
            {filteredData.length != 0 && (
                <div className="dataResult" >
                    {filteredData.slice(0, 10).map((value ,index) => {
                        return (
                            <Link to={value.link} onClick={open ? open : null} key={index}>
                                <p  className="dataItem" onClick={clearInput} >
                                    {value.title}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
export default SearchBar