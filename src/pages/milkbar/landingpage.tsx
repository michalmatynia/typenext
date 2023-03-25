/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC, ReactNode } from 'react'
import {
  CT_GridContainer,
  CT_GridItem,
  CT_AppBar,
  CT_Parallax,
  Milkbar_Footer,
  Milkbar_AppBarLinks,
} from '@components/ui'
import stylesUntyped from '../../../styles/jss/nextjs-material-kit/pages/landingPage.js'
import Milkbar_ProductSection from '../../../pages-sections/Milkbar/LandinPage-Sections/ProductSection'
import Milkbar_SectionCarousel from '../../../pages-sections/Milkbar/LandinPage-Sections/SectionCarousel'
import Milkbar_IconCarousel from '../../../pages-sections//Milkbar/LandinPage-Sections/IconSection'
import Milkbar_ContactSection from '../../../pages-sections/Milkbar/LandinPage-Sections/ContactSection'

import { Box } from '@mui/material'

// const dashboardRoutes = []

export default function LandingPage(props: FC): ReactNode {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const { ...rest } = props
  return (
    <>
      <CT_AppBar
        ct_color="transparent"
        brand="Milkbar Designers."
        rightLinks={<Milkbar_AppBarLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          ct_color: 'white',
        }}
        {...rest}
      />

      <CT_Parallax filter responsive image="/img/milkbar/title/grid_0.png">
        <Box sx={{ ...styles.container }}>
          <CT_GridContainer>
            <CT_GridItem xs={12} sm={12} md={6}>
              <h1 css={css({ ...styles.title })}>Your Story Starts With Us.</h1>
              <h4>
                Welcome to MilkbarDesigners, your go-to solution for stunning
                architectural visualisations. Our team of skilled designers and
                3D artists specialize in bringing your architectural designs to
                life with photorealistic renderings, animations and virtual
                tours.
              </h4>
              <br />
            </CT_GridItem>
          </CT_GridContainer>
        </Box>
      </CT_Parallax>
      <Box sx={{ ...styles.main, ...styles.mainRaised }}>
        <Box sx={styles.container}>
          <Milkbar_ProductSection />
          <Milkbar_SectionCarousel />
        </Box>
      </Box>
      <Milkbar_IconCarousel />
      <Milkbar_ContactSection />

      <Milkbar_Footer />
    </>
  )
}
