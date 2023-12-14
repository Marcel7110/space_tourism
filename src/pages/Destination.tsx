import type { Destinations } from "../types";
import RadioBox from "../components/RadioBox";
import { useState } from 'react'

type Props = {
    destinations: Destinations[]
}

const Destination = ({destinations}:Props) => {
    const [current,setCurrent] = useState(0)

    return (
        <>
            <div className="col-1">
                <h2>{destinations[current].name}</h2>
                <img src={destinations[current].images.webp}/>
            </div>
            <div className="col-2">
                <div>
                    <div>
                        <RadioBox type={2} data={destinations} current={current} setCurrent={setCurrent}/>
                    </div>
                    <p className="description">{destinations[current].description}</p>
                    <div className="box">
                        <p>distance: <span>{destinations[current].distance}</span></p>
                        <p>est. time: <span>{destinations[current].travel}</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Destination;