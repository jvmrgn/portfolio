import React from "react";
import style from'./primeiras.module.scss'

import imagem from "../../img/codigoArrumado.png"

class PrimeirasPalavras extends React.Component {
    render() {
        return (
            <div>
            <div className={style.container}>
                <div className={style.conteudo}>
                    <h1>Olá! Seja Bem-vindo(a) ao meu portfólio pessoal.</h1>
<<<<<<< HEAD
                    <p>Meu nome é João Vinicius Magrini, tenho 17 anos, sou um entusiasta da programação e atualmente estou cursando Análise e Desenvolvimento de sistemas na Infnet. Este website foi desenvolvido utilizando React e TypeScript, tecnologias que me encantam e me desafiam constantemente.</p>
=======
                    <p>Meu nome é João Vinicius Magrini, tenho 17 anos e sou um entusiasta da programação. Este website foi desenvolvido utilizando React e TypeScript, tecnologias que me encantam e me desafiam constantemente.</p>
>>>>>>> 8ea1802fd440e3611d19ddc55585b219278ee3e0
                    <p>Meu interesse pela programação surgiu desde a infância, quando comecei a jogar Minecraft e descobri que era necessário conhecer a linguagem Java para criar modificações no jogo. Desde então, comecei a me dedicar cada vez mais a aprender sobre programação.</p>
                    <p>Meu primeiro grande desafio foi criar um bot para o Discord utilizando NodeJS. Essa experiência me ensinou muito e me mostrou o quanto a programação pode ser fascinante e recompensadora.</p>
                </div>
                <div className={style.imagemContainer}>
                <img src={imagem} className={style.imagem}></img>
                </div>
            </div>
            </div>
        )
    }
}

export default PrimeirasPalavras;

