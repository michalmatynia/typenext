import React, { CSSProperties, FC } from 'react'
import stylesUntyped from '../../../../../../styles/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js'
import { Box } from '@mui/material'

import { CT_GridContainer, CT_GridItem } from '@components/ui'

const CT_SectionCarousel: FC = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  return (
    <Box sx={styles.section}>
      <Box sx={styles.container}>
        <CT_GridContainer justifyContent="center">
          <CT_GridItem xs={12} sm={12} md={8} styleProps={styles.marginAuto}>
            <h2>Completed with examples</h2>
            <h4>
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you{"'"}re good to
              go. More importantly, looking at them will give you a picture of
              what you can build with this powerful kit.
            </h4>
          </CT_GridItem>
        </CT_GridContainer>
      </Box>
    </Box>
  )
}

export default CT_SectionCarousel
