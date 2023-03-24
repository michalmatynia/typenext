import {
  container,
  title,
} from '../../../../../styles/jss/nextjs-material-kit.js'

const carouselStyle = {
  section: {
    padding: '70px 0',
    textAlign: 'center',
  },

  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  description: {
    color: '#999',
  },
  container,
  marginAuto: {
    color: 'red',
    marginLeft: 'auto !important',
    marginRight: 'auto !important',
  },
}

export default carouselStyle
