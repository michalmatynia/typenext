/** @jsxRuntime classic */

/** @jsx jsx */

import { jsx } from '@emotion/react'
import React, { FC, ReactNode, useState } from 'react'
import { Tabs, Tab, Icon, Box, CSSObject, SvgIconTypeMap } from '@mui/material'
import { CT_Card, CT_CardBody, CT_CardHeader } from '@components/ui'
import stylesUntyped from '../../../../styles/jss/nextjs-material-kit/components/customTabsStyle.js'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'
import { OverridableComponent } from '@mui/material/OverridableComponent.js'

interface CustomProps {
  headerColor?: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose'
  title?: string
  tabs?: {
    tabName: string
    tabIcon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>
    tabContent: ReactNode
  }[]
  rtlActive?: boolean
  plainTabs?: boolean
}
type Props = CustomProps & BasicComponentProps

const CT_CustomTabs: FC<Props> = (props): React.ReactElement => {
  const styles = stylesUntyped as unknown as {
    [key: string]: CSSObject
  }
  const [value, setValue] = useState(0)

  const handleChange = (event, value: number) => {
    setValue(value)
  }

  const { headerColor, plainTabs, tabs, title, rtlActive } = props

  const cardTitle = {
    ...styles.cardTitle,
    ...(rtlActive && styles.cardTitleRTL),
  }
  const indicatorStyles = {
    display: 'none', // set the display property to 'none' to hide the TabIndicator component
  }
  return (
    <CT_Card plain={plainTabs}>
      <CT_CardHeader color={headerColor} plain={plainTabs}>
        {title !== undefined ? <Box sx={cardTitle}>{title}</Box> : null}
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            '&.MuiTab-root': {
              ...styles.tabsRoot,
            },
          }}
          TabIndicatorProps={{ style: indicatorStyles }}
        >
          {tabs.map((prop, key) => {
            let icon = {}
            if (prop.tabIcon) {
              icon = {
                icon:
                  typeof prop.tabIcon === 'string' ? (
                    <Icon>{prop.tabIcon}</Icon>
                  ) : (
                    <prop.tabIcon />
                  ),
              }
            }
            return (
              <Tab
                sx={{
                  '&.MuiTab-root': styles.tabRootButton,
                  '&.MuiTab-labelIcon': styles.tabLabel,
                  '&.Mui-selected': styles.tabSelected,
                  '&.MuiTab-wrapped': styles.tabWrapper,
                }}
                key={key}
                label={prop.tabName}
                {...icon}
              />
            )
          })}
        </Tabs>
      </CT_CardHeader>
      <CT_CardBody>
        {tabs.map((prop, key) => {
          if (key === value) {
            return <div key={key}>{prop.tabContent}</div>
          }
          return null
        })}
      </CT_CardBody>
    </CT_Card>
  )
}

export default CT_CustomTabs
