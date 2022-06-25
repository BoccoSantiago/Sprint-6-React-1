import styled from 'styled-components'


 export const Background = styled.div`

    background-image: url("${(props) => props.image}");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh

`

export const Paragraph = styled.p`
    border: 2px solid black;
    border-radius: 20px;
    width: 85vw;
    height: auto;
    padding: 10px;
    margin: auto;
    margin-top: 15px;
    background: ${props => props.active ? "pink" : "rgba(255, 255, 255, 0.7)"} 
    `
export const ButtonsDiv = styled.div`
    button {
        width: 45%;
        padding: 10px;
        margin: auto;
        margin-top: 30px;
        margin-right: 10px;
        cursor: pointer; 
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }
   
`

