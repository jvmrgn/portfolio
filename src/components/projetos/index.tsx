import React from "react";
import style from'./projetos.module.scss'

import nossoLarLogo from "../../img/nossolarLogo.png"

class Projetos extends React.Component {
    render() {
        return (
            <div>

            <div className={style.container}>
                <div className={style.conteudo}>
                <h1>Conheça alguns dos meus projetos!</h1>
                <p>Aqui você encontra algum dos meus Freelances (Não todos pois não posso divulga-los)</p>

                <div>
                    <a href={"https://clinicanossolar.netlify.app"} target={"_blank"}><img src={nossoLarLogo} className={style.imagemProjetos}></img></a>
                    <p>Website desenvolvido para a clínica de idosos Nosso Lar (Clique na logo para ser redirecionado)</p>
                </div>

                </div>
            </div>

            </div>
        )
    }
}

export default Projetos;