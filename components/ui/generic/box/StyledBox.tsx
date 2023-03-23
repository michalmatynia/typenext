/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { Box, styled } from '@mui/material'
import { CSSProperties, FC } from 'react'

interface Props {
  children?: React.ReactNode
  grname?: string
  styles?: { [key: string]: CSSProperties }
}

const GenericBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'grname' && prop !== 'styles',
})<Props>(({ styles, grname }) => {
  const monoStyle = grname
    ? css({
        ...styles[grname],
      })
    : null

  return monoStyle
})

const GR_Box: FC<Props> = (props): React.ReactElement<Props> => {
  const { children, grname, styles, ...rest } = props
  return (
    <GenericBox grname={grname} styles={styles} {...rest}>
      {children}
    </GenericBox>
  )
}
export default GR_Box
