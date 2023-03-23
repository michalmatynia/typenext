/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'
import Box from '@mui/material/Box'

import { InfoAreaColor } from 'types/styleTypes/nextjs-material-kit/colors'
import styles from '../../../../styles/jss/nextjs-material-kit/components/infoStyle.js'
import { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon.js'
interface Props {
  iconColor?: InfoAreaColor
  description?: string
  title?: string
  icon?: React.ElementType<SvgIconProps>
  vertical?: boolean
}
const CT_InfoArea: FC<Props> = (props): React.ReactElement => {
  const { title, description, iconColor = 'gray', vertical } = props

  const iconClasses = {
    ...styles.icon,
    ...((vertical && {
      ...styles.iconVertical,
    }) as CSSProperties),
  }

  const styleTitle = css({
    ...(styles.title as CSSProperties),
  })

  return (
    <Box sx={{ ...styles.infoArea }}>
      <Box
        sx={{
          ...(vertical && {
            ...styles.iconWrapperVertical,
          }),
          ...styles[iconColor],
          ...styles.iconWrapper,
        }}
      >
        <props.icon sx={iconClasses} />
      </Box>
      <Box sx={{ ...styles.descriptionWrapper }}>
        <h4 css={styleTitle}>{title}</h4>
        <p css={styles.description}>{description}</p>
      </Box>
    </Box>
  )
}
export default CT_InfoArea
