import ContactForm from "./forma";
import Contaiiner from "../../components/container"
import s from "./Contacts.module.css"
const Contacts=()=>{

    return (
        <div id="Contact" className={s.formaContact}>
        <div className={s.ContactImg}></div>
            <Contaiiner>
            <ContactForm />
            </Contaiiner>
            

        </div>
    )
    
}
export default Contacts;