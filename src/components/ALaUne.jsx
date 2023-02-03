import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { Src_ALaUne } from "../data/ressources"
import { ArrowTip, LaunchArrow } from '../features/icons/Icons'

import { aboreto, garamond, grey, montserrat, sweetBlack, sweetWhite } from "../components/PresetsStyles"

const ALaUne = () => {
    const carouselRef = useRef();
    const SlideButtonsRef = useRef();
    console.log(carouselRef.current)

    const [count, setCount] = useState(0);
    const [items, setItems] = useState([]);
    const [carouselPos, setCarouselPos] = useState(0);

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const prevCount = usePrevious(count)
    const prevCarPos = usePrevious(carouselPos)

    useEffect(() => {
        setItems(carouselRef.current.childNodes)
    }, [items])

    useEffect(() => {
        console.log("count", count)
        console.log("prev", prevCount)
        console.log("carouselPos -> ", carouselPos)

        if (count > prevCount) {
            handleNextClick()
        }
        else if (count < prevCount) {
            console.log("MOINS")
            handlePrevClick()
        }
        if (carouselPos < prevCarPos) {
            items.forEach((item) => {
                item.style = "transform: translateX(" + carouselPos + "%)";
            })
        }
        else if (carouselPos > prevCarPos) {
            items.forEach((item) => {
                item.style = "transform: translateX(" + carouselPos + "%)";
            })
        }
    }, [count, carouselPos])


    const handleNextClick = () => {
        setCarouselPos(carouselPos - 100)
    }
    const handlePrevClick = () => {
        setCarouselPos(carouselPos + 100)
    }


    return (
        <ALaUne_container>
            <h2>À la Une</h2>

            <Carousel ref={carouselRef}>
                {Src_ALaUne.map((item, index) => (
                    // J'ajoute index à un tableau
                    <a key={index}>
                        <img alt={item.title} src={item.image} />
                        <div>
                            <p>{item.type}</p>
                            <h2>{item.title}</h2>
                            <p>{item.date} <LaunchArrow color="#fff" width="2em" height="2em" /></p>
                        </div>
                    </a>

                ))}
            </Carousel>

            <SlideButtons ref={SlideButtonsRef}>
                <i onClick={() => count > 0 && setCount(count - 1)}><ArrowTip color="#fff" width="1.8em" height="1.8em" /></i>
                <div>
                    {Src_ALaUne.map((item, index) => (
                        <span id={index === count && "active"}></span>
                    ))}
                </div>
                <i onClick={() => count < items.length - 1 && setCount(count + 1)}><ArrowTip color="#fff" width="1.8em" height="1.8em" /></i>
            </SlideButtons>

            <div>
                <h3>Bienvenue au Louvre</h3>
                <p>Il y a toujours une bonne raison de venir au Louvre. Les <a href="">œuvres</a> du <a href="">palais</a> vous étonnent, vous invitent à rêver, à imaginer. Il est temps de <a href="">préparer votre visite</a>. Besoin d’inspiration ? <a href="">Parcours</a> et <a href="">visites guidées</a> vous font découvrir les lieux emblématiques. Et au cœur de Paris, <a href="">les jardins</a> vous accueillent.</p>
            </div>
        </ALaUne_container>
    )
}

const ALaUne_container = styled.div`
    /* display: flex;
    text-align: center; */

    > h2 {
        font-size : 52px;
        text-transform: uppercase;
        font-family: ${aboreto};
        font-weight: 200;
        padding: 10vh 10vw 15vh 10vw;
        
    }

    > div:last-child {
        padding: 10vw 10vw;
        word-spacing: 10px;
        line-height: 50px;
        > h3 {
            font-family: ${montserrat};
            text-transform: uppercase;
            font-weight: 600;
            font-size: 16px;
            letter-spacing: 1px;
        }
        a{
            color: ${sweetBlack}
        }

        > p {
            color: ${grey};
            font-size: 32px;
        }
        p, a {
            letter-spacing: 1px;
            font-family: ${garamond};  
        }
    }

`;

const Carousel = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 30px;
    width: 100%;
    overflow: hidden;
    scroll-behavior: smooth;
    padding-left : 38px;
    color: ${sweetWhite};
    a {
        display: flex;
        align-items: flex-end;
        width: 80vw;
        height: 50vh;
        position: relative;
        transform : translateX(0);
        transition: all ease-out 1s;
        overflow: hidden;
        cursor: pointer;
       
        &:after {
            content: "";
            width: 100%;
            background: linear-gradient(0deg,#000000b8,#00000099 100%);
            display: block;
            height: 100%;
            position: absolute;
            z-index: -1;
            top: 0;

            
        }
     

        img {
            position: absolute;
            z-index: -1;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: all cubic-bezier(0, 0, 0.04, 0.8) 0.7s;
        }

        div {
            display: flex;
            flex-direction: column;
            width: 100%;

            padding: 32px;
            > p:first-child {
                font-weight: 600;
                font-size : 18px;
                letter-spacing: 1px;
                text-transform: uppercase;
                
            }
            > h2 {
                font-family: ${aboreto};
                text-transform: uppercase;
                font-weight: 200;
                font-size: 32px;
            }
            > p:nth-child(3) {
                display: flex;
                justify-content: space-between;
                font-size : 14px;
                font-weight: 400;
                
            }
            svg {
                font-size : 18px;
                transform: translateX(0px);
                transition: all linear 0.2s;
            }
        }
        
        p, h2 {
            margin-top: 18px;
            color: #fff;
        }

        &:hover {
            img {
                transform: scale(1.1);
                overflow: hidden;
            }
            div svg {
                transform: translateX(10px);
            }
        }
        
    }
`;

const SlideButtons = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        > div {
            display: flex;
            justify-content: space-between;
            span {
                width: 6px;
                height: 6px;
                background-color: ${grey};
                border-radius: 50%;
                /* transform: scale(0); */
                transition: all 0.4s;
                
            }
            #active {
                background-color: ${sweetBlack};
                transform: scale(1.3)
            }
            margin: 0 6px;
            width: 38px;
        }
        

        > i {
            display: flex;
            align-items: center;
            margin: 0 6px;
            cursor: pointer;
            svg {
                padding: 6px;
                background-color: #000;
                border-radius: 50%;
            }
        }
        > i:first-child svg{
            transform : scale(-1)
        }
    `;
const PrevArrow = styled.div`


`;
const NextArrow = styled.div`

`;

export default ALaUne