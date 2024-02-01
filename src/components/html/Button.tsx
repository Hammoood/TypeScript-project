//wrapping html elemnts
type variantsType={
    variants: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export const CustomerButton = ({variants, children, ...rest}: variantsType) => {
    return (
        <div>
            <button className={`class-with-${variants}`} {...rest}>
                {children}
            </button>
        </div>
    )
}