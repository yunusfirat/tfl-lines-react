import React, { useContext, useState, useEffect } from "react";

const url = "https://api.tfl.gov.uk/Line/Meta/Modes";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
const [loading,setLoading] = useState(true);
    const fetchModeTfl = async () => {
        setLoading(false);
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=> {
        fetchModeTfl();
    },[]);




    return (
        <AppContext.Provider value={{ loading }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () =>{
    return useContext(AppContext);
};

export { AppContext, AppProvider };