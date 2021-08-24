/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Link} from 'react-router-dom'

type Props = {
  className: string
}

const TablesWidget9: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Requests</span>
          <span className='text-muted mt-1 fw-bold fs-7'>Over 150 requests</span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <Link to="/crafted/account/student/info"
            className='btn btn-sm btn-light-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_invite_friends'
          >
            <KTSVG path='/media/icons/duotone/Communication/Add-user.svg' className='svg-icon-3' />
            New Student
          </Link>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
            <tr className='fw-bolder text-muted'>
              <th className='w-25px'>
                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='1'
                    data-kt-check='true'
                    data-kt-check-target='.widget-9-check'
                  />
                </div>
              </th>
              <th className='min-w-150px'>Students</th>
              <th className='min-w-140px'>Duration</th>
              <th className='min-w-120px'>Price</th>
              <th className='min-w-120px'>Progress</th>
              <th className='min-w-100px text-end'>Actions</th>
            </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('/media/avatars/150-11.jpg')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                       <Link to="/crafted/account/student/info" className='text-dark fw-bolder text-hover-primary fs-6'>
                        Mahliyo
                      </Link>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        HTML, JS, ReactJS
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <Link to="/crafted/account/student/info" className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    6 months
                  </Link>
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span>
                </td>
                <td>
                  <Link to="/crafted/account/student/info" className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    599 000 sums
                  </Link>
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-muted me-2 fs-7 fw-bold'>3 months</span>
                    </div>
                    <div className='progress h-6px w-100'>
                      <div
                        className='progress-bar bg-primary'
                        role='progressbar'
                        style={{width: '50%'}}
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <Link to="/crafted/account/student/info"
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG
                        path='/media/icons/duotone/General/Settings-1.svg'
                        className='svg-icon-3'
                      />
                    </Link>
                    <Link to="/crafted/account/student/info"
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG
                        path='/media/icons/duotone/Communication/Write.svg'
                        className='svg-icon-3'
                      />
                    </Link>
                    <Link to="/crafted/account/student/info"
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                    >
                      <KTSVG path='/media/icons/duotone/General/Trash.svg' className='svg-icon-3' />
                    </Link>
                  </div>
                </td>
              </tr>
            <tr>
              <td>
                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-45px me-5'>
                    <img src={toAbsoluteUrl('/media/avatars/150-3.jpg')} alt='' />
                  </div>
                  <div className='d-flex justify-content-start flex-column'>
                     <Link to="/crafted/account/student/info" className='text-dark fw-bolder text-hover-primary fs-6'>
                      Maftuna
                    </Link>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                        Beginner, Elementary, Pre-Intermediate...
                      </span>
                  </div>
                </div>
              </td>
              <td>
                 <Link to="/crafted/account/student/info" className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                  3-4 months
                </Link>
                <span className='text-muted fw-bold text-muted d-block fs-7'>
                    Houses &amp; Hotels
                  </span>
              </td>
              <td>
                 <Link to="/crafted/account/student/info" className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                  229 000 sums
                </Link>
              </td>
              <td className='text-end'>
                <div className='d-flex flex-column w-100 me-2'>
                  <div className='d-flex flex-stack mb-2'>
                    <span className='text-muted me-2 fs-7 fw-bold'>2.5 months</span>
                  </div>
                  <div className='progress h-6px w-100'>
                    <div
                      className='progress-bar bg-danger'
                      role='progressbar'
                      style={{width: '70%'}}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex justify-content-end flex-shrink-0'>
                   <Link to="/crafted/account/student/info"
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG
                      path='/media/icons/duotone/General/Settings-1.svg'
                      className='svg-icon-3'
                    />
                  </Link>
                   <Link to="/crafted/account/student/info"
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG
                      path='/media/icons/duotone/Communication/Write.svg'
                      className='svg-icon-3'
                    />
                  </Link>
                   <Link to="/crafted/account/student/info"
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                  >
                    <KTSVG path='/media/icons/duotone/General/Trash.svg' className='svg-icon-3' />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-45px me-5'>
                    <img src={toAbsoluteUrl('/media/avatars/150-4.jpg')} alt='' />
                  </div>
                  <div className='d-flex justify-content-start flex-column'>
                     <Link to="/crafted/account/student/info" className='text-dark fw-bolder text-hover-primary fs-6'>
                      Maraim
                    </Link>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                        Adobe Photoshop, Illustrator
                      </span>
                  </div>
                </div>
              </td>
              <td>
                 <Link to="/crafted/account/student/info" className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                  6 months
                </Link>
                <span className='text-muted fw-bold text-muted d-block fs-7'>Transportation</span>
              </td>
              <td>
                 <Link to="/crafted/account/student/info" className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                  599 000 sums
                </Link>
              </td>
              <td className='text-end'>
                <div className='d-flex flex-column w-100 me-2'>
                  <div className='d-flex flex-stack mb-2'>
                    <span className='text-muted me-2 fs-7 fw-bold'>5 months</span>
                  </div>
                  <div className='progress h-6px w-100'>
                    <div
                      className='progress-bar bg-success'
                      role='progressbar'
                      style={{width: '90%'}}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex justify-content-end flex-shrink-0'>
                   <Link to="/crafted/account/student/info"
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG
                      path='/media/icons/duotone/General/Settings-1.svg'
                      className='svg-icon-3'
                    />
                  </Link>
                  <Link to="/crafted/account/student/info"
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG
                      path='/media/icons/duotone/Communication/Write.svg'
                      className='svg-icon-3'
                    />
                  </Link>
                  <Link to="/crafted/account/student/info"
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                  >
                    <KTSVG path='/media/icons/duotone/General/Trash.svg' className='svg-icon-3' />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-45px me-5'>
                    <img src={toAbsoluteUrl('/media/avatars/150-5.jpg')} alt='' />
                  </div>
                  <div className='d-flex justify-content-start flex-column'>
                     <Link to="/crafted/account/student/info" className='text-dark fw-bolder text-hover-primary fs-6'>
                      Mahliyo
                    </Link>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                        Telegram, Instagram
                      </span>
                  </div>
                </div>
              </td>
              <td>
                 <Link to="/crafted/account/student/info" className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                  2 months
                </Link>
                <span className='text-muted fw-bold text-muted d-block fs-7'>Insurance</span>
              </td>
              <td>
                 <Link to="/crafted/account/student/info" className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                  599 000 sums
                </Link>
              </td>
              <td className='text-end'>
                <div className='d-flex flex-column w-100 me-2'>
                  <div className='d-flex flex-stack mb-2'>
                    <span className='text-muted me-2 fs-7 fw-bold'>1 month</span>
                  </div>
                  <div className='progress h-6px w-100'>
                    <div
                      className='progress-bar bg-warning'
                      role='progressbar'
                      style={{width: '50%'}}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex justify-content-end flex-shrink-0'>
                  <Link to="/crafted/account/student/info"
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG
                      path='/media/icons/duotone/General/Settings-1.svg'
                      className='svg-icon-3'
                    />
                  </Link>
                  <Link to="/crafted/account/student/info"
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG
                      path='/media/icons/duotone/Communication/Write.svg'
                      className='svg-icon-3'
                    />
                  </Link>
                   <Link to="/crafted/account/student/info"
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                  >
                    <KTSVG path='/media/icons/duotone/General/Trash.svg' className='svg-icon-3' />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-45px me-5'>
                    <img src={toAbsoluteUrl('/media/avatars/150-6.jpg')} alt='' />
                  </div>
                  <div className='d-flex justify-content-start flex-column'>
                     <Link to="/crafted/account/student/info" className='text-dark fw-bolder text-hover-primary fs-6'>
                      Farrux
                    </Link>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                        Pre-IELTS, IELTS
                      </span>
                  </div>
                </div>
              </td>
              <td>
                 <Link to="/crafted/account/student/info" className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                  6 months
                </Link>
                <span className='text-muted fw-bold text-muted d-block fs-7'>Art Director</span>
              </td>
              <td>
                 <Link to="/crafted/account/student/info" className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                  1 000 000 sums
                </Link>
              </td>
              <td className='text-end'>
                <div className='d-flex flex-column w-100 me-2'>
                  <div className='d-flex flex-stack mb-2'>
                    <span className='text-muted me-2 fs-7 fw-bold'>2 months</span>
                  </div>
                  <div className='progress h-6px w-100'>
                    <div
                      className='progress-bar bg-info'
                      role='progressbar'
                      style={{width: '30%'}}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex justify-content-end flex-shrink-0'>
                  <Link to="/crafted/account/student/info"
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG
                      path='/media/icons/duotone/General/Settings-1.svg'
                      className='svg-icon-3'
                    />
                  </Link>
                  <Link to="/crafted/account/student/info"
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG
                      path='/media/icons/duotone/Communication/Write.svg'
                      className='svg-icon-3'
                    />
                  </Link>
                  <Link to="/crafted/account/student/info"
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                  >
                    <KTSVG path='/media/icons/duotone/General/Trash.svg' className='svg-icon-3' />
                  </Link>
                </div>
              </td>
            </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesWidget9}
