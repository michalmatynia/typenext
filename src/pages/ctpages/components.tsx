/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import {
  CT_AppBar,
  CT_AppBarLinks,
  CT_GridContainer,
  CT_GridItem,
  CT_Parallax,
  CT_Footer,
  CT_SectionBasics,
  CT_CustomButton,
  CT_SectionNavbars,
  CT_SectionTabs,
  CT_SectionPills,
  CT_SectionNotifications,
  CT_SectionTypography,
  CT_SectionJavascript,
  CT_SectionCarousel,
  CT_SectionCompletedExamples,
  CT_SectionLogin,
  CT_SectionExamples,
  CT_SectionDownload,
} from '@components/ui'
import React, { CSSProperties, FC, ReactNode } from 'react'
import stylesUntyped from '../../../styles/jss/nextjs-material-kit/pages/components.js'
import { Box } from '@mui/material'
import Link from 'next/link'

export default function Components(props: FC): ReactNode {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const h1Style = css({ ...styles.title })
  const h1SubtitleStyle = css({ ...styles.subtitle })
  const aLinkStyle = css({ ...styles.link })

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
          ct_color: 'transparent',
        }}
        {...rest}
      />
      <CT_Parallax image="/img/nextjs_header.jpg">
        <Box sx={{ ...styles.container }}>
          <CT_GridContainer>
            <CT_GridItem>
              <Box sx={{ ...styles.brand }}>
                <h1 css={h1Style}>NextJS Material Kit.</h1>
                <h3 css={h1SubtitleStyle}>
                  A Badass Material Kit based on Material-UI and NextJS.
                </h3>
              </Box>
            </CT_GridItem>
          </CT_GridContainer>
        </Box>
      </CT_Parallax>
      <Box sx={{ ...styles.main, ...styles.mainRaised }}>
        <CT_SectionBasics />
        <CT_SectionNavbars />
        <CT_SectionTabs />
        <CT_SectionPills />
        <CT_SectionNotifications />
        <CT_SectionTypography />
        <CT_SectionJavascript />
        <CT_SectionCarousel />
        <CT_SectionCompletedExamples />
        <CT_SectionLogin />
        <CT_GridItem md={12} styleProps={styles.textCenter}>
          <Link legacyBehavior href="/login" as="/login">
            <a css={aLinkStyle}>
              <CT_CustomButton ct_color="primary" ct_size="large" simple>
                View Login Page
              </CT_CustomButton>
            </a>
          </Link>
        </CT_GridItem>
        <CT_SectionExamples />
        <CT_SectionDownload />
      </Box>
      <CT_Footer />
    </>
  )
}
