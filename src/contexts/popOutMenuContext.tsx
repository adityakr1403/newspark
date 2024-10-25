"use client";
import React, {createContext, ReactNode, useState} from 'react';


export const PopOutMenuContext = createContext({
    menuIsOpen: false, setMenuIsOpen: (value: boolean) => {
    }
});

const PopOutMenuProvider = ({children}: { children: React.ReactNode }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    return (
        <PopOutMenuContext.Provider value={{menuIsOpen, setMenuIsOpen}}>
            {children}
        </PopOutMenuContext.Provider>
    );
};

export default PopOutMenuProvider;