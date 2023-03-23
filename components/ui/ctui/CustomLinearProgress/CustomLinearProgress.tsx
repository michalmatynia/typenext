/** @jsxRuntime classic */

/** @jsx jsx */

import { CSSObject, css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'
import { LinearProgress } from '@mui/material'

import stylesUntyped from '../../../../styles/jss/nextjs-material-kit/components/customLinearProgressStyle.js'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'

interface CustomInputProps {
  color?:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'info'
    | 'rose'
    | 'gray'
  variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query'
  value?: number
  style?: CSSProperties
}
type Props = CustomInputProps & BasicComponentProps

const CT_CustomLinearProgress: FC<Props> = (props): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const { color = 'gray', style, ...rest } = props

  const colorStyle = styles[color + 'Background']
  const barStyle = styles[color]

  const combinedStyles = css`
    ${style as CSSObject}
    ${styles.root as CSSObject}
    ${colorStyle as CSSObject}
    ${styles.bar as CSSObject}
    ${barStyle as CSSObject}
  `
  return (
    <LinearProgress
      //   sx={{
      //     // Styles for the root state
      //     '&.MuiLinearProgress-root': { ...styles.root, ...colorStyle },
      //     '&.MuiLinearProgress-bar': { ...styles.bar, ...barStyle },
      //   }}
      {...rest}
      css={combinedStyles}
    />
  )
}

export default CT_CustomLinearProgress
