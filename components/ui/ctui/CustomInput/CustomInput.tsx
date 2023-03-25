import React, { CSSProperties, FC, ReactNode } from 'react'
import { FormControl, InputLabel, Input } from '@mui/material'

import stylesUntyped from '../../../..//styles/jss/nextjs-material-kit/components/customInputStyle.js'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'

interface CustomInputProps {
  labelText?: ReactNode
  labelProps?: object
  id?: string
  formControlProps?: object
  inputRootCustomClasses?: object
  error?: boolean
  success?: boolean
  white?: boolean
  formControlClasses?: string
  inputProps?: object
  inputStyleProps?: object
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
type Props = CustomInputProps & BasicComponentProps

const CT_CustomInput: FC<Props> = (props): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }

  const {
    styleProps,
    error,
    success,
    formControlProps,
    labelText,
    labelProps,
    id,
    white,
    inputRootCustomClasses,
    inputProps,
    inputStyleProps,
    onChange,
  } = props

  const labelClasses = {
    ...(error && styles.labelRootError),
    ...(success && !error && styles.labelRootSuccess),
  }

  const underlineClasses = {
    ...styles.underline,
    ...(error && styles.underlineError),
    ...(success && !error && styles.underlineSuccess),
    ...(white && styles.whiteUnderline),
  }

  const marginTop = {
    ...(inputRootCustomClasses !== undefined && inputRootCustomClasses),
  }

  const inputClasses = {
    ...styles.input,
    ...(white && styles.whiteInput),
  }

  let formControlClasses = {}
  if (formControlProps !== undefined && 'className' in formControlProps) {
    formControlClasses = {
      ...(formControlProps.className as CSSProperties),
      ...styles.formControl,
    }
  } else {
    formControlClasses = styles.formControl
  }

  return (
    <FormControl sx={{ ...styleProps, ...formControlClasses }}>
      {labelText !== undefined ? (
        <InputLabel
          sx={{ ...styles.labelRoot, ...labelClasses }}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        sx={{
          // Styles for the root state
          '&.MuiInput-input': inputClasses,
          '&.MuiInput-root': marginTop,
          '&.MuiInput-underline': underlineClasses,
          '&.Mui-disabled': styles.disabled,
          ...inputStyleProps,
        }}
        onChange={onChange}
        id={id}
        {...inputProps}
      />
    </FormControl>
  )
}

export default CT_CustomInput
