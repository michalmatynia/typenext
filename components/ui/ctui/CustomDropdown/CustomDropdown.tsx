/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  useState,
  ReactNode,
  CSSProperties,
  MouseEventHandler,
} from 'react'

import {
  MenuItem,
  MenuList,
  Paper,
  Grow,
  Divider,
  Popper,
  Icon,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import stylesFc from '../../../../styles/jss/nextjs-material-kit/components/customDropdownStyle.js'
import { SvgIconComponent } from '@mui/icons-material'
import { CT_CustomButton } from '@components/ui'
import { ClickAwayListener } from '@mui/base'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'

type DropdownListType = ReactNode | { divider: boolean }

interface CustomProps {
  list?: CSSProperties
  listItem?: CSSProperties
  hoverColor?:
    | 'black'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'rose'
  buttonText?: ReactNode
  buttonIcon?: SvgIconComponent | string

  dropdownList?: DropdownListType[]
  buttonStyleProps?: {
    styleProps?: BasicComponentProps['styleProps']
    ct_color: string
  }
  dropup?: boolean
  dropdownHeader?: ReactNode
  onClick?: MouseEventHandler
  rtlActive?: boolean
  caret?: boolean
  left?: boolean
  noLiPadding?: boolean
  navDropdown?: boolean
}

type Props = CustomProps & BasicComponentProps

const CT_CustomDropdown: FC<Props> = (props): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>(null)
  const theme = useTheme()

  const styles = stylesFc(theme) as { [key: string]: CSSProperties }
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (anchorEl && anchorEl.contains(event.target as Node)) {
      setAnchorEl(null)
    } else {
      setAnchorEl(event.currentTarget as HTMLAnchorElement)
    }
  }

  const handleClose = (param) => {
    setAnchorEl(null)
    if (props && props.onClick) {
      props.onClick(param)
    }
  }
  const handleCloseAway = (event: MouseEvent) => {
    if (anchorEl.contains(event.target as Node)) {
      return
    }
    setAnchorEl(null)
  }

  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonStyleProps,
    dropup,
    dropdownHeader,
    caret = true,
    hoverColor = 'primary',
    left,
    rtlActive,
    noLiPadding,
    navDropdown,
  } = props

  const caretClasses = css({
    ...styles.caret,
    ...(Boolean(anchorEl) && {
      ...styles.caretActive,
    }),
    ...(rtlActive && {
      ...styles.caretRTL,
    }),
  })

  const dropdownItemClasses = {
    ...styles.dropdownItem,
    ...styles[hoverColor + 'Hover'],
    ...(noLiPadding && {
      ...styles.noLiPadding,
    }),
    ...(rtlActive && {
      ...styles.dropdownItemRTL,
    }),
  }

  const popperClasses = css({
    ...styles.popperResponsive,
    ...(!anchorEl && {
      ...styles.popperClose,
    }),
    ...(Boolean(anchorEl) &&
      navDropdown && {
        ...styles.pooperNav,
      }),
  })

  let icon = null
  switch (typeof buttonIcon) {
    case 'object':
      icon = <props.buttonIcon sx={styles.buttonIcon} />
      break
    case 'string':
      icon = (
        <Icon sx={styles.buttonIcon}>
          {props.buttonIcon as unknown as ReactNode}
        </Icon>
      )
      break
    default:
      icon = null
      break
  }

  const { ct_color, ...restButtonStyleProps } = buttonStyleProps

  return (
    <div>
      <div>
        <CT_CustomButton
          aria-label="Notifications"
          aria-owns={anchorEl ? 'menu-list' : null}
          aria-haspopup="true"
          onClick={handleClick}
          styleProps={restButtonStyleProps}
          ct_color={ct_color}
        >
          {icon}
          {buttonText !== undefined ? buttonText : null}
          {caret ? <b css={caretClasses} /> : null}
        </CT_CustomButton>
      </div>
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement={
          dropup
            ? left
              ? 'top-start'
              : 'top'
            : left
            ? 'bottom-start'
            : 'bottom'
        }
        css={popperClasses} // not sure if sx should n't be here
      >
        {() => (
          <Grow
            in={Boolean(anchorEl)}
            id="menu-list"
            style={
              dropup
                ? { transformOrigin: '0 100% 0' }
                : { transformOrigin: '0 0 0' }
            }
          >
            <Paper sx={styles.dropdown}>
              <ClickAwayListener onClickAway={handleCloseAway}>
                <MenuList role="menu" sx={styles.menuList}>
                  {dropdownHeader !== undefined ? (
                    <MenuItem
                      onClick={() => handleClose(dropdownHeader)}
                      sx={styles.dropdownHeader}
                    >
                      {dropdownHeader}
                    </MenuItem>
                  ) : null}
                  {dropdownList.map(
                    (prop: ReactNode & { divider: boolean }, key: number) => {
                      if (prop.divider) {
                        return (
                          <Divider
                            key={key}
                            onClick={() => handleClose('divider')}
                            sx={styles.dropdownDividerItem}
                          />
                        )
                      }
                      return (
                        <MenuItem
                          key={key}
                          onClick={() => handleClose(prop)}
                          sx={dropdownItemClasses}
                        >
                          {prop}
                        </MenuItem>
                      )
                    }
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

export default CT_CustomDropdown
