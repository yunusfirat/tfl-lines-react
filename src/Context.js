import React, { useContext, useState, useEffect } from "react";

const url = "https://api.tfl.gov.uk/Line/Meta/Modes";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
const [loading,setLoading] = useState(true);
const [lineData, setLineData] = useState([]);
const [selectItem, setSelectItem] = useState("");
    const fetchModeTfl = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            if(data){
                const fetchedlines = data.map((item)=> {
                    return (
                        item.modeName
                    );
                });
                setLineData(fetchedlines);
            }else {
                setLineData([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    useEffect(()=> {
        fetchModeTfl();
    },[]);




    return (
        <AppContext.Provider value={{ loading, lineData, selectItem, setSelectItem }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () =>{
    return useContext(AppContext);
};

export { AppContext, AppProvider };