type Props = {
    data: {
        name: string
    }[]
    current: number
    setCurrent: React.Dispatch<React.SetStateAction<number>>
    type?: 0 | 1 | 2 
}

const RadioBox = ({data,current,setCurrent,type}:Props) => {
    return ( 
        <div className='radio'>
            {data.map((item,index) => (
                <div key={index}>
                    <input type="radio" name="rad_box" id={`rad_${index}`} onChange={() => setCurrent(index)} checked={index === current}/>
                    <label htmlFor={`rad_${index}`}>{type === 1 ? index+1 : type === 2 ? item.name : ''}</label>
                </div>
            ))}
        </div>
     );
}
 
export default RadioBox;