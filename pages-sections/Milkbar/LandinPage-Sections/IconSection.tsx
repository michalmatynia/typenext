/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties } from 'react'

import MapsHomeWorkTwoToneIcon from '@mui/icons-material/MapsHomeWorkTwoTone'
import PsychologyTwoToneIcon from '@mui/icons-material/PsychologyTwoTone'
import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone'

import stylesUntyped from '../../../styles/project/milkbar/pages/landingPageSections/teamStyle.js'

import { CT_GridContainer, CT_GridItem, CT_InfoArea } from '@components/ui'
import { Box } from '@mui/material'

const Milkbar_IconSection: React.FC = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  return (
    <Box sx={styles.section}>
      <CT_GridContainer styleProps={{ justifyContent: 'center' }}>
        <CT_GridItem xs={12} sm={12} md={8}>
          <h2 css={css({ ...styles.title })}>Let{"'"}s talk product</h2>
          <h5 css={css({ ...styles.description })}>
            In the world of architectural visualisation, the product is
            everything. It is the end result that clients will judge and the
            quality of the product will be a reflection of the company{`'`}s
            reputation. A high-quality product demonstrates the company{`'`}s
            ability to accurately and realistically depict architectural designs
            in a digital format, helping clients better understand and
            appreciate their designs before construction begins.
          </h5>
        </CT_GridItem>
      </CT_GridContainer>

      <Box>
        <CT_GridContainer>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_InfoArea
              title="Plan Analysis"
              description="It is a crucial aspect of architectural visualisation. It involves studying architectural plans to ensure accuracy and feasibility, helping designers and clients identify potential issues before construction begins."
              icon={MapsHomeWorkTwoToneIcon}
              iconColor="info"
              vertical
            />
          </CT_GridItem>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_InfoArea
              title="Ideas"
              description="They are the foundation of any great architectural visualisation company. They drive innovation, creativity, and problem-solving, helping the company stand out in a highly competitive industry."
              icon={PsychologyTwoToneIcon}
              iconColor="info"
              vertical
            />
          </CT_GridItem>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_InfoArea
              title="Next Level"
              description="At an architectural visualisation company, launching the business to the next level means staying ahead of the competition and continuously improving the quality of the product, while also maintaining a focus on customer satisfaction."
              icon={RocketLaunchTwoToneIcon}
              iconColor="info"
              vertical
            />
          </CT_GridItem>
        </CT_GridContainer>
      </Box>
    </Box>
  )
}

export default Milkbar_IconSection
