/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'
import stylesUntyped from '../../../../../../styles/jss/nextjs-material-kit/pages/componentsSections/downloadStyle.js'
import { Box } from '@mui/material'

import { CT_GridContainer, CT_GridItem, CT_CustomButton } from '@components/ui'

const CT_SectionDownload: FC = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  return (
    <Box sx={styles.section}>
      <Box sx={styles.container}>
        <CT_GridContainer
          styleProps={styles.textCenter}
          justifyContent="center"
        >
          <CT_GridItem xs={12} sm={12} md={8}>
            <h2>Do you love this UI Kit?</h2>
            <h4>
              Cause if you do, it can be yours for FREE. Hit the buttons below
              to navigate to our website where you can find the kit. We also
              have the Bootstrap 4 version on plain HTML. Start a new project or
              give an old Bootstrap project a new look!
            </h4>
          </CT_GridItem>
          <CT_GridItem xs={12} sm={8} md={6}>
            <CT_CustomButton
              ct_color="primary"
              ct_size="lg"
              href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-download-section"
              target="_blank"
            >
              Free NextJS Download
            </CT_CustomButton>
            <CT_CustomButton
              ct_color="primary"
              ct_size="lg"
              href="https://www.creative-tim.com/product/material-kit-react?ref=njsmk-download-section"
              target="_blank"
            >
              Free React Downoad
            </CT_CustomButton>
          </CT_GridItem>
        </CT_GridContainer>
        <br />
        <br />
        <CT_GridContainer
          styleProps={styles.textCenter}
          justifyContent="center"
        >
          <CT_GridItem xs={12} sm={12} md={8}>
            <h2>Want more?</h2>
            <h4>
              We&apos;ve just launched{' '}
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                NextJS Material Kit PRO
              </a>
              . It has a huge number of components, sections and example pages.
              Start Your Development With A Badass Material-UI and NexJS Kit
              inspired by Material Design.
            </h4>
          </CT_GridItem>
          <CT_GridItem xs={12} sm={8} md={10}>
            <CT_CustomButton
              ct_color="rose"
              ct_size="lg"
              href="https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmk-download-section"
              target="_blank"
            >
              NextJS Material Kit PRO
            </CT_CustomButton>
            <CT_CustomButton
              ct_color="rose"
              ct_size="lg"
              href="https://www.creative-tim.com/product/material-kit-pro-react?ref=njsmk-download-section"
              target="_blank"
            >
              Material Kit PRO React
            </CT_CustomButton>
          </CT_GridItem>
        </CT_GridContainer>
        <Box sx={{ ...styles.textCenter, ...styles.sharingArea }}>
          <CT_GridContainer justifyContent="center">
            <h3>Thank you for supporting us!</h3>
          </CT_GridContainer>
          <CT_CustomButton ct_color="twitter">
            <i css={css({ ...styles.socials })} className={'fab fa-twitter'} />
            Tweet
          </CT_CustomButton>
          <CT_CustomButton ct_color="facebook">
            <i
              css={css({ ...styles.socials })}
              className={'fab fa-facebook-square'}
            />{' '}
            Share
          </CT_CustomButton>
          <CT_CustomButton ct_color="google">
            <i
              css={css({ ...styles.socials })}
              className={'fab fa-google-plus-g'}
            />
            Share
          </CT_CustomButton>
          <CT_CustomButton ct_color="github">
            <i css={css({ ...styles.socials })} className={'fab fa-github'} />{' '}
            Star
          </CT_CustomButton>
        </Box>
      </Box>
    </Box>
  )
}

export default CT_SectionDownload
