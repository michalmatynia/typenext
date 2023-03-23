/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC, ReactNode, useState } from 'react'

import stylesFc from '../../../../styles/jss/nextjs-material-kit/components/navPillsStyle.js'
import { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon.js'
import { Tabs, Tab, useTheme, Box } from '@mui/material'
import { CT_GridContainer, CT_GridItem } from '@components/ui'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'

interface CustomProps {
  alignCenter?: boolean
  active?: number
  horizontal?: {
    tabsGrid: { xs: number; sm: number; md: number }
    contentGrid: { xs: number; sm: number; md: number }
  }
  color?: 'primary' | 'warning' | 'danger' | 'success' | 'rose'
  tabs?: {
    tabContent: ReactNode
    tabButton: string
    tabIcon?: React.ElementType<SvgIconProps>
  }[]
}
type Props = CustomProps & BasicComponentProps

const CT_NavPills: FC<Props> = (props): React.ReactElement => {
  const { tabs, color = 'primary', horizontal, alignCenter } = props
  const theme = useTheme()
  const styles = stylesFc(theme) as { [key: string]: CSSProperties }

  const [active, setActive] = useState(0)
  const handleChange = (event, active: number) => {
    setActive(active)
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChangeIndex = (index: number) => {
    setActive(index)
  }

  const flexContainerClasses = {
    ...styles.flexContainer,
    ...(horizontal !== undefined && {
      ...styles.horizontalDisplay,
    }),
  }
  const indicatorStyles = {
    display: 'none', // set the display property to 'none' to hide the TabIndicator component
  }
  const tabButtons = (
    <Tabs
      sx={{
        '&.MuiTab-root': styles.root,
        '&.MuiTabs-fixed': styles.fixed,
        '&.MuiTabs-flexContainer': flexContainerClasses,
      }}
      TabIndicatorProps={{ style: indicatorStyles }}
      value={active}
      onChange={handleChange}
      centered={alignCenter}
      orientation={horizontal !== undefined ? 'vertical' : 'horizontal'}
    >
      {tabs.map((prop, key) => {
        const icon = {}
        if (prop.tabIcon !== undefined) {
          icon['icon'] = <prop.tabIcon css={css({ ...styles.tabIcon })} />
        }
        const pillsClasses = {
          ...(horizontal !== undefined && { ...styles.horizontalPills }),
          ...(prop.tabIcon !== undefined && { ...styles.pillsWithIcons }),
        }

        return (
          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
            sx={{
              '&.MuiTab-root': pillsClasses,
              '&.Mui-selected': styles[color],
              '&.MuiTab-wrapped': styles.tabWrapper,
            }}
          />
        )
      })}
    </Tabs>
  )
  const tabContent = (
    <Box sx={styles.contentWrapper}>
      {tabs.map((prop, key) => {
        if (key !== active) {
          return null
        } else {
          return (
            <Box sx={styles.tabContent} key={key}>
              {prop.tabContent}
            </Box>
          )
        }
      })}
    </Box>
  )

  return horizontal !== undefined ? (
    <CT_GridContainer>
      <CT_GridItem {...horizontal.tabsGrid}>{tabButtons}</CT_GridItem>
      <CT_GridItem {...horizontal.contentGrid}>{tabContent}</CT_GridItem>
    </CT_GridContainer>
  ) : (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  )
}

export default CT_NavPills
