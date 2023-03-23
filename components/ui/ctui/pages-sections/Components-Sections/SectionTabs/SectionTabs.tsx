/** @jsxRuntime classic */

/** @jsx jsx */

import { CSSObject, css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'
import { CT_GridContainer, CT_GridItem, CT_CustomTabs } from '@components/ui'
import stylesFc from '../../../../../../styles/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js'
import { Box, useTheme } from '@mui/material'

import FaceIcon from '@mui/icons-material/Face'
import ChatIcon from '@mui/icons-material/Chat'
import BuildIcon from '@mui/icons-material/Build'

const CT_SectionNavbars: FC = (): React.ReactElement => {
  const theme = useTheme()

  const styles = stylesFc(theme) as { [key: string]: CSSProperties }

  return (
    <Box sx={{ ...styles.section }}>
      <Box sx={{ ...styles.container }}>
        <div id="nav-tabs">
          <h3>Navigation Tabs</h3>
          <CT_GridContainer>
            <CT_GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Tabs with Icons on Card</small>
              </h3>
              <CT_CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: 'Profile',
                    tabIcon: FaceIcon,
                    tabContent: (
                      <p
                        css={css`
                          ${styles.textCenter as CSSObject}
                        `}
                      >
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    ),
                  },
                  {
                    tabName: 'Messages',
                    tabIcon: ChatIcon,
                    tabContent: (
                      <p
                        css={css`
                          ${styles.textCenter as CSSObject}
                        `}
                      >
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    ),
                  },
                  {
                    tabName: 'Settings',
                    tabIcon: BuildIcon,
                    tabContent: (
                      <p
                        css={css`
                          ${styles.textCenter as CSSObject}
                        `}
                      >
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    ),
                  },
                ]}
              />
            </CT_GridItem>

            <CT_GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Tabs on Plain Card</small>
              </h3>
              <CT_CustomTabs
                plainTabs
                headerColor="danger"
                tabs={[
                  {
                    tabName: 'Home',
                    tabIcon: null,
                    tabContent: (
                      <p
                        css={css`
                          ${styles.textCenter as CSSObject}
                        `}
                      >
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    ),
                  },
                  {
                    tabName: 'Updates',
                    tabIcon: null,
                    tabContent: (
                      <p
                        css={css`
                          ${styles.textCenter as CSSObject}
                        `}
                      >
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    ),
                  },
                  {
                    tabName: 'History',
                    tabIcon: null,
                    tabContent: (
                      <p
                        css={css`
                          ${styles.textCenter as CSSObject}
                        `}
                      >
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    ),
                  },
                ]}
              />
            </CT_GridItem>
          </CT_GridContainer>
        </div>
      </Box>
    </Box>
  )
}

export default CT_SectionNavbars
