import { ThemeOptions } from '@mui/material/styles'
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true
  }
}
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true // removes the `xs` breakpoint
    sm: true
    md: true
    lg: true
    xl: true
    mobile: true // adds the `mobile` breakpoint
    tablet: true
    laptop: true
    desktop: true
  }
}
const lightThemeOptions: ThemeOptions = {
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: (themeParam) => `
    //   body {
    //     color: #3c4858;
    //     font-weight: 300;
    //   }
    // `,
    // },
    // Name of the component
    // MuiAppBar: {
    //   defaultProps: {
    //     color: 'transparent',
    //   },
    //   styleOverrides: {},
    // },
    // MuiButtonBase: {
    //   defaultProps: {
    //     // The props to change the default for.
    //     disableRipple: true, // No more ripple, on the whole application 💣!
    //   },
    // },
    // MuiButton: {
    //   variants: [
    //     {
    //       props: { variant: 'dashed' },
    //       style: {
    //         textTransform: 'none',
    //         // border: `2px dashed ${defaultTheme.palette.primary.main}`,
    //         // color: 'defaultTheme.palette.primary.main',
    //       },
    //     },
    //     {
    //       props: { variant: 'dashed', color: 'secondary' },
    //       style: {
    //         // border: `2px dashed ${defaultTheme.palette.secondary.main}`,
    //         // color: defaultTheme.palette.secondary.main,
    //       },
    //     },
    //     {
    //       props: { variant: 'dashed', size: 'large' },
    //       style: {
    //         borderWidth: 4,
    //       },
    //     },
    //     {
    //       props: { variant: 'dashed', color: 'secondary', size: 'large' },
    //       style: {
    //         fontSize: 18,
    //       },
    //     },
    //   ],
    // },
  },
  palette: {
    mode: 'light',
    // action: {
    //   hover: 'secondary', // can delete this
    // },
    // success: {
    //   main: '#FF', //
    // },
    // background: {
    //   default: '#e5e5e5',
    // },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
}

export default lightThemeOptions
