/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties } from 'react'

import stylesUntyped from '../../../styles/project/milkbar/pages/landingPageSections/workStyle'

import {
  CT_CustomButton,
  CT_CustomInput,
  CT_GridContainer,
  CT_GridItem,
  CT_Card,
  CT_CardHeader,
  CT_CardBody,
  CT_CardFooter,
} from '@components/ui'
import { Box, InputAdornment, Icon } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'
import EmailIcon from '@mui/icons-material/Email'

const Milkbar_ContactSection: React.FC = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  return (
    <Box sx={styles.section}>
      <Box sx={styles.container}>
        <CT_GridContainer styleProps={{ justifyContent: 'center' }}>
          <CT_GridItem xs={12} sm={6} md={4}>
            <CT_Card>
              <form css={css({ ...styles.form })}>
                <CT_CardHeader color="primary" styleProps={styles.cardHeader}>
                  <h4>Work with us</h4>
                </CT_CardHeader>
                <CT_CardBody>
                  <CT_CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: 'email',
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailIcon sx={styles.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CT_CustomInput
                    labelText="Message"
                    id="message"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      type: 'text',
                      endAdornment: (
                        <InputAdornment position="end">
                          <PeopleIcon sx={styles.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </CT_CardBody>
                <CT_CardFooter styleProps={styles.cardFooter}>
                  <CT_CustomButton simple ct_color="primary" ct_size="lg">
                    Send Messagesd
                  </CT_CustomButton>
                </CT_CardFooter>
              </form>
            </CT_Card>
          </CT_GridItem>
        </CT_GridContainer>
      </Box>
    </Box>
  )
}

export default Milkbar_ContactSection
