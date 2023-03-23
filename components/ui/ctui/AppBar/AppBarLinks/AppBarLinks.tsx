/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, CSSProperties } from 'react'
import Link from 'next/link'

import { Icon, List, ListItem, Tooltip } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import stylesFc from '../../../../../styles/jss/nextjs-material-kit/components//headerLinksStyle'
import { Apps, CloudDownload } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete'
import { CT_CustomButton, CT_CustomDropdown } from '@components/ui'
import { selectedStyle } from '@lib/component-helpers/nextjs-material-kit/styleSelectors'

const CT_AppBarLinks: FC = (): React.ReactElement => {
  const theme = useTheme()

  const styles = stylesFc(theme) as { [key: string]: CSSProperties }
  const DropdownLinkStyles = css({
    ...selectedStyle('dropdownLink', styles),
  })
  return (
    <>
      <List sx={styles.list}>
        <ListItem sx={styles.listItem}>
          <CT_CustomDropdown
            noLiPadding
            navDropdown
            buttonText="Components"
            buttonStyleProps={{
              ct_color: 'transparent',
              ...styles.navLink,
            }}
            buttonIcon={Apps}
            dropdownList={[
              { divider: true },
              <Link legacyBehavior key="1" href="/components">
                <a css={DropdownLinkStyles}>All components</a>
              </Link>,
              <a
                key="2"
                href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
                target="_blank"
                css={DropdownLinkStyles}
              >
                Documentation
              </a>,
            ]}
          />
        </ListItem>
        <ListItem sx={styles.listItem}>
          <CT_CustomButton
            href="https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmk-navbar"
            ct_color="transparent"
            target="_blank"
            styleProps={{ ...styles.navLink }}
          >
            <Icon sx={styles.icons}>unarchive</Icon> Upgrade to PRO
          </CT_CustomButton>
        </ListItem>
        <ListItem sx={styles.listItem}>
          <CT_CustomButton
            href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar"
            ct_color="transparent"
            target="_blank"
            styleProps={{ ...styles.navLink }}
          >
            <CloudDownload sx={styles.icons} /> Download
          </CT_CustomButton>
        </ListItem>
        <ListItem sx={styles.listItem}>
          {/* <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip> */}
          <Tooltip
            id="instagram-twitter"
            title="Follow us on twitter"
            placement={'top'}
            classes={{ tooltip: styles.tooltip as string }}
          >
            <CT_CustomButton
              href="https://twitter.com/CreativeTim?ref=creativetim"
              target="_blank"
              ct_color="transparent"
              styleProps={styles.navLink}
            >
              <i
                css={css({ ...styles.socialIcons })}
                className={'fab fa-twitter'}
              />
            </CT_CustomButton>
          </Tooltip>
        </ListItem>
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
            id="instagram-tooltip"
            title="Follow us on instagram"
            placement={'top'}
            classes={{ tooltip: styles.tooltip as string }}
          >
            <CT_CustomButton
              ct_color="transparent"
              href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
              target="_blank"
              styleProps={styles.navLink}
            >
              <i
                css={css({ ...styles.socialIcons })}
                className={'fab fa-instagram'}
              />
            </CT_CustomButton>
          </Tooltip>
        </ListItem>
      </List>
    </>
  )
}

export default CT_AppBarLinks
