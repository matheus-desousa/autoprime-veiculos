import React from "react";
import Header from "../../components/Header";
import { MainConfig } from "./style";
import { ImgConfig } from "./style";
import { DivConfig } from "./style";
import { DivTabConfig } from "./style";
import { PConfig } from "./style";
import { H2Config } from "./style";
import { TituloConfig } from "./style";
import { BtnConfig } from "./style";



export default function Vehicles(props) {
    return (
        <>
            <Header />
            <MainConfig>
                <ImgConfig src={props.foto}></ImgConfig>
                <DivConfig>
                    <TituloConfig>{props.marca} {props.modelo}</TituloConfig>
                    <PConfig>{props.ano}</PConfig>
                    <H2Config>R$ {props.preco}</H2Config>
                    <DivTabConfig>
                        <p>Ano</p><p>{props.ano}</p><p>Quilometragem</p><p>{props.quilometragem} km</p>
                        <p>Câmbio</p><p>{props.cambio}</p><p>Combustível</p>
                        <p>{props.combustivel} </p>
                    </DivTabConfig>
                    <p>
                        {props.descricao}
                    </p>
                    <BtnConfig>Falar no WhatsApp</BtnConfig>
                </DivConfig>
                
            </MainConfig>

        </>
    )
}