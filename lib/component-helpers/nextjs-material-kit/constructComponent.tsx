/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'

import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'

const CT_BasicComponent: FC = (
  props: BasicComponentProps,
  componentStyles: CSSProperties
): React.ReactElement => {
  const { styleProps, ...rest } = props

  const componentStyle = css({
    ...componentStyles,
    ...(styleProps !== undefined && { ...styleProps }),
  })
  return (
    <div {...rest} css={componentStyle}>
      {props.children}
    </div>
  )
}

export default CT_BasicComponent
