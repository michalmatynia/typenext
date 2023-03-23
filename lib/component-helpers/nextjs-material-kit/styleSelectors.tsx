import { CSSProperties } from 'react'

export const selectedStyle = (
  each: string,
  styles: { [key: string]: CSSProperties }
) => {
  return styles[each]
}
