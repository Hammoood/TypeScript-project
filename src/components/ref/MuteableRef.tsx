import { useEffect, useRef, useState } from "react"


export const MuteableRef = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef<number | undefined>(undefined)
    const stop = () => {
        window.clearInterval(intervalRef.current)
    }
    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
           setTimer(()=>timer+1) 
        })
        return () => { stop() }
    },[])
    return (
        <div>
        TimeR {timer}
        <button onClick={() => stop()}>stop timer</button>
        </div>
    )
}