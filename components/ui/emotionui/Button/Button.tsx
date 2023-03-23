/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { FC } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const buttonStyle = css({
  padding: '32px',
  backgroundColor: 'hotpink',
  fontSize: '24px',
  borderRadius: '4px',
  ':hover': {
    color: 'white',
  },
})

const EmotionButton: FC = () => {
  return <div css={buttonStyle}>Hover to change colorff</div>
}

export default EmotionButton
