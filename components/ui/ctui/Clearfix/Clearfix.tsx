import { Box } from '@mui/material'
import React, { FC } from 'react'

const styles = {
  clearfix: {
    '&:after,&:before': {
      display: 'table',
      content: '" "',
    },
    '&:after': {
      clear: 'both',
    },
  },
}

const CT_Clearfix: FC = (): React.ReactElement => {
  return <Box sx={styles.clearfix} />
}

export default CT_Clearfix
