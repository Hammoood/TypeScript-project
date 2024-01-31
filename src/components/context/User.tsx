import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        if(userContext){
            userContext.setUser({
                name: 'mohammad',
                email: 'mohammad@example.com'
            })
        }
    }
    const handlelogout = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }
    return(
        <div>
          <button onClick={handleLogin}>login</button>
          <button onClick={handlelogout}>logout</button>
          <div>user name is {userContext?.user?.name} </div>
          <div>user email is {userContext?.user?.email}</div>
        </div>
    )
}