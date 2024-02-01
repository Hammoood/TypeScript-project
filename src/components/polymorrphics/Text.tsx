import React from 'react'
type textOwnType<E extends React.ElementType>={
    color?:'primary' | 'secondary'
    size?: 'md' | 'sm' | 'lg'
    children: React.ReactNode
    as?: E
}
type textType<E extends React.ElementType> = textOwnType<E> & Omit<React.ComponentProps<E>, keyof textOwnType<E>>
export const Text = <E extends React.ElementType = 'div'>({children,color,size,as}:textType<E>) => {
  const Component = as || 'div'
  return (
    <Component className={`class-with-${color}-${size}`}>{children}</Component>
  )
}
