import blogImg from "../../images/BlogImg.png"
import Container from "../container/Container";
import s from "./Blog.module.css"
import { useState } from 'react';
import ModalWindow from "../modalWind/modalWind";
const Blog=()=>{

    const[isShowingModal,setIsShowingModal]=useState(false);
    return (
        <div id="Blog" className={s.BlogDiv}>
        <div className={s.blogImg} ></div>
        <div className={s.blogContainer}>
        <Container>
            <p className={s.higthTextBlog}>April 16 2020</p>
            <h2 className={s.blogTitle}>Blog Post One</h2>
            <p className={s.blogContecst}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
        <button className={s.blogButton} onClick={()=>setIsShowingModal(true)}>Read Our Blog</button>
        </Container>
        </div>
        { 
        isShowingModal && <ModalWindow setIsShow={setIsShowingModal} Content={"Blog Text"}/>
          } 
        </div>
        
    )
}
export default Blog;