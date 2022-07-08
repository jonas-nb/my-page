import React, { createContext, useState } from 'react'

export const MyContext = createContext()

export const GlobalStorage = ({ children }) => {
    const [darkModeState, setDarkModeState] = useState(false)
    const BreakPoint = {
        window: window.innerWidth,
        value: 667,
    }
    return (
        <MyContext.Provider
            value={{ darkModeState, setDarkModeState, BreakPoint }}
        >
            {children}
        </MyContext.Provider>
    )
}
