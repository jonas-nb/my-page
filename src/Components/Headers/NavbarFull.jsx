import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../Contexts/MyContext'

const NavbarFull = () => {
    const { darkModeState } = useContext(MyContext)

    return (
        <div className="w-8/12 md:w-6/12 flex items-center justify-around mt-2 relative left-4">
            <Link
                to="/"
                className={
                    darkModeState === false
                        ? 'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                        : 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 text-lg pink-500/50  dark:pink-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2'
                }
            >
                Quem Sou
            </Link>
            <Link
                to="/Projetos"
                className={
                    darkModeState === false
                        ? 'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                        : 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 text-lg pink-500/50 dark:text-lg dark:pink-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2'
                }
            >
                Projetos
            </Link>
            <Link
                to="/Tecnologias"
                className={
                    darkModeState === false
                        ? 'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                        : 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300  font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2'
                }
            >
                Tecnologias
            </Link>
        </div>
    )
}

export default NavbarFull
