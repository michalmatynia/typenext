/** @jsxRuntime classic */

/** @jsx jsx */

import { CSSObject, css, jsx } from '@emotion/react'
import React, { FC } from 'react'

import styles from '../../../../../styles/jss/nextjs-material-kit/components/cardHeaderStyle.js'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'

interface CustomProps {
  color?: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose'
  plain?: boolean
}
type Props = CustomProps & BasicComponentProps

const CT_CardHeader: FC<Props> = (props): React.ReactElement => {
  const { children, color, plain, styleProps, ...rest } = props

  const cardHeaderClasses = css({
    ...(styleProps &&
      ({
        ...styleProps,
      } as CSSObject)),
    ...(styles.cardHeader as CSSObject),
    ...(color &&
      ({
        ...styles[color + 'CardHeader'],
      } as CSSObject)),
    ...(plain &&
      ({
        ...styles.cardHeaderPlain,
      } as CSSObject)),
  })

  return (
    <div css={cardHeaderClasses} {...rest}>
      {children}
    </div>
  )
}

export default CT_CardHeader
