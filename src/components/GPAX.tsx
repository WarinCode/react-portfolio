import { ReactElement, FC } from 'react'
import { GPAXProps } from '../types/propTypes'
import { getClassName } from '../utils'

const GPAX: FC<GPAXProps> = ({ attributes, gpax }): ReactElement => {
  return (
    <span {...attributes} className={`font-k2d ${getClassName(attributes?.className)}`}>- เกรดเฉลี่ยสะสม <span className='text-lg font-bold'>{gpax}</span></span>
  )
}

export default GPAX