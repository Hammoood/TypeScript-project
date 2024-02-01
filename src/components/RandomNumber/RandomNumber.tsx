//restricting props
type nuberValue={
    value:number
}
type positiveNumber= nuberValue & {
    isPositive: boolean
    isNegative?:boolean
    isZero?: boolean
}
type negativeNumber= nuberValue & {
    isNegative: boolean
    isPositive?: boolean
    isZero?: boolean
}
type zeroNumber= nuberValue & {
    isZero: boolean
    isPositive?: boolean
    isNegative?:boolean
}
type RandomNumberProps= positiveNumber | negativeNumber | zeroNumber
export const RandomNumber = ({
    value,isNegative,isPositive,isZero
}: RandomNumberProps) => {
    return(
        <div>
            {value} {isNegative && 'negative'}
            {isPositive && 'positive'}
            {isZero && 'zero'}
        </div>
    )
}