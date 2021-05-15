import React, { useEffect, useCallback, useState } from "react";
import LineInformation from "./LineInformation";
const url = "https://api.tfl.gov.uk/Line/Mode/";
const LineSelector = ({ selectitem }) => {
    const [lineSelector, setLineSelector] = useState("");
    const [line, setLine] = useState([]);
const fetchLine = useCallback (async () => {
    try {
        const response = await fetch(`${url}${selectitem}`);
        const data = await response.json();
        if(data){
            const catchline = data.map((line) => {
                return (
                    line.name
                );
            });
            setLine(catchline);
        }else {
            setLine([]);
        }
    } catch (error) {
        console.log(error);
    }
},[selectitem]);

useEffect(()=> {
    fetchLine();
},[fetchLine, selectitem]);

const handleChange = (e) => {
    setLineSelector(e.target.value);
};

    return (
        <div className="section">
        <select onChange={handleChange} className="form-select" aria-label="select example">
        <option defaultValue>Choose a Line... </option>
            {line.map((line, index) => {
                return (
                    <option value={line}
                    key={index}
                    >{line}</option>
                );
            })}
        </select>
        <>{lineSelector ? <LineInformation lineSelector ={lineSelector} /> : null} </>
    </div>
    );
};

export default LineSelector;