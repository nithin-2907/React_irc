import { useEffect, useState } from "react";

export default function Slide(arr)
{
    let [slide,setSlide] = useState(0);
    useEffect(()=>{
    const interval  = setInterval(() => {
            setSlide((prev) => (prev === arr.length-1 ? 0 : prev+1))
        },5000)  
        return () => clearInterval(interval); 
    },[arr.length])
    return slide;
}