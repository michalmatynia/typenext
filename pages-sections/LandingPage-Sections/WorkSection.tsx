/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties } from 'react'

import stylesUntyped from '../../styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle'
import { selectedStyle } from '@lib/component-helpers/nextjs-material-kit/styleSelectors'

import {
  CT_CustomButton,
  CT_CustomInput,
  CT_GridContainer,
  CT_GridItem,
} from '@components/ui'
import { Box } from '@mui/material'

const CT_WorkSection: React.FC = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const TitleStyle = css({
    ...selectedStyle('title', styles),
  })

  const DescriptionStyle = css({
    ...selectedStyle('description', styles),
  })

  return (
    <Box sx={{ ...styles.section }}>
      <CT_GridContainer styleProps={{ justifyContent: 'center' }}>
        <CT_GridItem xs={12} sm={12} md={8}>
          <h2 css={TitleStyle}>Work with us</h2>
          <h4 css={DescriptionStyle}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
          <form>
            <CT_GridContainer>
              <CT_GridItem xs={12} sm={12} md={6}>
                <CT_CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </CT_GridItem>
              <CT_GridItem xs={12} sm={12} md={6}>
                <CT_CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </CT_GridItem>
              <CT_CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                }}
                styleProps={styles.textArea}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />

              <CT_GridItem
                xs={12}
                sm={12}
                md={4}
                styleProps={styles.textCenter}
              >
                <CT_CustomButton ct_color="primary">
                  Send Message
                </CT_CustomButton>
              </CT_GridItem>
            </CT_GridContainer>
          </form>
        </CT_GridItem>
      </CT_GridContainer>
    </Box>
  )
}

export default CT_WorkSection
