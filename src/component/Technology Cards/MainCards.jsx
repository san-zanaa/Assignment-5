import { useState, useEffect } from 'react'
import Texts from './Texts'
import Cards from './Cards';

const MainCards = () => {
    const [technologies, setTechnologies] = useState([]);
    useEffect(() =>{
        fetch("/public/Data.json")
        .then((res)=> res.json())
        .then((data)=> setTechnologies(data))
        .catch((error)=> console.error("Enter loading technologies:", error));
    }, []);
  return (
    <div className='w-[95%] mt-10 py-8 px-8'>
        <Texts />
        
        <div>
            {technologies.map((technology) => (
                <Cards key={technology.id}
                {...technology}
                />
            ))}
        </div>
    </div>
  )
}

export default MainCards