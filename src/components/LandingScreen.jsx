import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { LaunchArrow, Ticket } from '../features/icons/Icons'
import * as presetStyles from './PresetsStyles'

const LandingScreen = () => {

    // const [isWindowLarge, setIsWindowLarge] = useState(Boolean)
    const [screenSize, setScreenSize] = useState(window.innerWidth)

    //debounce function allows to minimise number of re-runders in time:
    function debounce(fn, ms) {
        let timer;
        return () => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                timer = null;
                fn.apply(this, arguments);
            }, ms)
        };
    }

    useEffect(() => {
        const debounceHandleResize = debounce(
            () => setScreenSize(window.innerWidth),
            1000)

        window.addEventListener("resize", debounceHandleResize)
        return () => {
            window.removeEventListener("resize", debounceHandleResize)
        }
    }, [])

    return (
        <LandingContainer>
            <video autoPlay loop playsInline muted>
                {screenSize > 920 ?
                    <source src="/videos/video_large.mp4" type='video/mp4' />
                    :
                    <source src="/videos/video.mp4" type='video/mp4' />
                }
                <img src="/images/cour-napoleon-et-pyramide_1.webp" alt="" />

            </video>
            <LandingContent>
                <div>
                    <h2>Évadez-vous au Louvre</h2>
                    <Billetterie>
                        <Ticket color="#fff" width="1em" height="1em" />
                        <span>Réserver un billet</span>
                    </Billetterie>
                </div>
                <div>
                    <span>
                        <span><Availability /></span>
                        <span>Le musée  est ouvert aujourd'hui de 9h à 18h</span>
                    </span>

                    <span>
                        <span><Separator /></span>
                        <span>Voir les jours d'accès aux collections</span>
                        <i><LaunchArrow color="#fff" width="1em" heigh="1em" /></i>
                    </span>
                </div>

            </LandingContent>

        </LandingContainer>
    )
}

const LandingContainer = styled.div`
    position: relative;
    left: 0;
    right: 0;
    height: calc(100vh - 150px);
   /* width: 100%; */
   video {
    position: absolute;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    /* border-top: double transparent; */
    
}
    &:before {
            content: "";
            background-color: rgba(0,0,0,0.8);
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 1;
            left: 0;
            top: 0;
        }
`;

const LandingContent = styled.div`
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 6vh 30vw 6vh 16vw;
    span {
        font-size: 16px;
        color: #fff;
        font-family: ${presetStyles.roboto};
    }
    div:first-child {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        height: inherit;
        align-items: flex-start;
        justify-content: center;
            
        h2 {
            font-size : 70px;
            font-family: 'Aboreto';
            color: #fff;
            margin-bottom: 38px;
        }
    }
    div:nth-child(2) {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        /* margin: 20vh 10vw; */

        /* button {
            border: none;
            background-color: #0000;
            display: flex;
            align-items: center;

        } */
        i {
            display:flex;   
            margin-left: 10px;
            svg {
                transform: translateX(0px);
                transition: all 0.5s;
            } 
        }
        > span {
           display: flex;
           align-items: center;
           margin-bottom: 14px;
           
           > span:first-child {
            min-width: 30px;
            display: flex;
            justify-content: center;
           }
           
           
           &:hover {
            

            svg {
                transform: translateX(6px);
                transition: all 0.2s;
            }
           }
        }
        > span:nth-child(2) {
            cursor: pointer;
            &:hover {
                > span:nth-child(2)  {
                text-decoration: underline;
                }
            }
           
        }
    }

    @media screen and (max-width: 740px) {
        div:first-child {
            align-items: center;
        }
        padding: 6vh 6vw;
        div:nth-child(2) {
            /* margin: 0 10vw; */
            > span > span:first-child {
                min-width: 30px;
                display: flex;
                justify-content: start;
            }
        }
        & div:first-child h2 {
            font-size : 40px;
            text-align: center;
        }
    }
`;

const Availability = styled.span`
 
    display: block;
    height: 14px;
    width: 14px;
    /* If Louvre is closed : color : #e2003c */
    background-color: #00e2c4;
    box-shadow: 0px 0px 12px 0px #00e2c4;
    border-radius: 50%;
`;
const Separator = styled.span`
    display:block;
    height: 20px;
    width: 2px;
    background-color: #fff;

    @media screen and (max-width: 740px) {
        display: none;
    }
`;

const Billetterie = styled.button`
    border: none;
    background-color: #008573;
    /* background-color: #0a4f51; */

    padding: 17px 50px;
    max-width: max-content;
    color: #fff;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 16px;

    font-size:12px;
    font-weight: 600;
    cursor: pointer;
    span {
        margin-left: 6px;
    }

    :hover {
        background-color: #0a4f51;
        transition: 0.4s;
        span {
            text-decoration-line: underline;
        }
    }
`;
export default LandingScreen