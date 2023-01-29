import InIcon from "../../images/In.svg"
import FasebookIcon from "../../images/Fasebook.svg"
import uTubeIcon from "../../images/YT.svg"
import Container from "../container"
import s from "./Footer.module.css"
import Twiter from "../../images/TviterTest.svg"
import sprite from "../../images/SwgSprite.svg"



const Footer=()=>{

    return (
        <div className={s.footer}>
        <Container>
            <ul className={s.socialContact}>
                <li ><a href="https://uk-ua.facebook.com/" >
                <svg className={s.socialIcon} width="35" height="35">
  <use href={sprite+"#Fasebook"} ></use>
</svg></a></li>
                <li ><a href="https://twitter.com/?lang=uk">
                <svg className={s.socialIcon} width="35" height="35">
  <use href={sprite+"#Twit"} ></use>
</svg></a></li>
                <li ><a href="https://www.youtube.com/">
                <svg className={s.socialIcon} width="40" height="35">
  <use href={sprite+"#YT"} ></use>
</svg>
                </a></li>

                <li ><a href="https://www.linkedin.com/">
                <svg className={s.socialIcon} width="31" height="35">
  <use href={sprite+"#In"} ></use>
</svg>
                </a></li>
            </ul>
            <p className={s.footerText}>Copyright © 2021 - FinanceLedger</p>

        </Container>

        </div>
    )
    
}
export default Footer;