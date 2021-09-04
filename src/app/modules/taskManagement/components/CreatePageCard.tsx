import React, {FC, useState} from 'react'
import {TaskUsers} from './TaskUsers'
import {OverlayTrigger, Tooltip} from 'react-bootstrap-v5'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
// import spaceCreateImg from '../../../../../build/media/illustrations/checkout.png'

const CreatePageCard: FC = () => {
  const [activeColor, setActiveColor] = useState(false)

  const handleActive = () => {
    setActiveColor(!activeColor)
  }

  const colorArray = [
    'blue',
    'orange',
    'yellow',
    'red',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
    '#80B300',
    '#809900',
    '#E6B3B3',
    '#6680B3',
    '#66991A',
    '#FF99E6',
    '#CCFF1A',
    '#FF1A66',
    '#E6331A',
    '#33FFCC',
    '#66994D',
    '#B366CC',
    '#4D8000',
    '#B33300',
    '#CC80CC',
    '#66664D',
    '#991AFF',
    '#E666FF',
    '#4DB3FF',
    '#1AB399',
    '#E666B3',
    '#33991A',
    '#CC9999',
    '#B3B31A',
    '#00E680',
    '#4D8066',
    '#809980',
    '#E6FF80',
    '#1AFF33',
    '#999933',
    '#FF3380',
    '#CCCC00',
    '#66E64D',
    '#4D80CC',
    '#9900B3',
    '#E64D66',
    '#4DB380',
    '#FF4D4D',
    '#99E6E6',
    '#6666FF',
  ]

  return (
    // <>
    <div className='post d-flex flex-column-fluid' id='kt_post'>
      <div id='kt_content_container' className='container'>
        <div className='card'>
          <div className='card-body p-0'>
            <div className='card-px text-center py-20 my-10'>
              <h2 className='fs-2x fw-bolder mb-10'>Create Space!</h2>
              <p className='text-gray-400 fs-4 fw-bold mb-10'>
                Enjoy creating many spaces
                <br />
                DFKLSDJFKL:DJF:KLDF
              </p>
              <a
                href='#'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_add_customer'
              >
                Add Space
              </a>
            </div>
            <div className='text-center px-4'>
              {/*<img className='mw-100 mh-300px' alt='' src={spaceCreateImg} />*/}
              <img
                src={toAbsoluteUrl('/media/illustrations/coding.png')}
                alt=''
                className='mv-100 mh-300px'
              />
            </div>
          </div>
        </div>
        <div className='modal fade' id='kt_modal_add_customer' aria-hidden='true'>
          <div className='modal-dialog modal-dialog-centered mw-650px'>
            <div className='modal-content'>
              <form
                className='form'
                action='#'
                id='kt_modal_add_customer_form'
                data-kt-redirect='../../demo1/dist/apps/customers/list.html'
              >
                <div className='modal-header' id='kt_modal_add_customer_header'>
                  <h2 className='fw-bolder'>Add a Space</h2>
                  <div
                    id='kt_modal_add_customer_close'
                    className='btn btn-icon btn-sm btn-active-icon-primary'
                  >
                    {/*icons/duotone/Navigation/Close.svg-->*/}
                    <span className='svg-icon svg-icon-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        width='24px'
                        height='24px'
                        viewBox='0 0 24 24'
                        version='1.1'
                      >
                        <g
                          transform='translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)'
                          fill='#000000'
                        >
                          <rect fill='#000000' x='0' y='7' width='16' height='2' rx='1' />
                          <rect
                            fill='#000000'
                            opacity='0.5'
                            transform='translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)'
                            x='0'
                            y='7'
                            width='16'
                            height='2'
                            rx='1'
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className='modal-body py-10 px-lg-17'>
                  <div
                    className='scroll-y me-n7 pe-7'
                    id='kt_modal_add_customer_scroll'
                    data-kt-scroll='true'
                    data-kt-scroll-activate='{default: false, lg: true}'
                    data-kt-scroll-max-height='auto'
                    data-kt-scroll-dependencies='#kt_modal_add_customer_header'
                    data-kt-scroll-wrappers='#kt_modal_add_customer_scroll'
                    data-kt-scroll-offset='300px'
                  >
                    <div className='fv-row mb-7'>
                      <label className='required fs-6 fw-bold mb-2'>Name</label>
                      <input
                        type='text'
                        className='form-control form-control-solid'
                        placeholder='Ex: Development'
                        name='name'
                        onChange={(e: any) => e.target.value}
                      />
                    </div>
                    <div className='fv-row mb-7'>
                      <label className='fs-6 fw-bold mb-2'>
                        <span className='required'>Color</span>
                        <i
                          className='fas fa-exclamation-circle ms-1 fs-7'
                          data-bs-toggle='tooltip'
                          title='Email address must be active'
                        />
                      </label>
                      {/*<input*/}
                      {/*  type='email'*/}
                      {/*  className='form-control form-control-solid'*/}
                      {/*  placeholder=''*/}
                      {/*  name='email'*/}
                      {/*  value='sean@dellito.com'*/}
                      {/*/>*/}
                      <div className='d-flex flex-wrap justify-content-center align-items-center my-5'>
                        {colorArray.map((val, i) => (
                          <div
                            className=' w-20px h-20px rounded-circle mx-2 my-2'
                            style={{
                              backgroundColor: val,
                              border: activeColor ? `1px solid ${val}` : 'none',
                            }}
                            onClick={handleActive}
                          />
                        ))}
                      </div>
                    </div>
                    <div className='fv-row mb-15'>
                      <label className='fs-6 fw-bold mb-2'>Description</label>
                      <textarea
                        // type='text'
                        className='form-control form-control-solid min-h-50 h-200px'
                        placeholder=''
                        name='description'
                      />
                    </div>

                    <div
                      className='fw-bolder fs-3 rotate collapsible mb-7'
                      data-bs-toggle='collapse'
                      /* @ts-ignore */
                      href='#kt_modal_add_customer_billing_info'
                      role='button'
                      aria-expanded='false'
                      aria-controls='kt_customer_view_details'
                    >
                      Advanced Settings
                      <span className='ms-2 rotate-180'>
                        <span className='svg-icon svg-icon-3'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            width='24px'
                            height='24px'
                            viewBox='0 0 24 24'
                            version='1.1'
                          >
                            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                              <polygon points='0 0 24 0 24 24 0 24' />
                              <path
                                d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                                fill='#000000'
                                fillRule='nonzero'
                                transform='translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)'
                              />
                            </g>
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div id='kt_modal_add_customer_billing_info' className='collapse show'>
                      <div className='d-flex flex-column mb-7 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Share Space</label>
                        {/*<input*/}
                        {/*  className='form-control form-control-solid'*/}
                        {/*  placeholder=''*/}
                        {/*  name='address1'*/}
                        {/*  value='101, Collins Street'*/}
                        {/*/>*/}
                        <div className='d-flex justify-content-center'>
                          <div
                            className={`w-200px h-200px border ${
                              activeColor && 'border-danger'
                            }  mx-2 d-flex justify-content-center align-items-center flex-column`}
                            onClick={handleActive}
                            style={{border: activeColor ? `1px solid red` : 'none'}}
                          >
                            <KTSVG
                              path='/media/icons/duotone/General/User.svg'
                              className='svg-icon-5hx svg-icon-danger my-2'
                            />
                            <h4>Space21 Workspace</h4>
                          </div>
                          <div
                            className={`w-200px h-200px border ${
                              activeColor && 'border-danger'
                            }  mx-2 d-flex justify-content-center align-items-center flex-column`}
                            onClick={handleActive}
                            style={{border: activeColor ? `1px solid red` : 'none'}}
                          >
                            <KTSVG
                              path='/media/icons/duotone/General/Lock.svg'
                              className='svg-icon-5hx svg-icon-danger my-2'
                            />
                            <h4>Private</h4>
                          </div>
                        </div>
                      </div>
                      <div className='d-flex flex-column mb-7 fv-row'>
                        <label className='fs-6 fw-bold mb-2'>Template</label>
                        <select
                          className='form-control form-control-solid'
                          placeholder=''
                          name='address2'
                          value=''
                        >
                          <option value='custom'>Custom</option>
                          <option value='normal'>Normal</option>
                          <option value='kanban'>Kanban</option>
                          <option value='content'>Content</option>
                          <option value='marketing'>Marketing</option>
                          <option value='scrum'>Scrum</option>
                        </select>
                      </div>
                      <div className='fv-row mb-7'>
                        <div className='d-flex flex-stack'>
                          <div className='me-5'>
                            <label className='fs-6 fw-bold'>Turn on all accessibility</label>
                            <div className='fs-7 fw-bold text-muted'>
                              If you need more info, please check accessibility
                            </div>
                          </div>
                          <label className='form-check form-switch form-check-custom form-check-solid'>
                            <input
                              className='form-check-input'
                              name='billing'
                              type='checkbox'
                              value='1'
                              id='kt_modal_add_customer_billing'
                              checked={true}
                            />
                            <span
                              className='form-check-label fw-bold text-muted'
                              // htmlFor='kt_modal_add_customer_billing'
                            >
                              Yes
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='modal-footer flex-center'>
                  <button
                    type='reset'
                    id='kt_modal_add_customer_cancel'
                    className='btn btn-light me-3'
                  >
                    Discard
                  </button>
                  <button
                    type='submit'
                    id='kt_modal_add_customer_submit'
                    className='btn btn-primary'
                  >
                    <span className='indicator-label'>Submit</span>
                    <span className='indicator-progress'>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2' />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </>
  )
}

export {CreatePageCard}
