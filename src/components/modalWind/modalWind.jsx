import s from "./modalWind.module.css"

const ModalWindow=({setIsShow,Content})=>{
    return (
        <div className={s.modal}  onClick={()=>setIsShow(false)}>
          <div className={s.modalDialog}>
            <p>{Content}</p>
          </div>
        </div>
    
    )
}
export default ModalWindow;