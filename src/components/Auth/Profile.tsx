export type nameType={
    name: string
}
export const Profile = ({name}: nameType) => {
    return(
        <div>private profile component . name is {name}</div>
    )
}