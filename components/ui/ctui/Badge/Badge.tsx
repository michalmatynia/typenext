/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC, ReactNode } from 'react'

import stylesUntyped from '../../../../styles/jss/nextjs-material-kit/components/badgeStyle.js'
interface Props {
  children?: ReactNode
  color?:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'info'
    | 'rose'
    | 'gray'
}

const CT_Badge: FC<Props> = (props): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }
  const { color = 'gray', children } = props

  const styleBadge = css({
    ...styles.badge,
    ...styles[color],
  })
  return (
    <span role="badge" css={styleBadge}>
      {children}
    </span>
  )
}
export default CT_Badge
