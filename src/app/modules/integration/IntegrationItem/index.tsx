import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'

interface Items {
  img: string
  connected: boolean
  description: string
}

const data: Items[] = [
  {
    img: '/media/technology/Angular.png',
    connected: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae cumque deleniti\n' +
      '            dolore hic impedit itaque perspiciatis quaerat quos totam.',
  },
  {
    img: '/media/technology/Html5.png',
    connected: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae cumque deleniti\n' +
      '            dolore hic impedit itaque perspiciatis quaerat quos totam.',
  },
  {
    img: '/media/technology/React.png',
    connected: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae cumque deleniti\n' +
      '            dolore hic impedit itaque perspiciatis quaerat quos totam.',
  },
  {
    img: '/media/technology/VueJS.png',
    connected: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae cumque deleniti\n' +
      '            dolore hic impedit itaque perspiciatis quaerat quos totam.',
  },
  {
    img: '/media/technology/Html5.png',
    connected: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae cumque deleniti\n' +
      '            dolore hic impedit itaque perspiciatis quaerat quos totam.',
  },
  {
    img: '/media/technology/React.png',
    connected: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae cumque deleniti\n' +
      '            dolore hic impedit itaque perspiciatis quaerat quos totam.',
  },
  {
    img: '/media/technology/Angular.png',
    connected: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae cumque deleniti\n' +
      '            dolore hic impedit itaque perspiciatis quaerat quos totam.',
  },
  {
    img: '/media/technology/Html5.png',
    connected: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae cumque deleniti\n' +
      '            dolore hic impedit itaque perspiciatis quaerat quos totam.',
  },
  {
    img: '/media/technology/React.png',
    connected: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae cumque deleniti\n' +
      '            dolore hic impedit itaque perspiciatis quaerat quos totam.',
  },
]

const IntegrationItem: FC = () => {
  return (
    <div className={'d-flex justify-content-center'}>
      {data.map((value) => (
        <div className={'card  mx-5 p-5'}>
          <div className={'d-flex justify-content-between align-items-center'}>
            <img
              // className={'w-10 h-10'}
              src={toAbsoluteUrl(value.img)}
              alt='angular'
            />
            <button className={`btn ${value.connected ? 'btn-success' : 'btn-light'}btn-sm`}>
              {value.img ? 'Connected' : 'Connect'}
            </button>
          </div>
          <div className={'my-5'}>
            <p>{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default IntegrationItem
