import { flexbox } from '@mui/system';
import React from 'react'
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';

import { Rsc_ALaUne } from "../data/ressources";
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from "@mui/icons-material/ChevronRight"

// @mui/styles pas encore installé.

const ALaUne = () => {

    return (
        <ALaUne_Container>
            <h2>À la Une</h2>
            <Carousel
                // NextIcon={ChevronRightIcon}
                // PrevIcon={ChevronLeftIcon}

                navButtonsAlwaysVisible={true}
                navButtonsWrapperProps={{
                    style: {
                        bottom: 0,
                        top: "unset",
                        height: "auto"
                    }
                }}
            >
                {
                    Rsc_ALaUne.map((item, index) => (
                        <div key={index}>

                            <h3>{item.title}</h3>
                            <img alt="" src={item.image} />
                            <p>{item.type}</p>
                        </div>


                    ))
                }
            </Carousel>
            <div>
                <h3>Bienvenue au Louvre</h3>
                <p>Il y a toujours une bonne raison de venir au Louvre. Les <a href="">œuvres</a> du <a href="">palais</a> vous étonnent, vous invitent à rêver, à imaginer. Il est temps de <a href="">préparer votre visite</a>. Besoin d’inspiration ? <a href="">Parcours</a> et <a href="">visites guidées</a> vous font découvrir les lieux emblématiques. Et au cœur de Paris, <a href="">les jardins</a> vous accueillent.</p>
            </div>

        </ALaUne_Container>
    )
}

const ALaUne_Container = styled.div`
    img {
        height: 60vh;
    }

`;
export default ALaUne