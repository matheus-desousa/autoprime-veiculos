import React from "react";
import { Link } from "react-router-dom";
import { cars } from "../../utils/cars";
import { MainModificada } from "./styleMain";
import { DivModificada } from "./styleMain";
import { ImgModificada } from "./styleMain";
import {BtnModificado} from "./styleMain"
import { DivContainer } from "./styleMain";
import { H1Modificado } from "./styleMain";
import { H3Modificado } from "./styleMain";
import { PModificado } from "./styleMain";

export default function Main(){
return(
    <>
    <MainModificada>
    {cars.map(item =>{

        return(
            <>
            <DivModificada>
            <ImgModificada src={item.foto}></ImgModificada>
            <H1Modificado>{item.marca} {item.modelo}</H1Modificado>
            <PModificado>{item.ano} •{item.quilometragem} km</PModificado>
            <DivContainer>
            <H3Modificado>R${item.preco} </H3Modificado>
            <Link to={item.path}>
            <BtnModificado >Ver Detalhes</BtnModificado> 
            </Link>
            </DivContainer>
            </DivModificada>
            </>
        )
        
    })}</MainModificada>
    </>
)
}