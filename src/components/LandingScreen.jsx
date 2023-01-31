import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { LaunchArrow, PauseVideo, PlayVideo, Ticket } from '../features/icons/Icons'
import * as presetStyles from './PresetsStyles'
import { UseStateContext } from '../contexts/ContextProvider'

const LandingScreen = () => {

    const { isVideoPlaying, setIsVideoPlaying } = UseStateContext();
    // const [isWindowLarge, setIsWindowLarge] = useState(Boolean)
    const [screenSize, setScreenSize] = useState(window.innerWidth);

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

    const vidRef = useRef();
    const handleVideo = () => {
        console.log("VIDEO ==> ", isVideoPlaying)
        !isVideoPlaying ? vidRef.current.play()
            :
            vidRef.current.pause()
        setIsVideoPlaying(!isVideoPlaying);
    }
    return (
        <LandingContainer>
            <video id="LandingVideo"
                autoPlay loop playsInline muted
                ref={vidRef}
            // poster=''
            >
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
                    <i onClick={() => handleVideo()}>
                        {isVideoPlaying ?
                            <PlayVideo color="#fff" width="1em" height="1em" />
                            :
                            <PauseVideo color="#fff" width="1em" height="1em" />}
                    </i>
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
            background-color: rgba(0,0,0,0.5);
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
    padding: 4vh 0;
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
        padding-left: 10vw;
        padding-right: 30vw;    
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
        padding-left: 10vw;
        padding-right: 4vw;
        /* margin: 20vh 10vw; */

        /* button {
            border: none;
            background-color: #0000;
            display: flex;
            align-items: center;

        } */
        >span i {
            display:flex;   
            margin-left: 10px;
            :hover {
                cursor: pointer;
            }
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
            flex: 1;
            &:hover {
                > span:nth-child(2)  {
                text-decoration: underline;
                }
            }
           
        }
        i {
            cursor: pointer;
        }
    }
    @media screen and (max-width: 900px) {
        p, span {
            font-size : 12px;
        }
    }
    @media screen and (max-width: 740px) {

        /* padding: 6vh 6vw; */
        div:first-child {
            align-items: center;
            padding: 0 4vw 0 4vw; 
            button {
                padding: 16px 24px;
            }
        }
        div:nth-child(2) {
            padding: 0 6vw 0 6vw;
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
        p, span {
            font-size : 12px;
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