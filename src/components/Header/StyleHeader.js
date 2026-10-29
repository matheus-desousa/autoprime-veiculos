import styled from "styled-components";


export const HeaderModificada = styled.header`
height: 111px;
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
background-color:#0F1C2D;

a {
    display: flex;
    text-decoration: none;
    border: none;
    outline: none;
  }
`

export const ImgModificada = styled.img`
width: 200px

`
export const LiModificada = styled.li`
display:inline;
color: white;
margin:10px;
cursor: pointer;
padding-bottom: 4px;
border-bottom: 2px solid transparent;
    transition: border-color 0.3s ease;

&:hover {
      border-color: #0070f3;

`
export const BtnHeader = styled.button`
border:none;
background-color:#1466D4;
border-radius: 7px;
padding:10px;
color: white;
font-size:15pt;
cursor:pointer;
`
