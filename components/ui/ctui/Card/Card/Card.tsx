/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'

import stylesUntyped from '../../../../../styles/jss/nextjs-material-kit/components/cardStyle.js'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'
interface CardProps {
  plain?: boolean
  carousel?: boolean
}

type Props = CardProps & BasicComponentProps

const CT_Card: FC<Props> = (props): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const cardStyle = css({
    ...styles.card,
    ...(props.plain && {
      ...styles.cardPlain,
    }),
    ...(props.carousel && {
      ...styles.cardCarousel,
    }),
  })
  return <div css={cardStyle}>{props.children}</div>
}

export default CT_Card
