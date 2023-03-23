import React, { CSSProperties, FC } from 'react'

import stylesUntyped from '../../../../../../styles/jss/nextjs-material-kit/pages/componentsSections/notificationsStyles.js'
import { Box } from '@mui/material'
import { CT_SnackbarContent, CT_Clearfix } from '@components/ui'
// // @material-ui/icons
import { Check, Warning } from '@mui/icons-material'

const CT_SectionNotifications: FC = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  return (
    <Box sx={{ ...styles.section }} id="notifications">
      <Box sx={{ ...styles.container }}>
        <Box sx={{ ...styles.title }}>
          <h2>Basic Elements</h2>
        </Box>
      </Box>
      <CT_SnackbarContent
        message={
          <span>
            <b>INFO ALERT:</b> You{"'"}ve got some friends nearby, stop looking
            at your phone and find them...
          </span>
        }
        close
        color="info"
        icon="info_outline"
      />
      <CT_SnackbarContent
        message={
          <span>
            <b>SUCCESS ALERT:</b> You{"'"}ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        }
        close
        color="success"
        icon={Check}
      />
      <CT_SnackbarContent
        message={
          <span>
            <b>WARNING ALERT:</b> You{"'"}ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        }
        close
        color="warning"
        icon={Warning}
      />
      <CT_SnackbarContent
        message={
          <span>
            <b>DANGER ALERT:</b> You{"'"}ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        }
        close
        color="danger"
        icon="info_outline"
      />
      <CT_Clearfix />
    </Box>
  )
}

export default CT_SectionNotifications
