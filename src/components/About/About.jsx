import Container from "../container"
import s from './About.module.css'
import ConandImg from "../../images/ComandaImg.png"
import ModalWindow from '../modalWind/modalWind';
import { useState } from 'react';
const About =()=>{
    const[isShowingModal,setIsShowingModal]=useState(false);
    return (
        <div id="About" className={s.About}>
        <div className={s.comandaImg} ></div>
        
        <div  className={s.AboutConainer}>
        <Container>
        <p className={s.higthTxt}>What you are looking for</p>
        <h2 className={s.hText}>We provide bespoke solutions</h2>
        <p className={s.aboutText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
        <button className={s.aboutButton} onClick={()=>setIsShowingModal(true)} >Read More</button>

        </Container>
        </div>
        { 
        isShowingModal && <ModalWindow setIsShow={setIsShowingModal} Content={"About Text"}/>
          } 
        </div>
        
    )
}
export default About;