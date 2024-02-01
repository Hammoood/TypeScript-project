import React from 'react'
import { User1 } from '../User1'

export const CustomComponent = (props: React.ComponentProps<typeof User1>) => {
  return (
    <div>{props.name}</div>
  )
}
