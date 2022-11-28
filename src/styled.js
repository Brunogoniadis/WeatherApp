import styled, { css } from "styled-components"
import { WiMoonAltFull } from "react-icons/wi"
import calor from "../src/assets/calor.jpg"
import normal from "../src/assets/normal.jpg"
import frio from "../src/assets/frio.jpg"
import cover from "../src/assets/cover.jpg"


export const MainContainer = styled.div`
    display: flex;
    background-image: url("../src/assets/cover.jpg");
    background-color: #F3F3F3;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 5px;
    width: 240px;
    height: 145px;
    align-items: center;
    box-shadow: 0 0 2px rgba(0,0,0.8);
    

    *img{
        object-fit: fill;
    }

`

export const TextHeader = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: flex-start;
    padding: -300px;
    line-height: 0.01em;
    margin-top: -15px;
    svg {

  }

`
export const TempsContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    justify-content: space-around;
    width: 100%;
`
export const InfoTempContainer = styled.div`
    display: flex;
    background-color: 
        ${props => 
        props.variant <= 19 ? `rgba(138, 138, 255, 0.4);`:
        props.variant <= 26 ? `rgba(0, 138, 138, 0.4)`: 
                         25 ? `rgba(255, 138, 139, 0.4)`   : `#f000`
        };

    box-shadow: 0px 2px  2px rgba(0, 0, 0, 0.8);;
    flex-direction: column;
    justify-content:center;
    height: 50px;
    width: 50px;
    padding:2px;
    line-height: 0.85em;
    border-radius: 5px;
    align-items: center;

    h4{
        margin-top: 2%;
        margin-bottom:0.0.1rem
    }
` 