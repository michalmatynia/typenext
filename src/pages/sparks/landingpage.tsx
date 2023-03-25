/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC, ReactNode } from 'react'
import {
  CT_GridContainer,
  CT_GridItem,
  CT_AppBar,
  CT_Parallax,
  CT_Footer,
} from '@components/ui'
import stylesUntyped from '../../../styles/jss/nextjs-material-kit/pages/landingPage.js'
import ProductSection from '../../../pages-sections/LandingPage-Sections/ProductSection'
import TeamSection from '../../../pages-sections/LandingPage-Sections/TeamSection'
import WorkSection from '../../../pages-sections/LandingPage-Sections/WorkSection'
import { Box } from '@mui/material'

// const dashboardRoutes = []

export default function LandingPage(props: FC): ReactNode {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const h1Style = css({ ...styles.title })

  const { ...rest } = props
  return (
    <>
      <CT_AppBar
        ct_color="transparent"
        brand="Sparks Of Sindri"
        // rightLinks={<Sparks_AppBarLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          ct_color: 'white',
        }}
        {...rest}
      />

      <CT_Parallax filter responsive image="/img/sparks/stall.png">
        <Box sx={{ ...styles.container }}>
          <CT_GridContainer>
            <CT_GridItem xs={12} sm={12} md={6}>
              <h1 css={h1Style}>Your Story Starts With Us.</h1>
              <h4>
                Step into a world of adventure and excitement with our authentic
                wooden toys and costumes. Products perfect for Renaissance
                faires and historical events, including wooden swords, axes,
                shields, and spears. We also offer costumes for children
                inspired by the medieval period. Visit our historical tent on
                the market and experience an authentic and immersive shopping
                experience.
              </h4>
              <br />
            </CT_GridItem>
          </CT_GridContainer>
        </Box>
      </CT_Parallax>
      <Box sx={{ ...styles.main, ...styles.mainRaised }}>
        <Box sx={{ ...styles.container }}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </Box>
      </Box>
      <CT_Footer />
    </>
  )
}
