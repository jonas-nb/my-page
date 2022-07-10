import React, { useContext } from 'react'
import { MyContext } from '../../Contexts/MyContext'
import styled from 'styled-components'
import Svg from '../../../Assets/img/Saturn.svg'
import Anime, { anime } from 'react-anime'
import MeusLinks from './MeusLinks'
export const MaquinaEscreve = styled.h1`
    padding-top: 10px;
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

const Apresenta = () => {
    const { darkModeState } = useContext(MyContext)

    return (
        // container
        <div
            className={`w-full h-screen flex flex-col sm:flex-row items-center justify-center sm:justify-around font-mono'`}
        >
            {/* letreiro */}
            <div
                className={`${
                    darkModeState === false
                        ? 'text-[#240046]'
                        : 'text-[#ffffff]'
                }  sm:relative sm:top-10 text-2xl sm:text-xl text-center font-semibold font-mono tracking-tighter flex flex-col items-center h-60`}
            >
                <h1 className="">Olá, eu sou</h1>
                <h2 className="">Jonas Batista</h2>
                <MaquinaEscreve>Front-end Developer.</MaquinaEscreve>
                <MeusLinks />
            </div>
            {/* animação svg */}
            <div className="relative top-10 w-44">
                <Anime
                    direction={'alternate'}
                    rotate={360}
                    loop={true}
                    duration={10000}
                    delay={anime.stagger(100)}
                    scale={[0.1, 0.9]}
                >
                    <img src={Svg} alt="" className="w-96 fill-[#fff]" />
                </Anime>
            </div>
        </div>
    )
}

export default Apresenta
