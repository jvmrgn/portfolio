import React from "react";
import style from'./footer.module.scss'

class Footer extends React.Component {
    render() {
        return (
        <footer className={style.footer}>
            <div>
                <div className={style.informacoes}>
                  <p className={style.autor}>Feito por João Vinicius Magrini</p>
                  <p>Você gostou do que viu? Entre em contato comigo via <a href={"https://wa.me/5519989424646"} target={"_blank"}>WhatsApp</a> ou <a href={"https://www.linkedin.com/in/jo%C3%A3o-vinicius-magrini-b55997235/"} target={"_blank"}>Linkedin</a>! (Clique em cima para ser redirecionado)</p>
                </div>
            </div>      
        </footer>
        )
    }
}

export default Footer;