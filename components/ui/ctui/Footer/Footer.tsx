/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'

import stylesUntyped from '../../../../styles/jss/nextjs-material-kit/components/footerStyle.js'

import { Box, List, ListItem } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

interface Props {
  whiteFont?: boolean
}
const CT_Footer: FC<Props> = (props): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const { whiteFont } = props

  const footerClasses = css({
    ...styles.footer,
    ...(whiteFont && {
      ...styles.footerWhiteFont,
    }),
  })
  const aClasses = css({
    ...styles.a,
    ...(whiteFont && {
      ...styles.footerWhiteFont,
    }),
  })

  const ClassesBlock = css({
    ...styles.block,
  })
  return (
    <footer css={footerClasses}>
      <Box sx={{ ...styles.container }}>
        <Box sx={{ ...styles.left }}>
          <List sx={{ ...styles.list }}>
            <ListItem sx={{ ...styles.inlineBlock }}>
              <a
                href="https://www.creative-tim.com/?ref=njsmk-footer"
                css={ClassesBlock}
                target="_blank"
              >
                Creative Tim
              </a>
            </ListItem>
            <ListItem sx={{ ...styles.inlineBlock }}>
              <a
                href="https://www.creative-tim.com/presentation?ref=njsmk-footer"
                css={ClassesBlock}
                target="_blank"
              >
                About us
              </a>
            </ListItem>
            <ListItem sx={{ ...styles.inlineBlock }}>
              <a
                href="http://blog.creative-tim.com/?ref=njsmk-footer"
                css={ClassesBlock}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
            <ListItem sx={{ ...styles.inlineBlock }}>
              <a
                href="https://www.creative-tim.com/license?ref=njsmk-footer"
                css={ClassesBlock}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem>
          </List>
        </Box>
        <Box sx={{ ...styles.right }}>
          &copy; {new Date().getFullYear()} , made with{' '}
          <FavoriteIcon sx={styles.icon} /> by{' '}
          <a
            href="https://www.creative-tim.com?ref=njsmk-footer"
            css={aClasses}
            target="_blank"
          >
            Creative Tim
          </a>{' '}
          for a better web.
        </Box>
      </Box>
    </footer>
  )
}

export default CT_Footer
