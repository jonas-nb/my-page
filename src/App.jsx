import React, { useContext } from 'react'
import { MyContext, StorageDarkMode } from './Components/Contexts/MyContext'
import Header from './Components/Headers/Header'
import { Route, Routes } from 'react-router-dom'
import Sobre from './Components/main/Sobre/Sobre'
const App = () => {
    return (
        <div>
            <StorageDarkMode>
                <Header />
                <Routes>
                    <Route path="/" element={<Sobre />} />
                </Routes>
            </StorageDarkMode>
        </div>
    )
}

export default App
