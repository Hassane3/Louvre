import React from 'react'
import styled from 'styled-components';

import { montserrat, roboto, sweetBlack, sweetWhite } from "../components/PresetsStyles"

const LouvrePlus = () => {
    return (
        <LouvrePlus_Container>
            <div>
                <h3>Tous les contenus du musée sont sur Louvre+</h3>
                <p>La plateforme de streaming du Louvre</p>
                <p>Plus de 52 séries, 700 vidéos et 19 podcasts en accès libre</p>
                <div>
                    <button>Podcasts</button>
                    <button>Jeunesse</button>
                    <button>Séries</button>
                    <button>Conférences</button>
                    <div>
                        <button>Voir tout</button>

                    </div>
                </div>
            </div>
            <div>
                <img src="https://raw.githubusercontent.com/Hassane3/Louvre/main/public/images/Fresque-Louvre%2B-bisV2%20(2).webp" alt="louvre plus"></img>
            </div>
        </LouvrePlus_Container>
    )
}

const LouvrePlus_Container = styled.div`
    background-color: #1a1a1a;
    display: flex;
    position: relative;
    padding-left: 38px;
    /* height: 60vh; */

    overflow: hidden;;
    @media screen and (max-width: 820px) {
        flex-direction: column;
        padding-left: 0;
        div:last-child {
            &:after{
                content: "";
                height: 20%;
                width: 100%;
                left: 0;
                bottom: 0;
                position: absolute;
                background: linear-gradient(to top,rgba(0,0,0,0.8),#0000 );
            }
        }
        div:first-child {
            h3 {
                 font-size: 24px !important;
            }
            div div:last-child {
            position: absolute;
            bottom: 0;
            left:0;
            right: 0;
            z-index: 10;
            width: 100vw;
            text-align: center;
            button {
                margin-right: 0;
            }
        }
        }
            
        
    }


    div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 60px 4vw 0 4vw;
        min-width: 40vw;
        h3, p {
            color: ${sweetWhite};
            margin-bottom: 30px;
        }
        h3 {
            font-size: 34px;
            font-family: ${montserrat};
            font-weight: 500;
            margin-right: 5vh;
        }
        p:nth-child(2) {
            font-size: 18px;
        }
        p:nth-child(3) {
            font-size: 12px;
        }

        > div {
            width: 100%;
            button {
                padding: 10px 20px;
                color: #fff;
                border: 2px solid ${sweetWhite};
                background-color: #0000;
                border-radius: 16px;
                margin-right: 14px;
                margin-bottom: 14px;
                cursor: pointer;
                font-weight: 800;
                font-family: ${roboto};
                :hover {
                    background-color: #4a4a4a;
                }
            }
            button:last-child {
                padding: 10px 20px;
                color: ${sweetBlack};
                border: none;
                background-color: #fc6399;

                :hover {
                    background-color: #ca4f7a;
                    text-decoration: underline;
                }
            }
        }
    }

    div:nth-child(2) {
        img {
            height: 100%;
            width: 100%;
            position: relative;
            object-fit: cover;
            object-position: left;

        }
    }
`;


export default LouvrePlus