import React, { useCallback, useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useGlobalContext } from "../Context";
const LineInformation = ( { lineSelector }) => {
    const [lineInfo, setLineInfo ] = useState([]);
    const { selectItem } = useGlobalContext();
    const [check ,setCheck ] = useState([]);
    const url = `https://api.tfl.gov.uk/Line/${lineSelector}/Route`;
    const fetchinformation = useCallback (async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            if(data){
                let newname = data.name;
                let newmodeName = data.modeName;
                let start = data.routeSections[0].originationName;
                let finish = data.routeSections[1].originationName;
               let lineInformation = [newname, newmodeName, start, finish];
                setLineInfo(lineInformation);
                setCheck(check.concat(...check, lineSelector));
            }else {
                setLineInfo([]);
            }
        } catch (error) {
            console.log(error);
        }
    },[url]);

    useEffect(()=> {
        fetchinformation();
    },[fetchinformation, lineSelector]);

useEffect(() => {
    setCheck(check.concat(selectItem));
},[selectItem]);
    return(
        <div  className={check.length %2 === 1 ? "column" : "none" }>
            <h1>{lineInfo[1]}: {lineInfo[0]}</h1>
            <div className="flex">
            <div className="info">
                <div className="start"><h2>Start Of Line</h2></div>
                {lineInfo[2]}
            </div>
            <div className="icon">
            <FaLongArrowAltRight/>
            </div>
            <div className="info">
            <div className="start"><h2>End Of Line</h2></div>
                <p style={{ textTransform:"initial" }}>{lineInfo[3]}</p>
            </div>
            </div>
        </div>
    );
};


export default LineInformation;