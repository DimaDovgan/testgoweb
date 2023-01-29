import React, { Component } from 'react';
import logo from '../../images/LogoSVG.svg';
import s from './Header.module.css'
import Container from "../container"
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//import ScrollableAnchor from 'react-scrollable-anchor'
const Header=()=>{
    const [chekedLine,setChekedLine]=useState("");
    const [scroll, setScroll] = React.useState(0);
    const handleScroll = () => {
        setScroll(window.scrollY);
      };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);


    const handleClickScroll = (to) => {
        const element = document.getElementById(to);
        setChekedLine(to);
        if (element) {


          element.scrollIntoView({ behavior: 'smooth' });
        }}
    return (
        <div className={scroll < 120 ? s.nofixid : s.fixid} >
            <Container>
            <div className={s.hederContentDiv}><img src={logo} alt="logo"  className={s.logo}/>
        <ul className={s.headerlist}>
        
            <li className={s.navigation} onClick={()=>handleClickScroll("Home")}>Home {(chekedLine==="Home")&& <span className={s.bootonLine}></span>}</li>
            <li className={s.navigation} onClick={()=>handleClickScroll("About")}>About {(chekedLine==="About")&& <span className={s.bootonLine}></span>}</li>
            <li className={s.navigation} onClick={()=>handleClickScroll("Cases")}>Cases{(chekedLine==="Cases")&& <span className={s.bootonLine}></span>}</li>
            <li className={s.navigation} onClick={()=>handleClickScroll("Blog")}>Blog {(chekedLine==="Blog")&& <span className={s.bootonLine}></span>}</li>
            <li className={s.navigation} onClick={()=>handleClickScroll("Contact")}>Contact {(chekedLine==="Contact")&& <span className={s.bootonLine}></span>}</li>


        </ul>
        </div>
        </Container>
        </div>
        
    )
        
    
}
export default Header;