import React, { useContext } from 'react'
import { GlobalStorage } from './Components/Contexts/MyContext'
import Header from './Components/Headers/Header'
import { Route, Routes } from 'react-router-dom'
import Sobre from './Components/main/Sobre/Sobre'

const App = () => {
    return (
        <div>
            <GlobalStorage>
                <Header />
                <Routes>
                    <Route path="/" element={<Sobre />} />
                </Routes>
            </GlobalStorage>
        </div>
    )
}

export default App
