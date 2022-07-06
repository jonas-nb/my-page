import React, { useContext } from 'react'
import { MyContext } from '../../Contexts/MyContext'
import Apresenta from './Apresenta'

const Sobre = () => {
    const { darkModeState } = useContext(MyContext)
    return (
        <div
            className={darkModeState === false ? 'pt-20' : 'bg-[#10002B] pt-20'}
        >
            <Apresenta />
        </div>
    )
}

export default Sobre
