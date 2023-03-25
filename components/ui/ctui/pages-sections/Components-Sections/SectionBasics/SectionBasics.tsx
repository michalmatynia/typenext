import React, { CSSProperties, useState, useEffect, FC } from 'react'
import {
  CT_GridContainer,
  CT_GridItem,
  CT_Badge,
  CT_CustomInput,
  CT_CustomButton,
  CT_CustomLinearProgress,
  CT_Paginations,
} from '@components/ui'
import stylesUntyped from '../../../../../../styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js'
import {
  Box,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Radio,
  Switch,
} from '@mui/material'
import { create } from 'nouislider'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PeopleIcon from '@mui/icons-material/People'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Check } from '@mui/icons-material'

const CT_SectionBasics: FC = (): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const [checked, setChecked] = useState([24, 22])
  const [selectedEnabled, setSelectedEnabled] = useState('b')
  const [checkedA, setCheckedA] = useState(true)
  const [checkedB, setCheckedB] = useState(false)

  useEffect(() => {
    if (
      !document
        .getElementById('sliderRegular')
        .classList.contains('noUi-target')
    ) {
      create(document.getElementById('sliderRegular'), {
        start: [40],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 },
      })
    }
    if (
      !document.getElementById('sliderDouble').classList.contains('noUi-target')
    ) {
      create(document.getElementById('sliderDouble'), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      })
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return function cleanup() {}
  })
  const handleToggle = (value: number) => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
  }

  return (
    <Box sx={{ ...styles.sections }}>
      <Box sx={{ ...styles.container }}>
        <Box sx={{ ...styles.title }}>
          <h2>Basic Elements</h2>
        </Box>
        <div id="buttons">
          <Box sx={{ ...styles.title }}>
            <h3>
              Buttons
              <br />
              <small>Pick your style</small>
            </h3>
          </Box>

          <CT_GridContainer justifyContent="center">
            <CT_GridItem xs={12} sm={12} md={8}>
              <CT_CustomButton ct_color="primary">Default</CT_CustomButton>
              <CT_CustomButton ct_color="primary" round>
                round
              </CT_CustomButton>
              <CT_CustomButton ct_color="primary" round>
                <FavoriteIcon sx={{ ...styles.icons }} /> with icon
              </CT_CustomButton>
              <CT_CustomButton justIcon round ct_color="primary">
                <FavoriteIcon sx={{ ...styles.icons }} />
              </CT_CustomButton>
              <CT_CustomButton ct_color="primary" simple>
                simple
              </CT_CustomButton>
            </CT_GridItem>
          </CT_GridContainer>
          <Box sx={{ ...styles.title }}>
            <h3>
              <small>Pick your size</small>
            </h3>
          </Box>
          <CT_GridContainer justifyContent="center">
            <CT_GridItem xs={12} sm={12} md={8}>
              <CT_CustomButton ct_color="primary" ct_size="sm">
                Small
              </CT_CustomButton>
              <CT_CustomButton ct_color="primary">Regular</CT_CustomButton>
              <CT_CustomButton ct_color="primary" ct_size="lg">
                Large
              </CT_CustomButton>
            </CT_GridItem>
          </CT_GridContainer>
          <Box sx={{ ...styles.title }}>
            <h3>
              <small>Pick your color</small>
            </h3>
          </Box>
          <CT_GridContainer justifyContent="center">
            <CT_GridItem xs={12} sm={12} md={8}>
              <CT_CustomButton>Default</CT_CustomButton>
              <CT_CustomButton ct_color="primary">Primary</CT_CustomButton>
              <CT_CustomButton ct_color="info">Info</CT_CustomButton>
              <CT_CustomButton ct_color="success">Success</CT_CustomButton>
              <CT_CustomButton ct_color="warning">Warning</CT_CustomButton>
              <CT_CustomButton ct_color="danger">Danger</CT_CustomButton>
              <CT_CustomButton ct_color="rose">Rose</CT_CustomButton>
            </CT_GridItem>
          </CT_GridContainer>
        </div>
        <Box sx={{ ...styles.space50 }} />
        <div id="inputs">
          <Box sx={{ ...styles.title }}>
            <h3>Inputs</h3>
          </Box>
          <CT_GridContainer>
            <CT_GridItem xs={12} sm={4} md={4} lg={3}>
              <CT_CustomInput
                id="regular"
                inputProps={{ placeholder: 'Regular' }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </CT_GridItem>
            <CT_GridItem xs={12} sm={4} md={4} lg={3}>
              <CT_CustomInput
                id="float"
                labelText="With floating label"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </CT_GridItem>
            <CT_GridItem xs={12} sm={4} md={4} lg={3}>
              <CT_CustomInput
                id="success"
                labelText="Success input"
                success
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </CT_GridItem>
            <CT_GridItem xs={12} sm={4} md={4} lg={3}>
              <CT_CustomInput
                id="error"
                labelText="Error input"
                error
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </CT_GridItem>
            <CT_GridItem xs={12} sm={4} md={4} lg={3}>
              <CT_CustomInput
                id="material"
                labelText="With material Icons"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PeopleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </CT_GridItem>
            <CT_GridItem xs={12} sm={4} md={4} lg={3}>
              <CT_CustomInput
                id="font-awesome"
                labelText="With Font Awesome Icons"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-users" />
                    </InputAdornment>
                  ),
                }}
              />
            </CT_GridItem>
          </CT_GridContainer>
        </div>
        <Box sx={{ ...styles.space70 }} />
        <div id="checkRadios">
          <CT_GridContainer>
            <CT_GridItem xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ ...styles.title }}>
                <h3>Checkboxes</h3>
              </Box>
              <Box
                sx={{
                  ...styles.checkboxAndRadio,
                  ...styles.checkboxAndRadioHorizontal,
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(21)}
                      checkedIcon={<Check sx={styles.checkedIcon} />}
                      icon={<Check sx={styles.uncheckedIcon} />}
                      sx={{
                        checked: styles.checked,
                        root: styles.checkRoot,
                      }}
                    />
                  }
                  sx={{ label: styles.label, root: styles.labelRoot }}
                  label="Unchecked"
                />
              </Box>
              <Box
                sx={{
                  ...styles.checkboxAndRadio,
                  ...styles.checkboxAndRadioHorizontal,
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(22)}
                      checked={checked.indexOf(22) !== -1 ? true : false}
                      checkedIcon={<Check sx={styles.checkedIcon} />}
                      icon={<Check sx={styles.uncheckedIcon} />}
                      sx={{ checked: styles.checked, root: styles.checkRoot }}
                    />
                  }
                  sx={{ label: styles.label, root: styles.labelRoot }}
                  label="Checked"
                />
              </Box>
              <Box
                sx={{
                  ...styles.checkboxAndRadio,
                  ...styles.checkboxAndRadioHorizontal,
                }}
              >
                <FormControlLabel
                  disabled
                  control={
                    <Checkbox
                      tabIndex={-1}
                      checkedIcon={<Check sx={styles.checkedIcon} />}
                      icon={<Check sx={styles.uncheckedIcon} />}
                      sx={{
                        checked: styles.checked,
                        root: styles.checkRoot,
                      }}
                    />
                  }
                  sx={{
                    label: styles.label,
                    disabled: styles.disabledCheckboxAndRadio,
                    root: styles.labelRoot,
                  }}
                  label="Disabled Unchecked"
                />
              </Box>
              <Box
                sx={{
                  ...styles.checkboxAndRadio,
                  ...styles.checkboxAndRadioHorizontal,
                }}
              >
                <FormControlLabel
                  disabled
                  control={
                    <Checkbox
                      tabIndex={-1}
                      checked={checked.indexOf(24) !== -1 ? true : false}
                      checkedIcon={<Check sx={styles.checkedIcon} />}
                      icon={<Check sx={styles.uncheckedIcon} />}
                      sx={{
                        checked: styles.checked,
                        root: styles.checkRoot,
                      }}
                    />
                  }
                  sx={{
                    label: styles.label,
                    disabled: styles.disabledCheckboxAndRadio,
                    root: styles.labelRoot,
                  }}
                  label="Disabled Checked"
                />
              </Box>
            </CT_GridItem>
            <CT_GridItem xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ ...styles.title }}>
                <h3>Radio Buttons</h3>
              </Box>
              <Box
                sx={{
                  ...styles.checkboxAndRadio,
                  ...styles.checkboxAndRadioHorizontal,
                }}
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === 'a'}
                      onChange={() => setSelectedEnabled('a')}
                      value="a"
                      name="radio button enabled"
                      aria-label="A"
                      icon={
                        <FiberManualRecordIcon sx={styles.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecordIcon sx={styles.radioChecked} />
                      }
                      sx={{
                        checked: styles.radio,
                        root: styles.radioRoot,
                      }}
                    />
                  }
                  sx={{
                    label: styles.label,
                    root: styles.labelRoot,
                  }}
                  label="First Radio"
                />
              </Box>
              <Box
                sx={{
                  ...styles.checkboxAndRadio,
                  ...styles.checkboxAndRadioHorizontal,
                }}
              >
                {' '}
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === 'b'}
                      onChange={() => setSelectedEnabled('b')}
                      value="b"
                      name="radio button enabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecordIcon sx={styles.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecordIcon sx={styles.radioChecked} />
                      }
                      sx={{
                        checked: styles.radio,
                        root: styles.radioRoot,
                      }}
                    />
                  }
                  sx={{
                    label: styles.label,
                    root: styles.labelRoot,
                  }}
                  label="Second Radio"
                />
              </Box>
              <Box
                sx={{
                  ...styles.checkboxAndRadio,
                  ...styles.checkboxAndRadioHorizontal,
                }}
              >
                <FormControlLabel
                  disabled
                  control={
                    <Radio
                      checked={false}
                      value="a"
                      name="radio button disabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecordIcon sx={styles.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecordIcon sx={styles.radioChecked} />
                      }
                      sx={{
                        checked: styles.radio,
                        disabled: styles.disabledCheckboxAndRadio,
                        root: styles.radioRoot,
                      }}
                    />
                  }
                  sx={{
                    label: styles.label,
                    root: styles.labelRoot,
                  }}
                  label="Disabled Unchecked Radio"
                />
              </Box>
              <Box
                sx={{
                  ...styles.checkboxAndRadio,
                  ...styles.checkboxAndRadioHorizontal,
                }}
              >
                <FormControlLabel
                  disabled
                  control={
                    <Radio
                      checked={true}
                      value="b"
                      name="radio button disabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecordIcon sx={styles.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecordIcon sx={styles.radioChecked} />
                      }
                      sx={{
                        checked: styles.radio,
                        disabled: styles.disabledCheckboxAndRadio,
                        root: styles.radioRoot,
                      }}
                    />
                  }
                  sx={{ label: styles.label, root: styles.labelRoot }}
                  label="Disabled Checked Radio"
                />
              </Box>
            </CT_GridItem>
            <CT_GridItem xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ ...styles.title }}>
                <h3>Toggle Buttons</h3>
              </Box>
              <>
                <FormControlLabel
                  control={
                    <Switch
                      checked={checkedA}
                      onChange={(event) => setCheckedA(event.target.checked)}
                      value="checkedA"
                      sx={{
                        switchBase: styles.switchBase,
                        checked: styles.switchChecked,
                        thumb: styles.switchIcon,
                        track: styles.switchBar,
                      }}
                    />
                  }
                  sx={{
                    label: styles.label,
                  }}
                  label="Toggle is on"
                />
              </>
              <>
                <FormControlLabel
                  control={
                    <Switch
                      checked={checkedB}
                      onChange={(event) => setCheckedB(event.target.checked)}
                      value="checkedB"
                      sx={{
                        switchBase: styles.switchBase,
                        checked: styles.switchChecked,
                        thumb: styles.switchIcon,
                        track: styles.switchBar,
                      }}
                    />
                  }
                  sx={{
                    label: styles.label,
                  }}
                  label="Toggle is off"
                />
              </>
            </CT_GridItem>
          </CT_GridContainer>
        </div>
        <Box sx={{ ...styles.space70 }} />
        <div id="progress">
          <CT_GridContainer>
            <CT_GridItem xs={12} sm={12} md={6}>
              <Box sx={{ ...styles.title }}>
                <h3>Progress Bars</h3>
              </Box>
              <CT_CustomLinearProgress
                variant="determinate"
                color="primary"
                value={30}
              />
              <CT_CustomLinearProgress
                variant="determinate"
                color="info"
                value={60}
              />
              <CT_CustomLinearProgress
                variant="determinate"
                color="success"
                value={100}
                style={{ width: '35%', display: 'inline-block' }}
              />
              <CT_CustomLinearProgress
                variant="determinate"
                color="warning"
                value={100}
                style={{ width: '20%', display: 'inline-block' }}
              />
              <CT_CustomLinearProgress
                variant="determinate"
                color="danger"
                value={25}
                style={{ width: '45%', display: 'inline-block' }}
              />
            </CT_GridItem>
            <CT_GridItem xs={12} sm={12} md={6}>
              <Box sx={{ ...styles.title }}>
                <h3>Pagination</h3>
              </Box>
              <CT_Paginations
                pages={[
                  { text: 1 },
                  { text: '...' },
                  { text: 5 },
                  { text: 6 },
                  { active: true, text: 7 },
                  { text: 8 },
                  { text: 9 },
                  { text: '...' },
                  { text: 12 },
                ]}
              />
              <CT_Paginations
                pages={[
                  { text: 'PREV' },
                  { text: 1 },
                  { text: 2 },
                  { active: true, text: 3 },
                  { text: 4 },
                  { text: 5 },
                  { text: 'NEXT' },
                ]}
                color="info"
              />
            </CT_GridItem>
          </CT_GridContainer>
        </div>
        <div id="sliders">
          <CT_GridContainer>
            <CT_GridItem xs={12} sm={12} md={6}>
              <Box sx={{ ...styles.title }}>
                <h3>Sliders</h3>
              </Box>
              <div id="sliderRegular" className="slider-primary" />
              <br />
              <div id="sliderDouble" className="slider-info" />
            </CT_GridItem>
            <CT_GridItem xs={12} sm={12} md={6}>
              <Box sx={{ ...styles.title }}>
                <h3>Badges</h3>
              </Box>
              <CT_Badge>default</CT_Badge>
              <CT_Badge color="primary">primary</CT_Badge>
              <CT_Badge color="info">info</CT_Badge>
              <CT_Badge color="success">success</CT_Badge>
              <CT_Badge color="warning">warning</CT_Badge>
              <CT_Badge color="danger">danger</CT_Badge>
              <CT_Badge color="rose">rose</CT_Badge>
            </CT_GridItem>
          </CT_GridContainer>
        </div>
      </Box>
    </Box>
  )
}

export default CT_SectionBasics
