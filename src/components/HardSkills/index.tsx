import React from "react";
import style from'./hardskills.module.scss'

import cssLogo from "../../img/cssLogo.png"

class HardSkills extends React.Component {
    render() {
        return (
            <section className={style.containerconhecimentos}>
            <div className={style.textos}>
                <h1 className={style.titulos}>HARD SKILLS</h1>
                <p>Confira um pouco das minhas habilidades técnicas.</p>
            </div>

            <div className={style.logoframeworks}>

                <div className={style.skillsitems}>
                <img className={style.logohardskills} src="https://cdn.discordapp.com/attachments/678254019554050112/1046795953757237358/unknown.png"></img>
                <p className={style.nomehabilidades}>ReactJS</p>
            </div>

            <div className={style.skillsitems}>
                <img className={style.logohardskills} src="https://cdn.discordapp.com/attachments/678254019554050112/1046796041237827605/unknown.png"></img>
                <p className={style.nomehabilidades}>JavaScript</p>
            </div>

            <div className={style.skillsitems}>
                <img className={style.logohardskills} src="https://cdn.discordapp.com/attachments/678254019554050112/1046796206543753266/unknown.png"></img>
                <p className={style.nomehabilidades}>ㅤCSS</p>
            </div>

            <div className={style.skillsitems}>
                <img className={style.logohardskills} src="https://cdn.discordapp.com/attachments/678254019554050112/1046797102258327623/unknown.png"></img>
                <p className={style.nomehabilidades}>ㅤHTML</p>
            </div>

            </div>
        </section>
        )
    }
}

export default HardSkills;