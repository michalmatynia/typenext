import React, { FC } from 'react'

import styles from '../../../../../styles/jss/nextjs-material-kit/components/cardFooterStyle.js'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'
import CT_BasicComponent from '@lib/component-helpers/nextjs-material-kit/constructComponent'

const CT_CardFooter: FC<BasicComponentProps> = (props): React.ReactElement => {
  return CT_BasicComponent(props, styles.cardFooter)
}

export default CT_CardFooter
