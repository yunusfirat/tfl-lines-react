import React, { useState } from "react";
import { useGlobalContext } from "../Context";
import Loading from "./Loading";

const DropDownLines = () => {
    const { lineData, loading } = useGlobalContext();
    const [selectItem, setSelectItem] = useState("");
    if (loading) {
        return <Loading />;
    }
    if (lineData.length < 1) {
        return (
            <h2 className="section-title">We are fetching Data</h2>
        );
    }
    const handleChange = (e) => {
        console.log("hello world", e.target.value);
        setSelectItem(e.target.value);
    };

    return (
        <div className="section">
            <select onChange={handleChange} class="form-select" aria-label="select example">
            <option selected>Choose a mode of transport...</option>
                {lineData.map((line, index) => {
                    return (
                        <option value={line} key={index}>{line}</option>
                    );
                })}
            </select>
            <p>You selected Mode: {selectItem}</p>
        </div>
    );
};

export default DropDownLines;