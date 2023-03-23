/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'
import stylesUntyped from '../../../../../../styles/jss/nextjs-material-kit/pages/componentsSections/exampleStyle.js'
import { Box } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

import { CT_GridContainer, CT_GridItem, CT_CustomButton } from '@components/ui'

const CT_SectionExamples: FC = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  return (
    <Box sx={styles.section}>
      <Box sx={styles.container}>
        <CT_GridContainer justifyContent="center">
          <CT_GridItem xs={12} sm={12} md={6}>
            <Link legacyBehavior href="/landing">
              <a css={css({ ...styles.link })}>
                <Image
                  src="/img/landing.jpg"
                  alt="..."
                  css={css({
                    ...styles.imgRaised,
                    ...styles.imgRounded,
                    ...styles.imgFluid,
                  })}
                  width={500}
                  height={500}
                />
                <CT_CustomButton ct_color="primary" ct_size="lg" simple>
                  View landing page
                </CT_CustomButton>
              </a>
            </Link>
          </CT_GridItem>
          <CT_GridItem xs={12} sm={12} md={6}>
            <Link legacyBehavior href="/profile">
              <a css={css({ ...styles.link })}>
                <Image
                  src="/img/profile.jpg"
                  alt="..."
                  css={css({
                    ...styles.imgRaised,
                    ...styles.imgRounded,
                    ...styles.imgFluid,
                  })}
                  width={500}
                  height={500}
                />
                <CT_CustomButton ct_color="primary" ct_size="lg" simple>
                  View profile page
                </CT_CustomButton>
              </a>
            </Link>
          </CT_GridItem>
        </CT_GridContainer>
      </Box>
    </Box>
  )
}

export default CT_SectionExamples
