/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, useState } from 'react'

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
import { Box, InputAdornment } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'
import EmailIcon from '@mui/icons-material/Email'

const Milkbar_ContactSection: React.FC = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const [messageInput, setMessageInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  const sendEmail = async (): Promise<void> => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailInput,
          message: messageInput,
        }),
      })

      if (response.status === 200) {
        console.log('Email sent successfully')
        setEmailInput('')
        setMessageInput('')
        setEmailSent(true)
        setTimeout(() => {
          setEmailSent(false)
        }, 3000)
      } else {
        console.error('Error sending email')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const processEmail = (e: React.MouseEvent<Element>): void => {
    e.preventDefault()

    sendEmail() as unknown as void
  }

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
                      value: emailInput,
                      type: 'email',
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailIcon sx={styles.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                  <CT_CustomInput
                    labelText="Message"
                    id="message"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: messageInput,
                      multiline: true,
                      rows: 5,
                      type: 'text',
                      endAdornment: (
                        <InputAdornment position="end">
                          <PeopleIcon sx={styles.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => setMessageInput(e.target.value)}
                  />
                </CT_CardBody>
                <CT_CardFooter styleProps={styles.cardFooter}>
                  <CT_CustomButton
                    simple
                    ct_color="primary"
                    ct_size="lg"
                    onClick={(e) => processEmail(e)}
                  >
                    Send Message
                  </CT_CustomButton>
                  {emailSent ? 'Message sent' : null}
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
