import React, { createContext } from 'react';
import AllData from '../Hooks/AllData';
export const MyContext= createContext()
const ContextProvider = ({ children }) => {
    const value = AllData()
    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};

export default ContextProvider;