import styled from "styled-components";
import whathsapp from "../../assets/images/logos/logoapp.webp";


export const ImgConfig = styled.img`
width:50%;
height:500px;
border-radius:15px;
object-fit: cover;
`
export const MainConfig = styled.main`
display:flex;
width:90%;
margin: 50px auto;
`
export const TituloConfig = styled.h1`
margin:0px;
`
export const DivConfig = styled.div`
width:50%;
height:500px;
padding-left:15px;
`

export const DivTabConfig = styled.div`
display:grid;
grid-template-columns: 130px 1fr;
  grid-template-rows: repeat(4, auto); 
  border-bottom: 2px solid gray;

  p{
  margin:3px 0px;
  }

`
export const PConfig = styled.p`
margin:0px;

`
export const H2Config = styled.h2`
color:#1466D4;
font-size: 25pt;
margin: 10px 0px;
`
export const BtnConfig = styled.button`
display: flex;
align-items: center;
justify-content: center;
width:60%;
background-color:#1EC35D;
font-size:20pt;
color:white;
border:none;
border-radius:10px;
padding:10px 0px;
margin:0px auto;
text-align:center;
cursor:pointer;
background-image:url(${whathsapp});
background-repeat: no-repeat;
background-position:55px;
background-size:35px;

`

