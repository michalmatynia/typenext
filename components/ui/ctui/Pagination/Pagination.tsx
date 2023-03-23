/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { CSSProperties, FC } from 'react'
import Button from '@mui/material/Button'

import stylesUntyped from '../../../../styles/jss/nextjs-material-kit/components/paginationStyle.js'
interface Props {
  pages?: Array<{
    active?: boolean
    disabled?: boolean
    text: number | 'PREV' | 'NEXT' | '...'
    onClick?: () => void
  }>
  color?: 'primary' | 'info' | 'success' | 'warning' | 'danger'
}

const CT_Pagination: FC<Props> = (props): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }
  const { pages, color = 'primary' } = props

  const stylePagination = css({
    ...styles.pagination,
  })
  const stylePaginationItem = css({
    ...styles.paginationItem,
  })
  return (
    <ul css={stylePagination}>
      {pages.map((prop, key) => {
        const paginationLink = {
          ...styles.paginationLink,
          ...(prop.active && {
            ...styles[color],
          }),
          ...(prop.disabled && {
            ...styles.disabled,
          }),
        }

        return (
          <li css={stylePaginationItem} key={key}>
            {prop.onClick !== undefined ? (
              <Button onClick={prop.onClick} sx={paginationLink}>
                {prop.text}
              </Button>
            ) : (
              <Button
                onClick={() => alert(`you've clicked ${prop.text}`)}
                sx={paginationLink}
              >
                {prop.text}
              </Button>
            )}
          </li>
        )
      })}
    </ul>
  )
}
export default CT_Pagination
