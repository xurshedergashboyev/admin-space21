import React, {FC} from 'react'
import {PulseChart} from './PulseChart'
import {OverlayTrigger, Tooltip} from 'react-bootstrap-v5'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {TaskUserIcon} from '../../taskManagement/components/TaskUserIcon'

const PulseItems: FC = () => {
  const users1: Array<TaskUserIcon> = [
    {name: 'Khurshed Ergashbaev', avatar: '/media/avatars/150-1.jpg'},
    {name: 'Muhammad Zakirov', avatar: '/media/avatars/150-2.jpg'},
    {name: 'Maraim Tukhtasunov', initials: 'P', color: 'primary'},
  ]
  return (
    <div className={'d-flex justify-content-center m-auto col-8'}>
      <div className={'col-12'}>
        <PulseChart className={'col-12'} />
        <div className={'d-flex justify-content-between my-15 align-items-center'}>
          <h1>October 9, 2021</h1>
          <div className={'d-flex'}>
            <form className='w-50 position-relative border border-light' autoComplete='off'>
              <span className='svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y'>
                <svg
                  width='24px'
                  height='24px'
                  viewBox='0 0 24 24'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  className='mh-50px'
                >
                  <g
                    id='Stockholm-icons-/-General-/-Search'
                    stroke='none'
                    strokeWidth='1'
                    fill='none'
                    fill-rule='evenodd'
                  >
                    <rect id='bound' x='0' y='0' width='24' height='24' />
                    <path
                      d='M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z'
                      id='Path-2'
                      fill='#000000'
                      fill-rule='nonzero'
                      opacity='0.3'
                    />
                    <path
                      d='M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z'
                      id='Path'
                      fill='#000000'
                      fill-rule='nonzero'
                    />
                  </g>
                </svg>
              </span>
              <input
                type='text'
                className='form-control form-control-solid px-15'
                name='search'
                placeholder='Search by username or email...'
              />
            </form>
            <a href='#' className='btn btn-sm btn-light'>
              <span className='svg-icon svg-icon-3'>
                <svg
                  width='24px'
                  height='24px'
                  viewBox='0 0 24 24'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mh-50px'
                >
                  <path
                    d='M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z'
                    id='Combined-Shape'
                    fill='#000000'
                    fill-rule='nonzero'
                    opacity='0.3'
                  />
                  <path
                    d='M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z'
                    id='Mask-Copy'
                    fill='#000000'
                    fill-rule='nonzero'
                  />
                </svg>
              </span>
              Show guests
            </a>
            <a href='#' className='btn btn-sm btn-light'>
              <span className='svg-icon svg-icon-3'>
                <svg
                  width='24px'
                  height='24px'
                  viewBox='0 0 24 24'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mh-50px'
                >
                  <path
                    d='M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z'
                    id='Combined-Shape'
                    fill='#000000'
                    fill-rule='nonzero'
                    opacity='0.3'
                  />
                  <path
                    d='M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z'
                    id='Mask-Copy'
                    fill='#000000'
                    fill-rule='nonzero'
                  />
                </svg>
              </span>
              Show details
            </a>
          </div>
        </div>
        <div>
          <h2> - Was online:</h2>
          {users1.map((user, index) => (
            <OverlayTrigger
              key={`${index}-${user.name}`}
              overlay={<Tooltip id={'tooltip-user-name'}>{user.name}</Tooltip>}
              placement={'bottom'}
            >
              <div className='symbol symbol-35px symbol-circle my-5'>
                {user.avatar && <img src={toAbsoluteUrl(user.avatar)} alt='Pic' />}
                {user.initials && (
                  <span className='symbol-label bg-primary text-inverse-primary fw-bolder'>
                    {user.initials}
                  </span>
                )}
              </div>
            </OverlayTrigger>
          ))}
          <h2> - Was offline:</h2>
          {users1.map((user, index) => (
            <OverlayTrigger
              key={`${index}-${user.name}`}
              overlay={<Tooltip id={'tooltip-user-name'}>{user.name}</Tooltip>}
              placement={'bottom'}
            >
              <div className='symbol symbol-35px symbol-circle my-5'>
                {user.avatar && (
                  <img
                    style={{filter: 'grayscale(100%)'}}
                    src={toAbsoluteUrl(user.avatar)}
                    alt='Pic'
                  />
                )}
                {user.initials && (
                  <span className='symbol-label bg-primary text-inverse-primary fw-bolder'>
                    {user.initials}
                  </span>
                )}
              </div>
            </OverlayTrigger>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PulseItems
