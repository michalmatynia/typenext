import { CSSProperties, ReactNode } from 'react'

export interface BasicComponentProps {
  styleProps?: { [key: string]: CSSProperties } | CSSProperties

  className?: string
  children?: ReactNode
}
