import { useState } from "react"
import type { Crew } from '../types'
import RadioBox from "../components/RadioBox"

type Props = {
    crew: Crew[]
}

const Crew = ({crew}:Props) => {
    const [current,setCurrent] = useState<number>(0)

    return ( 
        <>
            <div className="col-1">
                <img src={crew[current].images.webp}/>
                <div>
                    <RadioBox type={0} data={crew} current={current} setCurrent={setCurrent}/>
                </div>
            </div>
            <div className="col-2">
                <h2>{crew[current].name}</h2>
                <h3>{crew[current].role}</h3>
                <p className="description">{crew[current].bio}</p>
            </div>
        </>
     );
}
 
export default Crew;