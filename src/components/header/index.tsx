import React from "react";
import style from'./header.module.scss'

import logoGithub from "../../img/logoGithub.png"
import logoLinkedin from "../../img/linkedinlogo.avif"
import logoWhatsApp from "../../img/WhatsApp.svg.webp"

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className={style.container}>
                <nav className={style.navHeader}>
                    <h1 className={style.nome}>João Vinicius Magrini</h1>
                    <div className={style.imagens}>
                    <ul className={style.listaHeader}>
                    <li><a href={"https://wa.me/5519989424646"} target={"_blank"}><img src={logoWhatsApp} className={style.whatsapplogo} alt={"Logo do Whatsapp que redireciona para o meu Whatsapp."}></img></a></li>
                        <li><a href={"https://github.com/jvmrgn"} target={"_blank"}><img src={logoGithub} className={style.githublogo} alt={"Logo do GitHub que redireciona para a minha página do github."}></img></a></li>
                        <li><a href={"https://www.linkedin.com/in/jo%C3%A3o-vinicius-magrini-b55997235/"} target={"_blank"}><img src={logoLinkedin} className={style.linkedinlogo} alt={"Logo do Linkedin que redireciona para a minha página no linkedin."}></img></a></li>
                     </ul>
                     </div>
                    </nav>
                    </div>
            </header>
        )
    }
}

export default Header;