import styled from "styled-components";

export const MainModificada = styled.main`
display:grid;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
padding: 16px;

`

export const DivModificada = styled.div`
width: 350px;
height: 365px;
margin:20px auto;
color:black;
border: 1px solid #ccc;
border-radius:10px;
overflow:hidden;
a {
    display: flex;
    text-decoration: none;
    border: none;
    outline: none;
  }
`

export const ImgModificada = styled.img`

width: 400px;
height: 250px;
`

export const BtnModificado = styled.button`
width:150px;
background-color:rgb(10, 27, 45);
color:white;
border-radius: 7px;
border: none;
font-size: 18pt;
cursor:pointer;
margin-right:15px;
align-items:center;
`

export const DivContainer = styled.div`
display:flex;
flex-direction: row;
justify-content:space-between;
`
export const H1Modificado = styled.h1`
font-family: 'Plus Jakarta Sans', sans-serif;
font-weight: 700;
font-size:20pt;
margin:0px 0px 0px 15px ;
`
export const H3Modificado = styled.h3`
font-family: Helvetica, Arial, sans-serif;
font-size:18pt;
margin:5px 0px 0px 15px ;
font-family: 'Inter', sans-serif;
  font-weight: 400; /* Regular */
`
export const PModificado = styled.p`
margin:5px 0px 0px 15px ;
font-family: 'Inter', sans-serif;
  font-weight: 400; /* Regular */
`