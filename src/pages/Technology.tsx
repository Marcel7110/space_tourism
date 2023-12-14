import RadioBox from "../components/RadioBox";
import type { Technology } from "../types";
import { useState } from 'react'

type Props = {
    technology : Technology[]
}

const Technology = ({technology}:Props) => {
    const [current,setCurrent] = useState<number>(0)

    return ( 
    <>
        <div className="col-1">
            <div>
                <RadioBox type={1} data={technology} current={current} setCurrent={setCurrent}/>
            </div>
            <div>
                <h1>{technology[current].name}</h1>
                <p>{technology[current].description}</p>
            </div>
        </div>
        <div className="col-2">
            <img src={technology[current].images.portrait} alt=""/>
        </div>
    </>
    );
}
 
export default Technology;