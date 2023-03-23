/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx, CSSObject } from '@emotion/react'

import React, { CSSProperties, MouseEventHandler, Ref, forwardRef } from 'react'

import { CSSInterpolation, styled } from '@mui/material/styles'
import buttonStyle from '../../../../styles/jss/nextjs-material-kit/components/buttonStyle.js'
import Button from '@mui/material/Button'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'

interface CustomButtonProps {
  styleProps?: CSSProperties
  ct_size?: string // no typesafety here
  ct_color?: string // no typesafety here
  simple?: boolean
  round?: boolean
  block?: boolean
  link?: boolean
  justIcon?: boolean
  button?: boolean
  fullWidth?: boolean
  disabled?: boolean
  onClick?: MouseEventHandler
  target?: string
  href?: string
  rel?: string
  cssProps?: CSSInterpolation
}
type Props = CustomButtonProps & BasicComponentProps

type BtnClassesProps = Omit<Props, 'children'>

const StyledCustomButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== 'ct_color' &&
    prop !== 'ct_size' &&
    prop !== 'simple' &&
    prop !== 'round' &&
    prop !== 'fullWidth' &&
    prop !== 'disabled' &&
    prop !== 'block' &&
    prop !== 'link' &&
    prop !== 'justIcon' &&
    prop !== 'button' &&
    prop !== 'styleProps' &&
    prop !== 'cssProps',
})<CustomButtonProps>(
  ({
    ct_color,
    ct_size,
    simple,
    round,
    fullWidth,
    disabled,
    block,
    link,
    justIcon,
    button,
    styleProps,
    cssProps,
  }) => {
    const stylesForColor = buttonStyle[ct_color] as CSSObject
    const stylesForSize = buttonStyle[ct_size] as CSSObject

    // Combine all styles

    const combinedStyle = css`
      ${button && (buttonStyle.button as CSSObject)};
      ${simple && (buttonStyle.simple as CSSObject)};

      ${simple &&
      ct_color &&
      ct_color != 'transparent' &&
      buttonStyle.simple &&
      (buttonStyle.simple[`&$${ct_color}`] as CSSObject)};
      ${simple &&
      ct_color &&
      ct_color === 'transparent' &&
      buttonStyle.simple &&
      (buttonStyle[ct_color] as CSSObject)};

      ${stylesForSize};
      ${!simple && ct_color && stylesForColor};
      ${round && buttonStyle.round};
      ${fullWidth && (buttonStyle.fullWidth as CSSObject)};
      ${disabled && (buttonStyle.disabled as CSSObject)};
      ${block && (buttonStyle.block as CSSObject)};
      ${link && (buttonStyle.link as CSSObject)};
      ${justIcon && (buttonStyle.justIcon as CSSObject)};
      ${styleProps as CSSObject};
    `

    const finalStyle = css`
      ${combinedStyle};
      ${cssProps as CSSObject};
    `
    return finalStyle
  }
)

const RegularButton = forwardRef(function RegularButton(
  props: Props,
  ref: Ref<HTMLButtonElement>
) {
  const {
    ct_color,
    ct_size,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    block,
    link,
    justIcon,
    className,
    styleProps,
    cssProps,
    ...rest
  } = props

  const btnClasses: BtnClassesProps = {
    ct_color,
    ct_size,
    round,
    fullWidth,
    disabled,
    simple,
    block,
    link,
    justIcon,
    className,
  }

  return (
    <StyledCustomButton
      button
      styleProps={styleProps}
      cssProps={cssProps}
      {...rest}
      ref={ref}
      {...btnClasses}
    >
      {children}
    </StyledCustomButton>
  )
})

export default RegularButton
