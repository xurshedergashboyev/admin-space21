import React, {FC} from 'react'
import DragAndDrop from './DragAndDrop'
import Card from './Card'
import './drag.css'

const DragApp: FC = () => {
  return (
    <div className={'flexbox'}>
      <DragAndDrop className={'board'}>
        <Card id={'card_1'} className='card' draggable='true'>
          <p>Card one</p>
        </Card>
      </DragAndDrop>
      <DragAndDrop className='board'>
        <Card id={'card_2'} className='card' draggable='true'>
          <p>Card two</p>
          <img
            src='https://cdn-media-1.freecodecamp.org/images/1*hPLhe5cqPbyE8Hi4CGQMYg.png'
            alt=''
          />
        </Card>
      </DragAndDrop>
    </div>
  )
}

export default DragApp
