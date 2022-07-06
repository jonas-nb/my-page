import React from 'react'
import styled from 'styled-components'
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
            width: 0;
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
    const minWidth = window.innerWidth
    return (
        <div className="flex flex-row border justify-around items-center">
            <div className="border border-black flex flex-col  h-60 p-2 justify-center items-center">
                <h1 className="text-3xl sm:text-4xl">Olá, eu sou</h1>
                <h2 className="text-4xl">Jonas Batista</h2>
                <MaquinaEscreve>Front-end Developer.</MaquinaEscreve>
            </div>
            {minWidth > 667 ? <div className="border border-black"></div> : ''}
        </div>
    )
}

export default Apresenta
