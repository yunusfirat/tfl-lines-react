import React from "react";
import { useGlobalContext } from "../Context";
import Loading from "./Loading";
import LineSelector from "./LineSelector";
const DropDownLines = () => {
    const { lineData, loading, selectItem, setSelectItem } = useGlobalContext();
    if (loading) {
        return <Loading />;
    }
    if (lineData.length < 1) {
        return (
            <h2 className="section-title">We are fetching Data</h2>
        );
    }
    const handleChange = (e) => {
        setSelectItem(e.target.value);
    };

    return (
        <>
        <div className="header"><h1>Transport For London Line Information</h1></div>
        <div className="section">
            <select onChange={handleChange} className="form-select" aria-label="select example">
            <option defaultValue>Choose a mode of transport...</option>
                {lineData.map((line, index) => {
                    return (
                        <option value={line}
                        key={index}
                        >{line}</option>
                    );
                })}
            </select>
        </div>
        {selectItem ? <LineSelector selectitem={selectItem} /> : null}
         </>
    );
};

export default DropDownLines;