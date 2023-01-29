
import s from './Hero.module.css'
//import ScrollableAnchor from 'react-scrollable-anchor'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ModalWindow from '../modalWind/modalWind';
import { useState } from 'react';
const Hero=()=>{

        const[isShowingModal,setIsShowingModal]=useState(false);
     
      const handleClick = () =>{
        setIsShowingModal(true);
      } 
      const handleClose = () => setIsShowingModal(false);
    return (
        
           
        <div id="Home" className={s.Home} >
            <div className={s.bgrImg}>
            <div className={s.contentHero}>
            <h1 className={s.heroZagolovok}>The Sky Is Tht Limit</h1>
                <p className={s.heroText}>We Provide word class financial assistance</p> 
                <button className={s.heroButton} onClick={()=>setIsShowingModal(true)}> > Read More</button>
            </div>
            { 
        isShowingModal && <ModalWindow setIsShow={setIsShowingModal} Content={"Hero text"}/>
          } 
            </div>
            </div>
        
    )
}
export default Hero;