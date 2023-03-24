import { container } from '../../../../../styles/jss/nextjs-material-kit.js'

const workStyle = {
  section: {
    minHeight: '110vh',
    maxHeight: '1600px',
    overflow: 'hidden',
    padding: '70px 0',
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    margin: '0',
    border: '0',
    display: 'flex',
    alignItems: 'center',
    backgroundImage:
      "url('/img/milkbar/landingpage/contact/buildings_wall_abstract_black_white_1920x1200.jpg')",
  },
  container,
  description: {
    color: '#999',
    textAlign: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  textArea: {
    marginRight: '15px',
    marginLeft: '15px',
  },
  form: {
    margin: '0',
  },
  cardHeader: {
    width: 'auto',
    textAlign: 'center',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '-40px',
    padding: '20px 0',
    marginBottom: '15px',
  },
  cardFooter: {
    paddingTop: '0rem',
    border: '0',
    borderRadius: '6px',
    justifyContent: 'center !important',
  },
}

export default workStyle
