//use state

import { useState } from "react"

export const LoggedIn =() => {
    const [isLogdedIn,setIsLoggedIn] = useState(false)
    const handleLogIn = () => {
        setIsLoggedIn(true)
    }
    const handleLogOut = () => {
        setIsLoggedIn(false)
    }
    return(
        <div>
            <button onClick={handleLogIn}>login</button>
            <button onClick={handleLogOut}>logout</button>
            <div>user is {isLogdedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}