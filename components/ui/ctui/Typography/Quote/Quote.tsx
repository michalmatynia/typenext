/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'
import stylesUntyped from '../../../../../styles/jss/nextjs-material-kit/components/typographyStyle.js'

import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'
interface CustomProps {
  text?: React.ReactNode
  author?: React.ReactNode
}

type Props = CustomProps & BasicComponentProps

const CT_Quote: FC<Props> = (props): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }
  const { text, author } = props

  const blockquoteClasses = css({
    ...styles.defaultFontStyle,
    ...styles.quote,
  })

  const quoteTextClasses = css({
    ...styles.quoteText,
  })

  const quoteAuthorClasses = css({
    ...styles.quoteAuthor,
  })

  return (
    <blockquote css={blockquoteClasses}>
      <p css={quoteTextClasses}>{text}</p>
      <small css={quoteAuthorClasses}>{author}</small>
    </blockquote>
  )
}

export default CT_Quote
