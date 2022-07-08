import React, { useContext } from 'react'
import { MyContext } from '../../Contexts/MyContext'
import Apresenta from './Apresenta'
import Perfil from './Perfil'

const Sobre = () => {
    const { darkModeState, BreakPoint } = useContext(MyContext)
    console.log(BreakPoint)
    return (
        <div
            className={`${
                darkModeState === false ? 'bg-[#fcebff]' : 'bg-[#10002B]'
            } ${BreakPoint.window < BreakPoint.value ? 'pt-20' : ''}`}
        >
            <Apresenta />
            <Perfil />
        </div>
    )
}

export default Sobre
