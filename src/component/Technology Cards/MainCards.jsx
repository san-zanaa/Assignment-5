import { useState, useEffect } from 'react'
import Texts from './Texts'
import Cards from './Cards'
import SideBar from './SideBar';

const MainCards = () => {
    const [technologies, setTechnologies] = useState([]);
    const [stack, setStack] = useState([]);
    useEffect(() =>{
        fetch("/Data.json")
        .then((res)=> res.json())
        .then((data)=> setTechnologies(data))
        .catch((error)=> console.error("Enter loading technologies:", error));
    }, []);

    const Add = (technology) => {
        setStack((prev) => {
            if(prev.some((item) => item.id === technology.id)) {
                return prev
            }
            return [...prev, technology]
        })
    }

    const handleRemove = (id) => {
        setStack((prev) => 
        prev.filter((item) => item.id !== id))
    }
    const handleRemoveAll = () => {
        setStack([])
    }
  return (
    <div className='w-[95%] mt-10 mx-auto py-8 px-8 mb-20'>
        <Texts />
        
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3'>
                {technologies.map((technology) => (
                    <Cards key={technology.id}
                    {...technology}
                    onAdd={Add}
                    isSelected={stack.some((item)=> item.id === technology.id)}
                    />
                    ))}
            </div>
            <div className='lg:col-span-1'>
                <SideBar stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll} />
            </div>
         </div>
    </div>
  )
}

export default MainCards