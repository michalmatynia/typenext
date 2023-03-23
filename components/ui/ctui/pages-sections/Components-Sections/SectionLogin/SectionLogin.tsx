/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'
import stylesUntyped from '../../../../../../styles/jss/nextjs-material-kit/pages/componentsSections/loginStyle.js'
import { Box, InputAdornment, Icon } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'
import EmailIcon from '@mui/icons-material/Email'

import {
  CT_GridContainer,
  CT_GridItem,
  CT_Card,
  CT_CardHeader,
  CT_CardBody,
  CT_CardFooter,
  CT_CustomButton,
  CT_CustomInput,
} from '@components/ui'

const CT_SectionLogin: FC = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  return (
    <Box sx={styles.section}>
      <Box sx={styles.container}>
        <CT_GridContainer justifyContent="center">
          <CT_GridItem xs={12} sm={6} md={4}>
            <CT_Card>
              <form css={css({ ...styles.form })}>
                <CT_CardHeader color="primary" styleProps={styles.cardHeader}>
                  <h4>Login</h4>
                  <Box sx={styles.socialLine}>
                    <CT_CustomButton
                      justIcon
                      href="#pablo"
                      target="_blank"
                      ct_color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        css={css({ ...styles.socialIcons })}
                        className={'fab fa-twitter'}
                      />
                    </CT_CustomButton>
                    <CT_CustomButton
                      justIcon
                      href="#pablo"
                      target="_blank"
                      ct_color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        css={css({ ...styles.socialIcons })}
                        className={'fab fa-facebook'}
                      />
                    </CT_CustomButton>
                    <CT_CustomButton
                      justIcon
                      href="#pablo"
                      target="_blank"
                      ct_color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        css={css({ ...styles.socialIcons })}
                        className={'fab fa-google-plus-g'}
                      />
                    </CT_CustomButton>
                  </Box>
                </CT_CardHeader>
                <p css={css({ ...styles.divider })}>Or Be Classical</p>
                <CT_CardBody>
                  <CT_CustomInput
                    labelText="First Name..."
                    id="first"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: 'text',
                      endAdornment: (
                        <InputAdornment position="end">
                          <PeopleIcon sx={styles.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CT_CustomInput
                    labelText="Email..."
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
                    labelText="Password"
                    id="pass"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: 'password',
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon sx={styles.inputIconsColor}>lock_outline</Icon>
                        </InputAdornment>
                      ),
                      autoComplete: 'off',
                    }}
                  />
                </CT_CardBody>
                <CT_CardFooter styleProps={styles.cardFooter}>
                  <CT_CustomButton simple ct_color="primary" ct_size="lg">
                    Get started
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

export default CT_SectionLogin
