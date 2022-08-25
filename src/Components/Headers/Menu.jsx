import React, { useContext } from 'react'
import { MyContext } from '../Contexts/MyContext'
import DarkModeButton from './DarkModeButton'
import Navbar from './Navbar'
import NavbarFull from './NavbarFull'
import logo from '../../Assets/img/Logo.jpg'

const Menu = () => {
    const { darkModeState } = useContext(MyContext)
    console.log(darkModeState)
    const minWidth = window.innerWidth
    return (
        <div className="h-16 flex flex-row items-center justify-around">
            <img
                className="w-11 rounded-full outline outline-[#7013c1]"
                src={logo}
                alt=""
            />
            <div className="text-white font-extrabold bg-white"></div>
            {minWidth < 667 ? <Navbar /> : <NavbarFull />}
            <DarkModeButton />
        </div>
    )
}

export default Menu
