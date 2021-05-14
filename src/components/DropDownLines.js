import React from "react";
import { useGlobalContext } from "../Context";
import Loading from "./Loading";

const DropDownLines = () => {
const { lineData, loading } = useGlobalContext();
console.log(loading);
if(loading){
    return <Loading />;
}
if(lineData.length < 1) {
    return (
        <h2 className="section-title">We are fetching Data</h2>
    );
}

    return(
        <div><h1>dsadsad</h1></div>
    );
};

export default DropDownLines;