import React, { useContext } from 'react'
import { MyContext } from '../../Contexts/MyContext'
import styled from 'styled-components'
import Svg from '../../../Assets/img/Saturn.svg'
import Anime, { anime } from 'react-anime'
import MeusLinks from './MeusLinks'
export const MaquinaEscreve = styled.h1`
    font-family: sans-serif;
    padding-top: 10px;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-items: center;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.1em; /* Adjust as needed */
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
    /* The typing effect */
    @keyframes typing {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: #4d0060;
        }
    }
`

console.log(Svg)
let colors = ['blue', 'green', 'red']
const Apresenta = () => {
    const { darkModeState, BreakPoint } = useContext(MyContext)
    const minWidth = window.innerWidth

    return (
        <div
            className={`${
                BreakPoint.window < BreakPoint.window ? 'flex-col' : 'flex-col'
            }'border border-red-600 sm:h-80 md:h-screen flex  justify-around items-center font-mono'`}
        >
            <div
                className={`${
                    darkModeState === false
                        ? 'text-[#240046]'
                        : 'text-[#ffffff]'
                } ${
                    BreakPoint.window > BreakPoint.value
                        ? 'text-6xl justify-around'
                        : 'text-4xl justify-center'
                } text-center font-semibold tracking-tighter flex flex-col items-center h-60 p-2`}
            >
                <h1 className="">Olá, eu sou</h1>
                <h2 className="">Jonas Batista</h2>
                <MaquinaEscreve>Front-end Developer.</MaquinaEscreve>
                <MeusLinks />
            </div>
            <div className="w-96">
                <Anime
                    direction={'alternate'}
                    rotate={360}
                    loop={true}
                    duration={10000}
                    delay={anime.stagger(100)}
                    scale={[0.1, 0.9]}
                >
                    {colors.map((color, i) => (
                        <div key={i} className={color} />
                    ))}
                    <img src={Svg} alt="" id="Oi" className="w-96" />
                </Anime>
            </div>
        </div>
    )
}

export default Apresenta
