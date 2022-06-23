import styled from 'styled-components'

export const MainDiv = styled.div`
    text-align: center;
`


export const Border = styled.p`
    border: 2px solid black;
    border-radius: 20px;
    width: 95%;
    height: auto;
    padding: 10px;
    margin: auto;
    margin-top: 10px;
    background: ${props => props.active ? "pink" : "none"} 
    `
export const ButtonsDiv = styled.div`
    button {
        width: 49%;
        height: auto;
        padding: 10px;
        margin-left: 5px;
        cursor: pointer; 
        justify-content: center;
        text-align: center;
        font-size: 20px;
    }
   
`
