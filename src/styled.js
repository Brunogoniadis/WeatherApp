import styled, { css } from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid palevioletred;
    border-radius: 5px;
    width: 185px;
    height: 145px;
    align-items: center;
`
export const TextHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: -300px;
    line-height: 0.01em;
    margin-top: -15px;

`
export const TempsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 185px;


`
export const InfoTempContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 50px;
    line-height: 0.85em;
    border-radius: 5px;
    align-items: center;
    border: 2px solid palevioletred;
` 