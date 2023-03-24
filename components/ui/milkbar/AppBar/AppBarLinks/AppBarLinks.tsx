/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, CSSProperties } from 'react'
import Link from 'next/link'

import { Icon, List, ListItem, Tooltip } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import stylesFc from '../../../../../styles/jss/nextjs-material-kit/components/headerLinksStyle'
import { Apps, CloudDownload } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete'
import { CT_CustomButton, CT_CustomDropdown } from '@components/ui'
import { selectedStyle } from '@lib/component-helpers/nextjs-material-kit/styleSelectors'

const Milkbar_AppBarLinks: FC = (): React.ReactElement => {
  const theme = useTheme()

  const styles = stylesFc(theme) as { [key: string]: CSSProperties }
  const DropdownLinkStyles = css({
    ...selectedStyle('dropdownLink', styles),
  })
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
              href="https://www.facebook.com/CreativeTim?ref=creativetim"
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
        <ListItem sx={styles.listItem}>
          <Tooltip
            id="email-tooltip"
            title="Send us an email"
            placement={'top'}
            classes={{ tooltip: styles.tooltip as string }}
          >
            <CT_CustomButton
              ct_color="transparent"
              href="mailto:info@milkbardesigners.com?subject=Subject"
              // target="_blank"
              styleProps={styles.navLink}
            >
              <i
                css={css({ ...styles.socialIcons })}
                className={'far fa-envelope'}
              />
            </CT_CustomButton>
          </Tooltip>
        </ListItem>
      </List>
    </>
  )
}
export default Milkbar_AppBarLinks
