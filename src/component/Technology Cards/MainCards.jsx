import { useState, useEffect } from 'react'
import { toast } from "react-toastify";
import Texts from './Texts'
import Cards from './Cards'
import SideBar from './SideBar'

const MainCards = () => {
    const [technologies, setTechnologies] = useState([]);
    const [stack, setStack] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/Data.json")
            .then((res) => res.json())
            .then((data) => {
                setTechnologies(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error loading technologies:", error);
                setLoading(false);
                toast.error("Failed to load technologies");
            });
    }, []);
    const Add = (technology) => {

        if (stack.some((item) => item.id === technology.id)) {
            toast.warning(`${technology.name} is already in your stack`)
            return;
        }
        setStack((prev) => [...prev, technology])
        toast.success(`${technology.name} added to stack`)
    }
    const handleRemove = (id) => {

        const removedTechnology = stack.find(
            (item) => item.id === id)

        setStack((prev) =>
            prev.filter((item) => item.id !== id))
        toast.info(`${removedTechnology.name} removed from stack`)
    }
    const handleRemoveAll = () => {
        if (stack.length === 0) {
            return;
        }
        setStack([]);
        toast.info("All technologies removed from stack");
    }
    if (loading) {
        return (
            <div className="flex min-h-[300px] items-center justify-center">
                <p className="text-sm text-slate-500">
                    Loading technologies...</p>
            </div>
        );
    }
    return (
        <div className="mt-10 w-[95%] mx-auto px-8 py-8">
            <Texts />
            <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-4">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
                    {technologies.map((technology) => (
                        <Cards
                            key={technology.id}
                            {...technology}
                            onAdd={Add}
                            isSelected={stack.some(
                                (item) => item.id === technology.id)}/>
                    ))}
                </div>
                <div className="lg:col-span-1">
                    <SideBar
                        stack={stack}
                        onRemove={handleRemove}
                        onRemoveAll={handleRemoveAll}/>
                </div>
            </div>
        </div>
    )
}

export default MainCards