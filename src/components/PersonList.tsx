//array type
import {Name} from './Person.types'
type personsProps = {
    names : Name[]
}

export const PersonList = (props: personsProps) =>  {
    return (
        <div>
            {props.names.map((name) => {
                return(
                    <h2 key={name.first}>{name.first} {name.second}</h2>
                )
            })}
        </div>
    )
}