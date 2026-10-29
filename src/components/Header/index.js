import React from "react";
import logo from "../../assets/images/logos/headerlogo.jpeg"
import { HeaderModificada } from "./StyleHeader";
import { ImgModificada } from "./StyleHeader";
import { LiModificada } from "./StyleHeader";
import { Link } from "react-router-dom";
import { BtnHeader } from "./StyleHeader";


export default function Header() {
    return (
        <>
            <HeaderModificada>
                <Link to="/">
                    <ImgModificada src={logo}></ImgModificada>
                </Link>
                <nav>
                    <LiModificada>Comprar</LiModificada>
                    <LiModificada>Vender</LiModificada>
                    <LiModificada>Financiamento</LiModificada>
                    <LiModificada>Sobre nós</LiModificada>
                    <LiModificada>Contato</LiModificada>
                </nav>
                <BtnHeader>
                    Entrar em contato
                </BtnHeader>

            </HeaderModificada>
        </>
    )
}
