/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties } from 'react'

import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import ChatIcon from '@mui/icons-material/Chat'

import stylesUntyped from '../../styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js'

import { CT_GridContainer, CT_GridItem, CT_InfoArea } from '@components/ui'
import { selectedStyle } from '@lib/component-helpers/nextjs-material-kit/styleSelectors'
import { Box } from '@mui/material'

const CT_ProductSection: React.FC = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const TitleStyle = css({
    ...selectedStyle('title', styles),
  })

  const DescriptionStyle = css({
    ...selectedStyle('description', styles),
  })
  return (
    <Box sx={styles.section}>
      <CT_GridContainer styleProps={{ justifyContent: 'center' }}>
        <CT_GridItem xs={12} sm={12} md={8}>
          <h2 css={TitleStyle}>Let{"'"}s talk product</h2>
          <h5 css={DescriptionStyle}>
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
              icon={ChatIcon}
              iconColor="info"
              vertical
            />
          </CT_GridItem>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUserIcon}
              iconColor="success"
              vertical
            />
          </CT_GridItem>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={FingerprintIcon}
              iconColor="danger"
              vertical
            />
          </CT_GridItem>
        </CT_GridContainer>
      </Box>
    </Box>
  )
}

export default CT_ProductSection
