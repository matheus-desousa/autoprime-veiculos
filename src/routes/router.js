import React from "react";
import { Routes, Route } from "react-router-dom";
import { cars } from "../utils/cars";
import Vehicles from "../pages/vehicles";
import Home from "../pages/home";

export default function Rotas() {
    return (
        <>
            <Routes>
                <Route element={<Home />} path="/" />
                {cars.map(item => {

                    return (
                        <>
                            <Route  element={<Vehicles marca ={item.marca} descricao ={item.descricao} cambio ={item.cambio} modelo={item.modelo} ano={item.ano} combustivel={item.combustivel} preco={item.preco} foto={item.foto} quilometragem={item.quilometragem}/>} path={item.path} />
                        </>
                    )

                })}
                
            </Routes>
        </>
    )
}