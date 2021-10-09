import {FC} from 'react'
import {PulseChart} from './PulseChart'

const PulseItems: FC = () => {
  return (
    <div className={'d-flex justify-content-center'}>
      <PulseChart className={'col-8'} />
    </div>
  )
}

export default PulseItems
