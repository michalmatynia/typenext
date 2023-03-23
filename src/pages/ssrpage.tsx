import { Button, Typography } from '@mui/material'
import { GetServerSidePropsContext } from 'next'
import { FC } from 'react'
import StyledEmotionButton from '../../components/ui/emotionui/StyledEmotionButton'

// Example page on how to Server Side Render Components

const SSRPage: FC = () => {
  return (
    <>
      <Typography variant="h4">Welcome to the server!</Typography>
      <Button type="button" variant="contained" color="primary">
        Server Rendered Button
      </Button>
      <StyledEmotionButton />
    </>
  )
}

export const getServerSideProps = (_: GetServerSidePropsContext) => {
  return {
    props: {},
  }
}

export default SSRPage
