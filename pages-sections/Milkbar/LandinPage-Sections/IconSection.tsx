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
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </CT_GridItem>
      </CT_GridContainer>

      <Box>
        <CT_GridContainer>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_InfoArea
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={MapsHomeWorkTwoToneIcon}
              iconColor="info"
              vertical
            />
          </CT_GridItem>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={PsychologyTwoToneIcon}
              iconColor="info"
              vertical
            />
          </CT_GridItem>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
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
