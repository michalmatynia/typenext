/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx, CSSObject } from '@emotion/react'
import React, { FC, useState, useEffect, CSSProperties } from 'react'
import { styled } from '@mui/material/styles'

import stylesFc from '../../../../styles/jss/nextjs-material-kit/components/parallaxStyle.js'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'

interface ParallaxProps {
  filter?: boolean
  style?: CSSProperties
  small?: boolean
  image?: string
  parallax?: boolean
  // this will add a min-height of 660px on small screens
  responsive?: boolean
}

type Props = ParallaxProps & BasicComponentProps

const StyledParallax = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'filter' &&
    prop !== 'style' &&
    prop !== 'small' &&
    prop !== 'responsive' &&
    prop !== 'styleProps' &&
    prop !== 'parallax',
})<Props>(({ parallax, filter, styleProps, small, responsive, theme }) => {
  const styles = stylesFc(theme) // add this line

  const combinedStyles = css`
    ${styleProps as CSSObject};
    ${small && (styles.small as CSSObject)};
    ${filter && (styles.filter as CSSObject)};
    ${parallax && (styles.parallax as CSSObject)};
    ${responsive && (styles.parallaxResponsive as CSSObject)};
  `

  return combinedStyles
})

const CT_Parallax: FC<Props> = (props): React.ReactElement<Props> => {
  //   let windowScrollTop
  // if (window.innerWidth >= 768) {
  //   windowScrollTop = window.pageYOffset / 3;
  // } else {
  //   windowScrollTop = 0;
  // }
  const [transform, setTransform] = useState('translate3d(0,0px,0)')
  useEffect(() => {
    const resetTransform = () => {
      const windowScrollTop = window.pageYOffset / 3
      setTransform(`translate3d(0, ${windowScrollTop}px,0)`)
    }

    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform)
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform)
      }
    }
  }, [transform])

  const { filter, children, styleProps, image, small, responsive } = props

  return (
    <StyledParallax
      filter={filter}
      small={small}
      responsive={responsive}
      parallax={true}
      styleProps={{
        ...styleProps,
        backgroundImage: `url('${image}')`,
        transform: transform,
      }}
    >
      {children}
    </StyledParallax>
  )
}

export default CT_Parallax
