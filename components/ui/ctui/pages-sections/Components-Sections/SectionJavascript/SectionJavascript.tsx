/** @jsxRuntime classic */

/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { FC, CSSProperties, useState, forwardRef } from 'react'
import { CT_GridContainer, CT_GridItem, CT_CustomButton } from '@components/ui'
import Datetime from 'react-datetime'
import stylesUntyped from '../../../../../../styles/jss/nextjs-material-kit/pages/componentsSections/javascriptStyles.js'
import {
  Box,
  Slide,
  SlideProps,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputLabel,
  FormControl,
  Tooltip,
  Popover,
} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import CloseIcon from '@mui/icons-material/Close'
const Transition = forwardRef<HTMLDivElement, SlideProps>(function Transition(
  props,
  ref
) {
  return (
    <Slide direction="down" ref={ref} {...props}>
      {props.children}
    </Slide>
  )
})

Transition.displayName = 'Transition'

type AnchorElType =
  | (EventTarget & HTMLAnchorElement)
  | (EventTarget & HTMLDivElement)
  | React.MouseEvent<HTMLButtonElement>
  | null

const CT_SectionJavascript: FC = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const [anchorElLeft, setAnchorElLeft] = useState<AnchorElType>(null)
  const [anchorElTop, setAnchorElTop] = useState<AnchorElType>(null)
  const [anchorElBottom, setAnchorElBottom] = useState<AnchorElType>(null)
  const [anchorElRight, setAnchorElRight] = useState<AnchorElType>(null)
  const [classicModal, setClassicModal] = useState(false)

  return (
    <Box sx={styles.section}>
      <Box sx={styles.container}>
        <Box sx={styles.title}>
          <h2>Javascript components</h2>
        </Box>
        <CT_GridContainer>
          <CT_GridItem xs={12} sm={12} md={6}>
            <Box sx={styles.title}>
              <h3>Modal</h3>
            </Box>
            <CT_GridContainer>
              <CT_GridItem xs={12} sm={12} md={6} lg={4}>
                <CT_CustomButton
                  ct_color="primary"
                  block
                  onClick={() => setClassicModal(true)}
                >
                  <LibraryBooksIcon sx={styles.icon} />
                  Classic
                </CT_CustomButton>
                <Dialog
                  sx={{
                    ...styles.center,
                    '&.MuiDialog-paper': styles.modal,
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    // disableTypography
                    sx={styles.modalHeader}
                  >
                    <IconButton
                      sx={styles.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setClassicModal(false)}
                    >
                      <CloseIcon sx={styles.modalClose} />
                    </IconButton>
                    <h4 css={css({ ...styles.modalTitle })}>Modal title</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    sx={styles.modalBody}
                  >
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean. A small
                      river named Duden flows by their place and supplies it
                      with the necessary regelialia. It is a paradisematic
                      country, in which roasted parts of sentences fly into your
                      mouth. Even the all-powerful Pointing has no control about
                      the blind texts it is an almost unorthographic life One
                      day however a small line of blind text by the name of
                      Lorem Ipsum decided to leave for the far World of Grammar.
                    </p>
                  </DialogContent>
                  <DialogActions sx={styles.modalFooter}>
                    <CT_CustomButton simple ct_color="transparent">
                      Nice Button
                    </CT_CustomButton>
                    <CT_CustomButton
                      onClick={() => setClassicModal(false)}
                      simple
                      ct_color="danger"
                    >
                      Close
                    </CT_CustomButton>
                  </DialogActions>
                </Dialog>
              </CT_GridItem>
            </CT_GridContainer>
            <CT_GridItem xs={12} sm={12} md={12}>
              <Box sx={styles.title}>
                <h3>Datetime Picker</h3>
              </Box>

              <CT_GridContainer>
                <CT_GridItem xs={12} sm={12} md={6}>
                  <InputLabel sx={styles.label}>Datetime Picker</InputLabel>
                  <br />
                  <FormControl fullWidth>
                    <Datetime
                      inputProps={{ placeholder: 'Datetime Picker Here' }}
                    />
                  </FormControl>
                </CT_GridItem>
              </CT_GridContainer>
            </CT_GridItem>
          </CT_GridItem>

          <CT_GridItem xs={12} sm={12} md={6}>
            <Box sx={styles.title}>
              <h3>Popovers</h3>
            </Box>
            <CT_CustomButton
              onClick={(event) =>
                setAnchorElLeft(event.currentTarget as HTMLAnchorElement)
              }
            >
              On left
            </CT_CustomButton>
            <Popover
              sx={{
                '&.MuiPopover-paper': styles.popover,
              }}
              open={Boolean(anchorElLeft)}
              anchorEl={anchorElLeft as HTMLAnchorElement}
              onClose={() => setAnchorElLeft(null)}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'right',
              }}
            >
              <h3 css={css({ ...styles.popoverHeader })}>Popover on left</h3>
              <Box sx={styles.popoverBody}>
                Here will be some very useful information about his popover.
                Here will be some very useful information about his popover.
              </Box>
            </Popover>
            <CT_CustomButton
              onClick={(event) =>
                setAnchorElTop(event.currentTarget as HTMLAnchorElement)
              }
            >
              On top
            </CT_CustomButton>
            <Popover
              sx={{
                '&.MuiPopover-paper': styles.popover,
              }}
              open={Boolean(anchorElTop)}
              anchorEl={anchorElTop as HTMLAnchorElement}
              onClose={() => setAnchorElTop(null)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
              <h3 css={css({ ...styles.popoverHeader })}>Popover on top</h3>
              <Box sx={styles.popoverBody}>
                Here will be some very useful information about his popover.
              </Box>
            </Popover>
            <CT_CustomButton
              onClick={(event) =>
                setAnchorElBottom(event.currentTarget as HTMLAnchorElement)
              }
            >
              On bottom
            </CT_CustomButton>
            <Popover
              sx={{
                '&.MuiPopover-paper': styles.popover,
              }}
              open={Boolean(anchorElBottom)}
              anchorEl={anchorElBottom as HTMLAnchorElement}
              onClose={() => setAnchorElBottom(null)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <h3 css={css({ ...styles.popoverHeader })}>Popover on bottom</h3>
              <Box sx={styles.popoverBody}>
                Here will be some very useful information about his popover.
              </Box>
            </Popover>
            <CT_CustomButton
              onClick={(event) =>
                setAnchorElRight(event.currentTarget as HTMLAnchorElement)
              }
            >
              On right
            </CT_CustomButton>
            <Popover
              sx={{
                '&.MuiPopover-paper': styles.popover,
              }}
              open={Boolean(anchorElRight)}
              anchorEl={anchorElRight as HTMLAnchorElement}
              onClose={() => setAnchorElRight(null)}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'left',
              }}
            >
              <h3 css={css({ ...styles.popoverHeader })}>Popover on right</h3>
              <Box sx={styles.popoverBody}>
                Here will be some very useful information about his popover.
              </Box>
            </Popover>
            <br />
            <br />
            <Box sx={styles.title}>
              <h3>Tooltips</h3>
            </Box>
            <Tooltip
              id="tooltip-left"
              title="Tooltip on left"
              placement="left"
              sx={{ '&.MuiTooltip-tooltip': styles.tooltip }}
            >
              <CT_CustomButton>On left</CT_CustomButton>
            </Tooltip>
            <Tooltip
              id="tooltip-top"
              title="Tooltip on top"
              placement="top"
              sx={{ '&.MuiTooltip-tooltip': styles.tooltip }}
            >
              <CT_CustomButton>On top</CT_CustomButton>
            </Tooltip>
            <Tooltip
              id="tooltip-bottom"
              title="Tooltip on bottom"
              placement="bottom"
              sx={{ '&.MuiTooltip-tooltip': styles.tooltip }}
            >
              <CT_CustomButton>On bottom</CT_CustomButton>
            </Tooltip>
            <Tooltip
              id="tooltip-right"
              title="Tooltip on right"
              placement="right"
              sx={{ '&.MuiTooltip-tooltip': styles.tooltip }}
            >
              <CT_CustomButton>On right</CT_CustomButton>
            </Tooltip>
          </CT_GridItem>
        </CT_GridContainer>
        <Box sx={styles.title}>
          <h3>Carousel</h3>
        </Box>
      </Box>
    </Box>
  )
}

export default CT_SectionJavascript
