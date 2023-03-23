import React, { FC } from 'react'

import Grid, { GridProps } from '@mui/material/Grid'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps'

const styles = {
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto',
  },
}
type Props = GridProps & BasicComponentProps

const CT_GridContainer: FC<Props> = (props): React.ReactElement => {
  const { children, styleProps, ...rest } = props
  return (
    <Grid container {...rest} sx={{ ...styles.grid, ...styleProps }}>
      {children}
    </Grid>
  )
}

export default CT_GridContainer
