import React, { FC } from 'react'

import styles from '../../../../../styles/jss/nextjs-material-kit/components/cardBodyStyle.js'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'
import CT_BasicComponent from '@lib/component-helpers/nextjs-material-kit/constructComponent'

const CT_CardBody: FC<BasicComponentProps> = (props): React.ReactElement => {
  return CT_BasicComponent(props, styles.cardBody)
}

export default CT_CardBody
