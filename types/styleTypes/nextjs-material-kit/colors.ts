// import { OverridableStringUnion } from '@mui/types'
// import { ButtonPropsColorOverrides } from '@mui/material/Button'
/* EXAMPLE CODE 
bardziej zaawansowane type
*/

// type ActionButtonProps = Omit<ButtonProps, 'variant'> & {
//   component?: ElementType,
//   [key:string]: string,
// }

// "primary" | "secondary" | "success" | "error" | "info" | "warning",
export type BasicColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'rose'

export type InfoAreaColor = BasicColor | 'gray'

export type AllowedColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'transparent'
  | 'white'
  | 'rose'
  | 'dark'

export type AppBarColorSet =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'default'
  | 'transparent'

export type SocialMediaAllowedColor =
  | 'facebook'
  | 'twitter'
  | 'google'
  | 'github'

export type ExtendedAllowedColor =
  | Omit<AllowedColor, 'dark'>
  | SocialMediaAllowedColor

// export type ButtonColors = OverridableStringUnion<
//   'danger',
//   ButtonPropsColorOverrides
// > &
//   OverridableStringUnion<
//     | 'inherit'
//     | 'primary'
//     | 'secondary'
//     | 'success'
//     | 'error'
//     | 'info'
//     | 'warning',
//     ButtonPropsColorOverrides
//   >
