/** @jsxRuntime classic */

/** @jsx jsx */

import { CSSObject, css, jsx } from '@emotion/react'
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useEffect, ReactNode, CSSProperties } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import { Drawer, Hidden, IconButton, Toolbar } from '@mui/material'
import { styled } from '@mui/material/styles'
import { AppBarColorSet } from '../../../../../types/styleTypes/nextjs-material-kit/colors'
import MenuIcon from '@mui/icons-material/Menu'
import stylesUntyped from '../../../../../styles/jss/nextjs-material-kit/components/headerStyle.js'
import Link from 'next/link'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps'

interface LocalProps {
  changeColorOnScroll?: {
    height?: number
    ct_color?:
      | 'inherit'
      | 'default'
      | 'transparent'
      | 'primary'
      | 'secondary'
      | 'white'
      | 'info'
      | 'rose'
      | 'dark'
  }
  ct_color?:
    | 'inherit'
    | 'default'
    | 'transparent'
    | 'primary'
    | 'secondary'
    | 'white'
    | 'info'
    | 'rose'
    | 'dark'
  rightLinks?: ReactNode
  leftLinks?: ReactNode
  brand?: string
  fixed?: boolean
  absolute?: boolean
  styles?: { [key: string]: CSSProperties } | CSSProperties
}

interface StyledComponentProps {
  appBar?: boolean
  fixed?: boolean
  absolute?: boolean
  ct_color?:
    | AppBarColorSet
    | 'inherit'
    | 'default'
    | 'transparent'
    | 'primary'
    | 'secondary'
    | 'white'
    | 'info'
    | 'rose'
    | 'dark'
    | undefined
    | null
  dynamicStyleProps?: CSSProperties
}
type Props = LocalProps & BasicComponentProps
type StyledProps = StyledComponentProps & BasicComponentProps
const styles = stylesUntyped as { [key: string]: CSSProperties }

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) =>
    prop !== 'appBar' &&
    prop !== 'absolute' &&
    prop !== 'fixed' &&
    prop !== 'ct_color' &&
    prop !== 'styleProps' &&
    prop !== 'dynamicStyleProps',
})<StyledProps>(
  ({ appBar, styleProps, dynamicStyleProps, absolute, fixed, ct_color }) => {
    const stylesToApplyColor = styles[ct_color]

    const combinedStyles = css`
      ${appBar && (styles.appBar as CSSObject)};
      ${styleProps as CSSObject};
      ${fixed && (styles.fixed as CSSObject)};
      ${absolute && (styles.absolute as CSSObject)};
      ${dynamicStyleProps && (dynamicStyleProps as CSSObject)};
      ${!dynamicStyleProps &&
      stylesToApplyColor &&
      (styles.stylesToApplyColor as CSSObject)};
    `

    return combinedStyles
  }
)

const CT_AppBar: FC<Props> = (props): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const { ct_color, rightLinks, leftLinks, brand, fixed, absolute } = props

  const [mobileOpen, setMobileOpen] = useState(false)
  const [isAppbarStyle, setIsAppbarStyle] = useState(styles[ct_color])

  useEffect(() => {
    const headerColorChange = (e) => {
      const { ct_color, changeColorOnScroll } = props
      const DynamicHeaderStyleOnScroll = styles[changeColorOnScroll.ct_color]

      const windowsScrollTop = window.pageYOffset

      let finalStyle = {}
      if (windowsScrollTop > changeColorOnScroll.height) {
        finalStyle = { ...DynamicHeaderStyleOnScroll }
      } else {
        finalStyle = { ...styles[ct_color] }
      }

      setIsAppbarStyle(finalStyle)
    }
    if (props.changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange)
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange)
      }
    }
  }, [props, styles, isAppbarStyle])

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen)
  }

  const brandComponent = (
    <Link legacyBehavior href="/components" as="/components">
      <a style={{ color: 'inherit' }}>
        <Button sx={styles.title}>{brand}</Button>
      </a>
    </Link>
  )

  return (
    <StyledAppBar
      appBar
      dynamicStyleProps={isAppbarStyle}
      ct_color={ct_color} // powinno być ct_color
      fixed={fixed}
      absolute={absolute}
    >
      <Toolbar sx={styles.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <Box sx={styles.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </Box>
        <Hidden mdDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          sx={{
            paper: styles.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <Box sx={{ ...styles.appResponsive }}>
            {leftLinks}
            {rightLinks}
          </Box>
        </Drawer>
      </Hidden>
    </StyledAppBar>
  )
}

export default CT_AppBar
