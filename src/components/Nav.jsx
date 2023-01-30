import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { UseStateContext } from '../contexts/ContextProvider';

import { LaunchArrow, Search, ArrowTip, Cross, Facebook, Pinterest, Instagram, Twitter, Linkedin, Youtube, LouvreLogo } from '../features/icons/Icons';
import * as presetStyles from './PresetsStyles';



const Nav = (props) => {
    const { isNavOpened, setIsNavOpened, handleNavMenu } = UseStateContext();
    const [request, setRequest] = useState("");
    // const [isNavOpened, setIsNavOpened] = useState(false);

    useEffect(() => {

    }, [isNavOpened])

    const handleFocus = () => {
        document.getElementById("research").focus();
    }

    const handleSetRequest = (e) => {
        setRequest(e.target.value);
    }
    console.log("isNavOpened : ", isNavOpened)
    console.log("isNavOpened : ", isNavOpened)

    return (
        <O>
            <NavMenu className={isNavOpened ? "nav-active" : "nav-desactive"}>
                <div>
                    <NavHeader >
                        <span onClick={() => handleNavMenu(false)}>
                            <Cross color="#fff" />
                        </span>
                        <Lang>
                            <span>Français</span>
                            <ArrowTip color="#fff" height={"1.2em"} width={"1.2em"} />
                        </Lang>
                    </NavHeader>
                    <SearchBar onClick={handleFocus}>
                        <span>
                            <Search color="#000" />
                        </span>
                        <SearchField>
                            <label htmlFor="research" ><span id="research_span">Rechercher</span></label>
                            <input alt="search bar" type="text" name="research" id="research" value={request} onChange={(value) => handleSetRequest(value)} />
                        </SearchField>
                        <button style={{
                            backgroundColor: request ? "#1a1a1a" : "#bababa",
                            cursor: request ? 'pointer' : 'no-drop'
                        }}>
                            <LaunchArrow color="#fff" />
                        </button>
                    </SearchBar>
                </div>

                <ListHeader>
                    <li><button><span>Visiter</span><ArrowTip color={presetStyles.sweetWhite} height={"1.8em"} width={"1.8em"} /></button></li>
                    <li><button><span>Découvrir</span><ArrowTip color={presetStyles.sweetWhite} height={"1.8em"} width={"1.8em"} /></button></li>
                    <li><button><span>En ce moment</span><ArrowTip color={presetStyles.sweetWhite} height={"1.8em"} width={"1.8em"} /></button></li>
                </ListHeader>
                <ListMenu>
                    <li><button>
                        <img alt="" src="/images/arc-du-carrousel (1).webp" />
                        <span>Soutenir le Louvre</span>
                        <ArrowTip color={presetStyles.sweetWhite} height={"1.8em"} width={"1.8em"} />
                    </button>
                    </li>
                    <li><button>
                        <img alt="" src="/images/victor-chavet-le-louvre-de-napoleon-iii-1857-detail_0 (1).webp" />
                        <span>Se former et transmettre</span> <ArrowTip color={presetStyles.sweetWhite} height={"1.8em"} width={"1.8em"} /></button></li>
                    <li><button>
                        <img alt="" src="/images/palais-du-louvre-cour-napoleon (1).webp" />
                        <span>Recherche & conservation</span> <ArrowTip color={presetStyles.sweetWhite} height={"1.8em"} width={"1.8em"} /></button></li>
                    <li><button>
                        <img alt="" src="/images/formation-au-studio (1).webp" />
                        <span>E-boutique</span> <ArrowTip color={presetStyles.sweetWhite} height={"1.8em"} width={"1.8em"} /></button></li>

                    <li>
                        <a href="">
                            <picture>
                                <source media="(max-width: 600px)" srcSet="/images/Fresque-Louvre+-bisV2.webp" />
                                <img alt="" src="/images/Fresque-Louvre+-bisV2 (1).webp"></img>
                                <button>
                                    <span>Louvre+</span>
                                    <ArrowTip color={presetStyles.sweetWhite} height={"2em"} width={"2em"} />
                                </button>
                            </picture>
                        </a>
                    </li>
                </ListMenu>
                <ListSocialNet >
                    <ul>
                        <li><Facebook color="#fff" width="1.4em" height="1.4em" /></li>
                        <li><Pinterest color="#fff" width="1.4em" height="1.4em" /></li>
                        <li><Instagram color="#fff" width="1.4em" height="1.4em" /></li>
                        <li><Twitter color="#fff" width="1.4em" height="1.4em" /></li>
                        <li><Linkedin color="#fff" width="1.4em" height="1.4em" /></li>
                        <li><Youtube color="#fff" width="1.4em" height="1.4em" /></li>
                    </ul>
                    <LouvreLogo color="#fff" />
                </ListSocialNet>


            </NavMenu >
        </O>
    )
}
const O = styled.div`
    .active {
        transform: translateX(0%);
    }
    .nav-desactive{
        transform: translateX(-100%);
    }
`;

const NavMenu = styled.div`
    transition: all 0.3s;
    top :0;
    left: 0;
    bottom: 0;
    background-color: #1a1a1a;
    width: 48vw;
    z-index : 20;
    position: fixed;
    padding: 0 10px;
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: auto;

    //Top part
    & > div:first-of-type {
        position: sticky;
        top:0;
        z-index: 1;
        background-color: #1a1a1a;
        padding-top: 20px;
        padding-bottom: 40px;
        border-bottom: 1px solid #333;
    }
    @media screen and (max-width: 820px) {
        width: 100%;
    }
`;
const NavHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    > span:hover {
        cursor: pointer;
    }
`;
const SearchBar = styled.div`
   
    width: 100%;
    height: 60px;
    border-radius: 4px;

    display: flex;
    align-items: center;

    background-color: #fff;
    padding: 6px;
    margin-top: 20px;

    cursor: text;
    span {
        padding: 0 4px;
        text-align: center;
    }
    button {
        /* background-color: #bababa; */
        width: 34px;
        height: 34px;
        border-radius: 4px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
       :focus {
            outline-color: pink;
       }
    }
`;

const SearchField = styled.div`
    height: 100%;
    font-size: 14px;
    display: flex;
    flex: 1;
    flex-direction: column;
    

    label {
        color: #707070;
        cursor: text;
        
        span {
            position: relative;
            top: 60%;
            transition: all 0.1s;
        }
    }
    &:focus-within {
        span {
            font-size : 10px;
            top: 0%;
            transition: all ease-out 0.15s;
        }
    }
    
    input {
        width: 100%;
        border: none;
        background-color: #0000;
        z-index: 10;
        font-size: 16px;
        &:focus {
            outline: none;
        }
    }
    
`;



const Lang = styled.button`
    border: none;
    font-family: Roboto,Open Sans,Arial,Helvetica,sans-serif;
    padding: 0;
    color: #fff;
    background-color: unset;

    display: flex;
    align-items: center;

    font-size: 14px;
    font-weight: 400;

    cursor: pointer;
    span {
        margin-right: 6px;
    }

    //ArrowTip
    :last-child {
        svg {
            transform: rotate(90deg);
        }
    }
`;
const ListBlock = styled.ul`
    border-bottom: 2px solid ${presetStyles.sweetBlack};
    padding: 30px 20px;
`
const ListHeader = styled(ListBlock)`
    /* margin-top : 20px; */
    
    li {
        list-style-type: none;
        padding: 20px 0; 

        button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: unset;
            border: unset;
            cursor: pointer;
        }
        span {
            color : #fff;
            font-size: 18px;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 600;
            font-family: montserrat,Open Sans,sans-serif;
        }
    }
`;


const ListMenu = styled(ListBlock)`
    
    /* padding: 50px 20px; */
    display: grid;
    /* grid-template-columns: repeat(auto-fit, 1fr); */
    grid-gap: 12px;

    button {
        list-style-type: none;
        width: 100%;
        display: flex;
        align-items: center;
        border: unset;
        cursor: pointer;
        padding-right: 10px;

            
            img {
                padding-right: 10px;
                max-width: 70px;
                border-radius: 4px;
            }
            span {
                color : #fff;
                font-size: 14px;
                display: flex;
                flex: 1;
            }
            svg {
                transform: translateX(0px);
                transition: all 0.5s;
            }
            &:hover {
                span {
                    text-decoration: underline;
                }
                svg {
                    transform: translateX(6px);
                    transition: all 0.2s;
                }
            }
    }
    li {
        > button {
            background-color: #222;
        }

        a {
            position: relative; 
            display:flex;
            flex-direction: column;
            justify-content: flex-end;
            cursor: pointer;
            &:hover {
                svg {
                    transform: translateX(6px);
                    transition: all 0.2s;
                }
                span {
                    text-decoration-line: underline;
                }
            }
        }
        a picture img {
            width: 100%; 
        }
        a button {
            display:flex;
            align-items: center;
            justify-content: space-between;
            position: absolute;
            bottom : 0;
            left: 0;
            right: 0;
            z-index : 1;
            padding-top: 14px;
            padding-bottom: 14px;
            padding-left: 14px;
            background-color: #0000;

            &:before {
                content: "";
                position: absolute;
                z-index: -1;
                bottom:0;
                left: 0;
                right: 0;
                height: 140%;
                width: 100%;
                background: linear-gradient(to top,rgba(0,0,0,0.8),rgba(0,0,0,0.4) 60%,#0000 );
            }
        }
    }
`;

const ListSocialNet = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;

    ul {
        display: flex;
        justify-content: center;
        flex-flow: wrap;
        grid-gap: 18px;
        width: 100%;
        padding: 30px 20px;
    }
    li {
        padding: 8px;
        border-radius: 50%;
        border: solid #5c5c5c 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        cursor: pointer;
        transition: ease-out 0.3s;

        &:hover {
            border-color: #fff;
            transition: ease 0.2s;
        }
        svg {
            font-size: 20px;
        }
    }
`;
export default Nav