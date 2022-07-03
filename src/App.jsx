import React from 'react'
import { StorageDarkMode } from './Components/Contexts/MyContext'
import Header from './Components/Headers/Header'

const App = () => {
    return (
        <div>
            <StorageDarkMode>
                <Header />
            </StorageDarkMode>
        </div>
    )
}

export default App
