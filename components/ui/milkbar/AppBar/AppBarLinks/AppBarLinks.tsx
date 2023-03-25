/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import React, { FC, CSSProperties } from 'react'

import { List, ListItem, Tooltip } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import stylesFc from '../../../../../styles/jss/nextjs-material-kit/components/headerLinksStyle'

import { CT_CustomButton } from '@components/ui'

const Milkbar_AppBarLinks: FC = (): React.ReactElement => {
  const theme = useTheme()

  const styles = stylesFc(theme) as { [key: string]: CSSProperties }

  return (
    <>
      <List sx={styles.list}>
        <ListItem sx={styles.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Follow us on facebook"
            placement={'top'}
            classes={{ tooltip: styles.tooltip as string }}
          >
            <CT_CustomButton
              ct_color="transparent"
              href="https://www.facebook.com/Milkbardesigners"
              target="_blank"
              styleProps={styles.navLink}
            >
              <i
                css={css({ ...styles.socialIcons })}
                className={'fab fa-facebook'}
              />
            </CT_CustomButton>
          </Tooltip>
        </ListItem>
      </List>
    </>
  )
}
export default Milkbar_AppBarLinks
