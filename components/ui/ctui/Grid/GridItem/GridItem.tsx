import React, { FC } from 'react'

import Grid, { GridProps } from '@mui/material/Grid'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps'

const styles = {
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexBasis: 'auto',
  },
}
type StyledGridProps = GridProps & BasicComponentProps

const CT_GridItem: FC<StyledGridProps> = (props): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, className, styleProps, ...rest } = props

  return (
    <Grid item {...rest} sx={{ ...styles.grid, ...styleProps }}>
      {children}
    </Grid>
  )
}
export default CT_GridItem
