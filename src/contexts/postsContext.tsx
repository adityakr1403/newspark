"use client";
import React, {createContext, ReactNode, useState} from 'react';

export const postsContext = createContext({
    postsForEachCategory: {}, setPostsForEachCategory: (value: any) => {
    }
});

const PopOutMenuProvider = ({children}: { children: React.ReactNode }) => {
    const [postsForEachCategory, setPostsForEachCategory] = useState({})
    return (
        <postsContext.Provider value={{postsForEachCategory, setPostsForEachCategory}}>
            {children}
        </postsContext.Provider>
    );
};

export default PopOutMenuProvider;