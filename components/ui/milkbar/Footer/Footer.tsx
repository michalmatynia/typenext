/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'

import stylesUntyped from '../../../../styles/jss/nextjs-material-kit/components/footerStyle.js'

import { Box, List, ListItem } from '@mui/material'

interface Props {
  whiteFont?: boolean
}
const Milkbar_Footer: FC<Props> = (props): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const { whiteFont } = props

  const footerClasses = css({
    ...styles.footer,
    ...(whiteFont && {
      ...styles.footerWhiteFont,
    }),
  })

  const ClassesBlock = css({
    ...styles.block,
  })
  return (
    <footer css={footerClasses}>
      <Box sx={styles.container}>
        <Box sx={styles.left}>
          <List sx={styles.list}>
            <ListItem sx={styles.inlineBlock}>
              <a
                href="https://www.facebook.com/Milkbardesigners"
                css={ClassesBlock}
                target="_blank"
              >
                Facebook
              </a>
            </ListItem>
          </List>
        </Box>
        <Box sx={styles.right}>
          &copy; {new Date().getFullYear()} made by Qubirck
        </Box>
      </Box>
    </footer>
  )
}

export default Milkbar_Footer
