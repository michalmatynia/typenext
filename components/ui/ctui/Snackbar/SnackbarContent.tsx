import React, { CSSProperties, FC, ReactNode, useState } from 'react'

import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps'
// @material-ui/icons
import { Close } from '@mui/icons-material'

import { Icon, IconButton, SnackbarContent, SvgIconProps } from '@mui/material'

import stylesUntyped from '../../../../styles/jss/nextjs-material-kit/components/snackbarContentStyle.js'

interface CustomProps {
  message: ReactNode
  color?: 'info' | 'success' | 'warning' | 'danger' | 'primary'
  close?: boolean
  icon?: React.ElementType<SvgIconProps> | string
}

type Props = CustomProps & BasicComponentProps

const CT_SnackbarContent: FC<Props> = (props): React.ReactElement => {
  const { message, color, close, icon } = props

  const styles = stylesUntyped as { [key: string]: CSSProperties }

  let action = []

  const closeAlert = () => {
    setAlert(null)
  }

  if (close !== undefined) {
    action = [
      <IconButton
        sx={styles.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={closeAlert}
      >
        <Close sx={styles.close} />
      </IconButton>,
    ]
  }

  let snackIcon = null
  switch (typeof icon) {
    case 'object':
      snackIcon = <props.icon sx={styles.icon} />
      break
    case 'string':
      snackIcon = <Icon sx={styles.icon}>{icon}</Icon>
      break
    default:
      snackIcon = null
      break
  }

  const [alert, setAlert] = useState(
    <SnackbarContent
      message={
        <div>
          {snackIcon}
          {message}
          {close !== undefined ? action : null}
        </div>
      }
      sx={{
        '&.MuiSnackbarContent-root': { ...styles.root, ...styles[color] },
        '& .MuiSnackbarContent-message': {
          ...styles.message,
          ...styles.container,
        },
      }}
    />
  )
  return alert
}
export default CT_SnackbarContent
