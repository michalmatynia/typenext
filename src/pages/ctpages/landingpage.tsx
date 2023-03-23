/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC, ReactNode } from 'react'
import {
  CT_GridContainer,
  CT_GridItem,
  CT_CustomButton,
  CT_AppBar,
  CT_Parallax,
  CT_Footer,
  CT_AppBarLinks,
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
        brand="NextJS Material Kit"
        rightLinks={<CT_AppBarLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          ct_color: 'white',
        }}
        {...rest}
      />

      <CT_Parallax filter responsive image="/img/landing-bg.jpg">
        <Box sx={{ ...styles.container }}>
          <CT_GridContainer>
            <CT_GridItem xs={12} sm={12} md={6}>
              <h1 css={h1Style}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <CT_CustomButton
                ct_color="danger"
                ct_size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </CT_CustomButton>
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
