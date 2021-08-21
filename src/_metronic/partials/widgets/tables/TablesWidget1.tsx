/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const TablesWidget1: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Homeworks</span>
          <span className='text-muted fw-bold fs-7'/>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG
              path='/media/icons/duotone/Layout/Layout-4-blocks-2.svg'
              className='svg-icon-2'
            />
          </button>
          {/* begin::Menu 1 */}
          <Dropdown1 />
          {/* end::Menu 1 */}
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-5'>
            {/* begin::Table head */}
            <thead>
              <tr>
                <th className='p-0 w-50px'/>
                <th className='p-0 min-w-200px'/>
                <th className='p-0 min-w-100px'/>
                <th className='p-0 min-w-40px'/>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <th>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('/media/svg/brand-logos/plurk.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    Filter & reduce arrays method
                  </a>
                  <span className='text-muted fw-bold d-block fs-7'>Successful Fellas</span>
                </td>
                <td>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-muted me-2 fs-7 fw-bold'>70%</span>
                    </div>
                    <div className='progress h-6px w-100'>
                      <div
                        className='progress-bar bg-warning'
                        role='progressbar'
                        style={{width: '70%'}}
                      />
                    </div>
                  </div>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                    <KTSVG
                      path='/media/icons/duotone/Navigation/Arrow-right.svg'
                      className='svg-icon-2'
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <th>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('/media/svg/brand-logos/telegram.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    JS Functions
                  </a>
                  <span className='text-muted fw-bold d-block fs-7'>Most Successful</span>
                </td>
                <td>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-muted me-2 fs-7 fw-bold'>50%</span>
                    </div>
                    <div className='progress h-6px w-100'>
                      <div
                        className='progress-bar bg-danger'
                        role='progressbar'
                        style={{width: '50%'}}
                      />
                    </div>
                  </div>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                    <KTSVG
                      path='/media/icons/duotone/Navigation/Arrow-right.svg'
                      className='svg-icon-2'
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <th>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('/media/svg/brand-logos/vimeo.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    CSS Advanced
                  </a>
                  <span className='text-muted fw-bold d-block fs-7'>Awesome Users</span>
                </td>
                <td>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-muted me-2 fs-7 fw-bold'>80%</span>
                    </div>
                    <div className='progress h-6px w-100'>
                      <div
                        className='progress-bar bg-success'
                        role='progressbar'
                        style={{width: '80%'}}
                      />
                    </div>
                  </div>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                    <KTSVG
                      path='/media/icons/duotone/Navigation/Arrow-right.svg'
                      className='svg-icon-2'
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <th>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('/media/svg/brand-logos/bebo.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    JS Variables
                  </a>
                  <span className='text-muted fw-bold d-block fs-7'>Best Customers</span>
                </td>
                <td>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-muted me-2 fs-7 fw-bold'>90%</span>
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
                <td className='text-end'>
                  <a href='#' className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                    <KTSVG
                      path='/media/icons/duotone/Navigation/Arrow-right.svg'
                      className='svg-icon-2'
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <th>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label'>
                      <img
                        src={toAbsoluteUrl('/media/svg/brand-logos/kickstarter.svg')}
                        className='h-50 align-self-center'
                        alt=''
                      />
                    </span>
                  </div>
                </th>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    JS Data-types
                  </a>
                  <span className='text-muted fw-bold d-block fs-7'>Amazing Templates</span>
                </td>
                <td>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-muted me-2 fs-7 fw-bold'>70%</span>
                    </div>
                    <div className='progress h-6px w-100'>
                      <div
                        className='progress-bar bg-warning'
                        role='progressbar'
                        style={{width: '70%'}}
                      />
                    </div>
                  </div>
                </td>
                <td className='text-end'>
                  <a href='#' className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                    <KTSVG
                      path='/media/icons/duotone/Navigation/Arrow-right.svg'
                      className='svg-icon-2'
                    />
                  </a>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
    </div>
  )
}

export {TablesWidget1}
