type ListProps<T> = {
    items: T[],
    onClicked: (value: T) => void
}

export const List = <T extends {}> ({items, onClicked}: ListProps<T>) => {
    return (
        <div>
            <h2>list of items</h2>
            {items.map((item,index)=>{
                return(
                    <div key={index} onClick={()=>{onClicked(item)}} >
                        <>{item}</>
                    </div>
                )
            })}
        </div>
    )
}