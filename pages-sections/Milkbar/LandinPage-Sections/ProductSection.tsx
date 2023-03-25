/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties } from 'react'

import stylesUntyped from '../../../styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle'
import { selectedStyle } from '@lib/component-helpers/nextjs-material-kit/styleSelectors'

import {
  CT_Card,
  CT_CardBody,
  CT_GridContainer,
  CT_GridItem,
} from '@components/ui'
import { Box } from '@mui/material'
import Image from 'next/image'

const Milkbar_ProductSection: React.FC = (): React.ReactElement => {
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

  return (
    <Box sx={styles.section}>
      <CT_GridContainer styleProps={{ justifyContent: 'center' }}>
        <CT_GridItem xs={12} sm={12} md={8}>
          <CT_Card plain>
            <h2 css={TitleStyle}>Simplicity is Quality</h2>
            <h5 css={DescriptionStyle}>
              Our commitment to quality is unwavering, and we use only the
              latest software and technology to deliver exceptional results on
              every project. Whether you{"'"}re an architect, developer or real
              estate agent, we have the skills and expertise to help you
              showcase your vision and win over your clients.
            </h5>
          </CT_Card>
        </CT_GridItem>
      </CT_GridContainer>
      <CT_GridContainer>
        <CT_GridItem xs={12} sm={12} md={4}>
          <CT_Card plain>
            <CT_GridItem xs={12} sm={12} md={6} styleProps={styles.itemGrid}>
              <Image
                src="/img/milkbar/landingpage/productsection/dom_hohenbollentin_01.jpg"
                alt="..."
                width={500}
                height={500}
                css={css({
                  ...styles.imgRaised,
                  ...styles.imgRounded,
                  ...styles.imgFluid,
                })}
              />
            </CT_GridItem>
            <h4 css={CardTitleStyle}>
              Lodge House
              <br />
              <small css={css({ ...styles.smallTitle })}>Modelling</small>
            </h4>
            <CT_CardBody>
              <p css={DescriptionStyle}>
                3D modelling is crucial for architectural visualisation. We use
                software to create accurate digital representations of
                buildings, helping clients understand and appreciate the design
                before construction.
              </p>
            </CT_CardBody>
          </CT_Card>
        </CT_GridItem>
        <CT_GridItem xs={12} sm={12} md={4}>
          <CT_Card plain>
            <CT_GridItem xs={12} sm={12} md={6} styleProps={styles.itemGrid}>
              <Image
                src="/img/milkbar/landingpage/productsection/anwt.jpg"
                alt="..."
                width={500}
                height={500}
                css={css({
                  ...styles.imgRaised,
                  ...styles.imgRounded,
                  ...styles.imgFluid,
                })}
              />
            </CT_GridItem>
            <h4 css={CardTitleStyle}>
              Multi Family House
              <br />
              <small css={css({ ...styles.smallTitle })}>Visualisation</small>
            </h4>
            <CT_CardBody>
              <p css={DescriptionStyle}>
                Architectural visualisation transforms ideas into
                ultra-realistic digital representations of buildings. It enables
                clients to explore every detail and make informed decisions
                before construction begins. Our company creates stunning visuals
                that are both accurate and breathtakingly beautiful.
              </p>
            </CT_CardBody>
          </CT_Card>
        </CT_GridItem>
        <CT_GridItem xs={12} sm={12} md={4}>
          <CT_Card plain>
            <CT_GridItem xs={12} sm={12} md={6} styleProps={styles.itemGrid}>
              <Image
                src="/img/milkbar/landingpage/productsection/622.jpg"
                alt="..."
                width={500}
                height={500}
                css={css({
                  ...styles.imgRaised,
                  ...styles.imgRounded,
                  ...styles.imgFluid,
                })}
              />
            </CT_GridItem>
            <h4 css={CardTitleStyle}>
              Interior
              <br />
              <small css={css({ ...styles.smallTitle })}>Design</small>
            </h4>
            <CT_CardBody>
              <p css={DescriptionStyle}>
                Interior design is essential for architectural visualisation. 3D
                models help clients visualise every detail, from furniture to
                lighting. Our company creates beautiful and functional interior
                designs to ensure complete client satisfaction.
              </p>
            </CT_CardBody>
          </CT_Card>
        </CT_GridItem>
      </CT_GridContainer>
    </Box>
  )
}

export default Milkbar_ProductSection
