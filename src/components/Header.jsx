import React from 'react'
import styled from 'styled-components'
import { UseStateContext } from '../contexts/ContextProvider'

import { MenuSearch, LouvreLogo, Ticket, Cart, ArrowTip } from '../features/icons/Icons'


const Header = (props) => {
    const { handleNavMenu } = UseStateContext()
    return (
        <HeaderBar>
            <FirstRow>
                <div>
                    <Menu>
                        <i onClick={() => handleNavMenu(true)}>
                            <MenuSearch color="#fff" width="1em" height="1em" />
                        </i>
                        <span>Menu</span>
                    </Menu>
                    <Lang>
                        <span>Français</span>
                        <ArrowTip color="#fff" width="1em" height="1em" />

                    </Lang>

                </div>
                <div>
                    <LouvreLogo color="#fff" width="1em" height="1em" />
                </div>
                <div>
                    <Eboutique>
                        <Cart color="#fff" width="1em" height="1em" />
                        <span>E-Boutique</span>
                    </Eboutique>
                    <Billetterie>
                        <Ticket color="#fff" width="1em" height="1em" />
                        <span>Billeterie</span>
                    </Billetterie>
                </div>
            </FirstRow>
            <SecondRow>
                <a>Visiter</a>
                <a>Découvrir</a>
                <a>En ce moment</a>

            </SecondRow>
        </HeaderBar>
    )
}

const HeaderBar = styled.div`
    /* height: 120px; */
    width: 100%;
    background-color: #000;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 20px 20px 0 20px;
    /* transition: transform 0.4s */

`;

const FirstRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #232323;
    
    div{
        display: flex;
        :nth-child(2) {
            margin-left: 16px;
        }
        @media screen and (max-width: 820px) {
            :nth-child(2) {//LOGO
                margin-left: 10px;
                flex: 1;
            }
        }
    }
    @media screen and (max-width: 820px) {
        justify-content: unset;
    }  
`;

const HeaderBtnLeft = styled.button`
    font-family: Roboto,Open Sans,Arial,Helvetica,sans-serif;
    padding: 0;
    color: #fff;
    background-color: unset;

    display: flex;
    align-items: center;

    font-size: 14px;
    font-weight: 400;
    border: none;
    cursor: pointer;

    @media screen and (max-width: 820px) {
        min-width: 0;
        //lang : none
        :nth-child(2){
            display: none;
        }
    }
`;

const Menu = styled(HeaderBtnLeft)`
    span {
        margin-left: 6px;
        margin-right: 30px;
        @media screen and (max-width: 820px) {
        //'Menu' : none
            display: none;
        }
    }
`
const Lang = styled(HeaderBtnLeft)`
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
const HeaderBtnRight = styled.button`
    padding: 10px 16px;
    color: #fff;

    margin-left: 10px;
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
    @media screen and (max-width: 820px) {
        //e-boutique : none
        :first-child {
             display: none;
        }
    }
`

const Eboutique = styled(HeaderBtnRight)`
    background-color:  #000;
    border: 2px solid #333;
    transition: 0.4s;

    :hover {
        border-color: #f0f0f0;
        span {
            text-decoration-line: underline;
        }
    }
`;

const Billetterie = styled(HeaderBtnRight)`
    border: none;
    background-color: #008573;
    /* background-color: #0a4f51; */
    transition: 0.4s;

    :hover {
        background-color: #0a4f51;
        span {
            text-decoration-line: underline;
        }
    }
`;

const SecondRow = styled.div`
    display: flex;
    justify-content: center;
    padding: 16px 0;
    text-transform: uppercase;
    color: #fff;        
    font-family: Montserrat,Verdana,sans-serif;
    font-size :16px;
    letter-spacing: 1px;
    font-weight: 500;

    a {
        text-decoration: none;
        position: relative;
        margin-left: 30px;
        display:flex;
        justify-content: center;
        cursor: pointer;

        :first-child {
            margin-left :0;
        }

        :before {
            content: '';
            height: 2px;
            width: 50px;
            border-radius: 2px;
            background-color: #fff;
            position: absolute;
            bottom: -4px;
            transform: scaleX(0);
            transition: all 0.3s;
            transform-origin: center;
        }
        @media screen and (max-width: 820px) {
            font-size :14px;
    }
    }
    
`;

export default Header