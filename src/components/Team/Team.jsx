import Worker1 from "../../images/Worker1.png"
import Worker2 from "../../images/Worker2.png"
import Worker3 from "../../images/Worker3.png"
import LastWorker from "../../images/LastWorker.png"
import Container from "../container/Container"
import s from "./Team.module.css"

const Team=()=>{
    const workers=[
        {img:Worker1,name:"John Doe",position:"President"},
        {img:Worker2,name:"Jane Doe",position:"Vice President"},
        {img:Worker3,name:"Steve Smith",position:"Marketing Head"}
    ]

    return (
        
        <Container >
            <div className={s.headerPathTeam}>
                <p className={s.higthText}>Who we are</p>
                <h2 className={s.teamTitle}>Our Professional Team</h2>
                <p className={s.teamContext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            </div>
            <div className={s.workersList}>{
                workers.map(({img,name,position}, index)=><div className={s.workerDiv} key={index}>
                <img src={img} className={s.teamImg}/>
                <p className={s.workerName}>{name}</p>
                <p className={s.workerPosition}>{position}</p>
                </div>)
            }

            </div>
            </Container>
    )
}
export default Team;