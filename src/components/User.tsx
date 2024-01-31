//optional type && basic types

type UserData ={
name: string
number?: number
isLogin: boolean
}

export const User = (props : UserData) => {
    const {number = 0} = props
    return(
        <div>
            <h2>{props.isLogin ? `welcome ${props.name} ! 
            you can see our ${number} services` : 'welcome guest'}</h2>
        </div>
    )
}