import React, { createContext, useState } from 'react'

export const MyContext = createContext()

export const StorageDarkMode = ({ children }) => {
    const [darkModeState, setDarkModeState] = useState(false)
    return (
        <MyContext.Provider value={{ darkModeState, setDarkModeState }}>
            {children}
        </MyContext.Provider>
    )
}
