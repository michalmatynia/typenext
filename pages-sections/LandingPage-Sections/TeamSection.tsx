/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties } from 'react'

import stylesUntyped from '../../styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle'
import { selectedStyle } from '@lib/component-helpers/nextjs-material-kit/styleSelectors'

import {
  CT_Card,
  CT_CardBody,
  CT_CardFooter,
  CT_CustomButton,
  CT_GridContainer,
  CT_GridItem,
} from '@components/ui'
import { Box } from '@mui/material'
import Image from 'next/image'

const CT_TeamSection: React.FC = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const TitleStyle = css({
    ...selectedStyle('title', styles),
  })

  const DescriptionStyle = css({
    ...selectedStyle('description', styles),
  })
  const CardTitleStyle = css({
    ...selectedStyle('cardTitle', styles),
  })
  const SmallTitleStyle = css({
    ...selectedStyle('smallTitle', styles),
  })
  const SocialsStyle = css({
    ...selectedStyle('socials', styles),
  })

  const imageClasses = css({
    ...selectedStyle('imgRaised', styles),
    ...selectedStyle('imgRoundedCircle', styles),
    ...selectedStyle('imgFluid', styles),
  })

  return (
    <Box sx={{ ...styles.section }}>
      <h2 css={TitleStyle}>Here is our team</h2>
      <Box>
        <CT_GridContainer>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_Card plain>
              <CT_GridItem xs={12} sm={12} md={6} styleProps={styles.itemGrid}>
                <Image
                  src="/img/faces/avatar.jpg"
                  alt="..."
                  width={500}
                  height={500}
                  css={imageClasses}
                />
              </CT_GridItem>
              <h4 css={CardTitleStyle}>
                Gigi Hadid
                <br />
                <small css={SmallTitleStyle}>Model</small>
              </h4>
              <CT_CardBody>
                <p css={DescriptionStyle}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CT_CardBody>
              <CT_CardFooter styleProps={styles.justifyCenter}>
                <CT_CustomButton
                  justIcon
                  ct_color="transparent"
                  styleProps={styles.margin5}
                >
                  <i css={SocialsStyle} className={'fab fa-twitter'} />
                </CT_CustomButton>
                <CT_CustomButton
                  justIcon
                  ct_color="transparent"
                  styleProps={styles.margin5}
                >
                  <i css={SocialsStyle} className={'fab fa-instagram'} />
                </CT_CustomButton>
                <CT_CustomButton
                  justIcon
                  ct_color="transparent"
                  styleProps={styles.margin5}
                >
                  <i css={SocialsStyle} className={'fab fa-facebook'} />
                </CT_CustomButton>
              </CT_CardFooter>
            </CT_Card>
          </CT_GridItem>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_Card plain>
              <CT_GridItem xs={12} sm={12} md={6} styleProps={styles.itemGrid}>
                <Image
                  src="/img/faces/christian.jpg"
                  alt="..."
                  width={500}
                  height={500}
                  css={imageClasses}
                />
              </CT_GridItem>
              <h4 css={CardTitleStyle}>
                Christian Louboutin
                <br />
                <small css={SmallTitleStyle}>Designer</small>
              </h4>
              <CT_CardBody>
                <p css={DescriptionStyle}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CT_CardBody>
              <CT_CardFooter styleProps={styles.justifyCenter}>
                <CT_CustomButton
                  justIcon
                  ct_color="transparent"
                  styleProps={styles.margin5}
                >
                  <i css={SocialsStyle} className={'fab fa-twitter'} />
                </CT_CustomButton>
                <CT_CustomButton
                  justIcon
                  ct_color="transparent"
                  styleProps={styles.margin5}
                >
                  <i css={SocialsStyle} className={'fab fa-linkedin'} />
                </CT_CustomButton>
              </CT_CardFooter>
            </CT_Card>
          </CT_GridItem>
          <CT_GridItem xs={12} sm={12} md={4}>
            <CT_Card plain>
              <CT_GridItem xs={12} sm={12} md={6} styleProps={styles.itemGrid}>
                <Image
                  src="/img/faces/kendall.jpg"
                  alt="..."
                  width={500}
                  height={500}
                  css={imageClasses}
                />
              </CT_GridItem>
              <h4 css={CardTitleStyle}>
                Kendall Jenner
                <br />
                <small css={SmallTitleStyle}>Model</small>
              </h4>
              <CT_CardBody>
                <p css={DescriptionStyle}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CT_CardBody>
              <CT_CardFooter styleProps={styles.justifyCenter}>
                <CT_CustomButton
                  justIcon
                  ct_color="transparent"
                  styleProps={styles.margin5}
                >
                  <i css={SocialsStyle} className={'fab fa-twitter'} />
                </CT_CustomButton>
                <CT_CustomButton
                  justIcon
                  ct_color="transparent"
                  styleProps={styles.margin5}
                >
                  <i css={SocialsStyle} className={'fab fa-instagram'} />
                </CT_CustomButton>
                <CT_CustomButton
                  justIcon
                  ct_color="transparent"
                  styleProps={styles.margin5}
                >
                  <i css={SocialsStyle} className={'fab fa-facebook'} />
                </CT_CustomButton>
              </CT_CardFooter>
            </CT_Card>
          </CT_GridItem>
        </CT_GridContainer>
      </Box>
    </Box>
  )
}

export default CT_TeamSection
