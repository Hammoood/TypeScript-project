//template literals

type Hposition = 'left' | 'center' | 'right'
type Vposition = 'top' | 'center' | 'bottom'
type positionType={
    position: `${Hposition}-${Vposition}` | 'center'
}
export const TemplateLiter = ({position}: positionType) => {
    return(
        <div>position {position}</div>
    )
}