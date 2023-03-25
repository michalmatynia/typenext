/** @jsxRuntime classic */

/** @jsx jsx */

import { CSSObject, css, jsx } from '@emotion/react'
import {
  CT_GridContainer,
  CT_GridItem,
  CT_CustomInput,
  CT_CustomButton,
  CT_AppBar,
  CT_CustomDropdown,
} from '@components/ui'
import React, { FC, CSSProperties } from 'react'
import stylesFc from '../../../../../../styles/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js'
import { Box, Icon, List, ListItem, useTheme } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import EmailIcon from '@mui/icons-material/Email'
import FaceIcon from '@mui/icons-material/Face'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ExploreIcon from '@mui/icons-material/Explore'
import Image from 'next/image'

const CT_SectionNavbars: FC = (): React.ReactElement => {
  const theme = useTheme()

  const styles = stylesFc(theme) as { [key: string]: CSSProperties }

  return (
    <Box sx={{ ...styles.section }}>
      <Box sx={{ ...styles.container }}>
        <CT_GridContainer>
          <CT_GridItem xs={12} sm={12} md={6}>
            <Box sx={{ ...styles.title }}>
              <h2>Menu</h2>
            </Box>
            <CT_AppBar
              ct_color="primary"
              brand="Menu"
              leftLinks={
                <List sx={styles.list}>
                  <ListItem sx={styles.listItem}>
                    <CT_CustomButton
                      href="#pablo"
                      styleProps={styles.navLink}
                      onClick={(e) => e.preventDefault()}
                      ct_color="transparent"
                    >
                      Link
                    </CT_CustomButton>
                  </ListItem>
                  <ListItem sx={styles.listItem}>
                    <CT_CustomButton
                      href="#pablo"
                      styleProps={styles.navLink}
                      onClick={(e) => e.preventDefault()}
                      ct_color="transparent"
                    >
                      Link
                    </CT_CustomButton>
                  </ListItem>
                  <ListItem sx={styles.listItem}>
                    <CT_CustomDropdown
                      navDropdown
                      buttonText="Dropdown"
                      dropdownHeader="Dropdown Header"
                      buttonStyleProps={{
                        ct_color: 'transparent',
                        ...styles.navLink,
                      }}
                      dropdownList={[
                        'Action',
                        'Another action',
                        'Something else here',
                        { divider: true },
                        'Separated link',
                        { divider: true },
                        'One more separated link',
                      ]}
                    />
                  </ListItem>
                </List>
              }
            />
          </CT_GridItem>
          <CT_GridItem xs={12} sm={12} md={6}>
            <Box sx={{ ...styles.title }}>
              <h2>Menu with Icons</h2>
            </Box>
            <CT_AppBar
              ct_color="info"
              brand="Icons"
              rightLinks={
                <List sx={styles.list}>
                  <ListItem sx={styles.listItem}>
                    <CT_CustomButton
                      ct_color="transparent"
                      styleProps={styles.navLink}
                    >
                      <EmailIcon sx={styles.icons} />
                    </CT_CustomButton>
                  </ListItem>
                  <ListItem sx={styles.listItem}>
                    <CT_CustomButton
                      ct_color="transparent"
                      styleProps={styles.navLink}
                    >
                      <FaceIcon sx={styles.icons} />
                    </CT_CustomButton>
                  </ListItem>
                  <ListItem sx={styles.listItem}>
                    <CT_CustomDropdown
                      left
                      navDropdown
                      hoverColor="info"
                      dropdownHeader="Dropdown Header"
                      buttonIcon="settings"
                      buttonStyleProps={{
                        ct_color: 'transparent',
                        ...styles.navLink,
                      }}
                      dropdownList={[
                        'Action',
                        'Another action',
                        'Something else here',
                        { divider: true },
                        'Separated link',
                        { divider: true },
                        'One more separated link',
                      ]}
                    />
                  </ListItem>
                </List>
              }
            />
          </CT_GridItem>
        </CT_GridContainer>
        <Box sx={{ ...styles.title }}>
          <h2>Navigation</h2>
        </Box>
      </Box>
      <Box id="navbar" sx={styles.navbar}>
        <Box
          sx={styles.navigation}
          style={{ backgroundImage: "url('/img/bg.jpg')" }}
        >
          <CT_AppBar
            brand="Brand"
            ct_color="rose"
            leftLinks={
              <List sx={styles.list}>
                <ListItem sx={styles.listItem}>
                  <CT_CustomButton
                    href="#pablo"
                    styleProps={styles.navLink}
                    onClick={(e) => e.preventDefault()}
                    ct_color="transparent"
                  >
                    Link
                  </CT_CustomButton>
                </ListItem>
                <ListItem sx={styles.listItem}>
                  <CT_CustomButton
                    href="#pablo"
                    styleProps={styles.navLink}
                    onClick={(e) => e.preventDefault()}
                    ct_color="transparent"
                  >
                    Link
                  </CT_CustomButton>
                </ListItem>
              </List>
            }
            rightLinks={
              <div>
                <CT_CustomInput
                  white
                  inputRootCustomClasses={styles.inputRootCustomClasses}
                  formControlProps={{
                    className: styles.formControl,
                  }}
                  inputProps={{
                    placeholder: 'Search',
                    inputProps: {
                      'aria-label': 'Search',
                      className: styles.searchInput,
                    },
                  }}
                  inputStyleProps={{ color: 'white' }}
                />
                <CT_CustomButton justIcon round ct_color="white">
                  <SearchIcon sx={styles.searchIcon} />
                </CT_CustomButton>
              </div>
            }
          />
          <CT_AppBar
            brand="Primary Color"
            ct_color="primary"
            rightLinks={
              <List sx={styles.list}>
                <ListItem sx={styles.listItem}>
                  <CT_CustomButton
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    ct_color="transparent"
                    cssProps={css`
                      ${styles.navLink as CSSObject};
                      ${styles.navLinkActive as CSSObject}
                    `}
                  >
                    <ExploreIcon sx={styles.icons} /> Discover
                  </CT_CustomButton>
                </ListItem>
                <ListItem sx={styles.listItem}>
                  <CT_CustomButton
                    href="#pablo"
                    styleProps={styles.navLink}
                    onClick={(e) => e.preventDefault()}
                    ct_color="transparent"
                  >
                    <AccountCircleIcon sx={styles.icons} /> Profile
                  </CT_CustomButton>
                </ListItem>
                <ListItem sx={styles.listItem}>
                  <CT_CustomButton
                    href="#pablo"
                    styleProps={styles.navLink}
                    onClick={(e) => e.preventDefault()}
                    ct_color="transparent"
                  >
                    <Icon sx={styles.icons}>settings</Icon> Settings
                  </CT_CustomButton>
                </ListItem>
              </List>
            }
          />
          <CT_AppBar
            brand="Navbar with notifications"
            ct_color="dark"
            rightLinks={
              <List sx={styles.list}>
                <ListItem sx={styles.listItem}>
                  <CT_CustomButton
                    href="#pablo"
                    styleProps={styles.navLink}
                    onClick={(e) => e.preventDefault()}
                    ct_color="transparent"
                  >
                    Discover
                  </CT_CustomButton>
                </ListItem>
                <ListItem sx={styles.listItem}>
                  <CT_CustomButton
                    href="#pablo"
                    styleProps={styles.navLink}
                    onClick={(e) => e.preventDefault()}
                    ct_color="transparent"
                  >
                    Wishlist
                  </CT_CustomButton>
                </ListItem>
                <ListItem sx={styles.listItem}>
                  <CT_CustomButton
                    justIcon
                    round
                    href="#pablo"
                    styleProps={styles.notificationNavLink}
                    onClick={(e) => e.preventDefault()}
                    ct_color="rose"
                  >
                    <EmailIcon sx={styles.icons} />
                  </CT_CustomButton>
                </ListItem>
                <ListItem sx={styles.listItem}>
                  <CT_CustomDropdown
                    left
                    caret={false}
                    hoverColor="black"
                    dropdownHeader="Dropdown Header"
                    buttonText={
                      <Image
                        src="/img/faces/avatar.jpg"
                        css={css`
                          ${styles.img as CSSObject}
                        `}
                        alt="profile"
                        // layout="responsive"
                        width={40}
                        height={40}
                      />
                    }
                    buttonStyleProps={{
                      ct_color: 'transparent',
                      ...styles.navLink,
                      ...styles.imageDropdownButton,
                    }}
                    dropdownList={[
                      'Me',
                      'Settings and other stuff',
                      'Sign out',
                    ]}
                  />
                </ListItem>
              </List>
            }
          />
          <CT_AppBar
            brand="Navbar with profile"
            rightLinks={
              <List sx={styles.list}>
                <ListItem sx={styles.listItem}>
                  <CT_CustomButton
                    href="#pablo"
                    styleProps={styles.navLink}
                    onClick={(e) => e.preventDefault()}
                    ct_color="transparent"
                  >
                    Discover
                  </CT_CustomButton>
                </ListItem>
                <ListItem sx={styles.listItem}>
                  <CT_CustomButton
                    href="#pablo"
                    styleProps={styles.navLink}
                    onClick={(e) => e.preventDefault()}
                    ct_color="transparent"
                  >
                    Wishlist
                  </CT_CustomButton>
                </ListItem>
                <ListItem sx={styles.listItem}>
                  <CT_CustomButton
                    href="#pablo"
                    styleProps={styles.registerNavLink}
                    onClick={(e) => e.preventDefault()}
                    ct_color="rose"
                    round
                  >
                    Register
                  </CT_CustomButton>
                </ListItem>
              </List>
            }
          />
          <CT_AppBar
            brand="Transparent"
            ct_color="transparent"
            rightLinks={
              <List sx={styles.list}>
                <ListItem sx={styles.listItem}>
                  <CT_CustomButton
                    ct_color="transparent"
                    styleProps={(styles.navLink, styles.socialIconsButton)}
                  >
                    <i
                      css={css({
                        ...styles.socialIcons,
                        ...styles.marginRight5,
                      })}
                      className={'fab fa-twitter'}
                    />
                    Twitter
                  </CT_CustomButton>
                </ListItem>
                <ListItem sx={styles.listItem}>
                  <CT_CustomButton
                    ct_color="transparent"
                    styleProps={(styles.navLink, styles.socialIconsButton)}
                  >
                    <i
                      css={css({
                        ...styles.socialIcons,
                        ...styles.marginRight5,
                      })}
                      className={'fab fa-facebook'}
                    />
                    Facebook
                  </CT_CustomButton>
                </ListItem>
                <ListItem sx={styles.listItem}>
                  <CT_CustomButton
                    ct_color="transparent"
                    styleProps={(styles.navLink, styles.socialIconsButton)}
                  >
                    <i
                      css={css({
                        ...styles.socialIcons,
                        ...styles.marginRight5,
                      })}
                      className={'fab fa-instagram'}
                    />
                    Instagram
                  </CT_CustomButton>
                </ListItem>
              </List>
            }
          />
        </Box>
      </Box>
    </Box>
  )
}

export default CT_SectionNavbars
