//use state future value
import { useState } from "react"
type authUser={
    name: string
    email:string
}
export const User =() => {
    const [User,setIsUser] = useState<authUser>({} as authUser)
    const handleLogIn = () => {
        setIsUser({
            name: 'mohammad',
            email: 'mohammad@example.com'
        })
    }
    return(
        <div>
            <button onClick={handleLogIn}>login</button>
            <div>username is {User?.name}  </div>
            <div>useremail is {User?.email}  </div>
        </div>
    )
}