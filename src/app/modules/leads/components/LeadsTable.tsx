import React, {FC} from 'react'
import {TablesWidget9} from '../../../../_metronic/partials/widgets'

const LeadsTable: FC = () => {
  return (
    <>
      <div className='row gy-5 g-xl-8'>
        <TablesWidget9 className={''} />
        <div className='d-flex flex-stack flex-wrap pt-10'>
          <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of 50 students</div>

          <ul className='pagination'>
            <li className='page-item previous'>
              <a href='#' className='page-link'>
                <i className='previous' />
              </a>
            </li>

            <li className='page-item active'>
              <a href='#' className='page-link'>
                1
              </a>
            </li>

            <li className='page-item'>
              <a href='#' className='page-link'>
                2
              </a>
            </li>

            <li className='page-item'>
              <a href='#' className='page-link'>
                3
              </a>
            </li>

            <li className='page-item'>
              <a href='#' className='page-link'>
                4
              </a>
            </li>

            <li className='page-item'>
              <a href='#' className='page-link'>
                5
              </a>
            </li>
            <li className='page-item'>
              <a href='#' className='page-link'>
                6
              </a>
            </li>

            <li className='page-item next'>
              <a href='#' className='page-link'>
                <i className='next' />
              </a>
            </li>
          </ul>
        </div>
        <div className='card-body pb-0 bg-white'>
          <span className='fs-5 fw-bold text-gray-600 pb-5 d-block'>Last 30 day earnings calculated. Apart from arranging the order of topics.</span>
          <div className='d-flex flex-wrap justify-content-between pb-6'>
            <div className='d-flex flex-wrap'>
              <div className='border border-dashed border-gray-300 w-125px rounded my-3 p-4 me-6'>
															<span className='fs-2x fw-bolder text-gray-800 lh-1'>
																<span data-kt-countup='true' data-kt-countup-value='6,840'
                                      data-kt-countup-prefix='$'>0</span>
															</span>
                <span className='fs-6 fw-bold text-gray-400 d-block lh-1 pt-2'>Net Earnings</span>
              </div>
              <div className='border border-dashed border-gray-300 w-125px rounded my-3 p-4 me-6'>
															<span className='fs-2x fw-bolder text-gray-800 lh-1'>
															<span className='' data-kt-countup='true' data-kt-countup-value='80'>0</span>%</span>
                <span className='fs-6 fw-bold text-gray-400 d-block lh-1 pt-2'>Change</span>
              </div>
              <div className='border border-dashed border-gray-300 w-125px rounded my-3 p-4 me-6'>
															<span className='fs-2x fw-bolder text-gray-800 lh-1'>
																<span data-kt-countup='true' data-kt-countup-value='1,240'
                                      data-kt-countup-prefix='$'>0</span>
															</span>
                <span className='fs-6 fw-bold text-gray-400 d-block lh-1 pt-2'>Fees</span>
              </div>
            </div>
            <a href='#' className='btn btn-primary px-6 flex-shrink-0 align-self-center'>Withdraw Earnings</a>
          </div>
        </div>
        <div className='col-xxl-4'>
          <div className='card card-xxl-stretch mb-5 mb-xxl-10'>
            <div className='card-header'>
              <div className='card-title'>
                <h3 className='text-gray-800'>Invoices</h3>
              </div>
            </div>
            <div className='card-body'>
              <span className='fs-5 fw-bold text-gray-600 pb-6 d-block'>Download apart from order of the good awesome invoice topics</span>
              <div className='d-flex align-self-center'>
                <div className='flex-grow-1 me-3'>
                  <select className='form-select form-select-solid' data-control='select2'
                          data-placeholder='Seller Annual Fee' data-hide-search='true'>
                    <option value='' />
                    <option value='1'>Individual Seller Account</option>
                    <option value='2'>Variable Closing Fee</option>
                    <option value='3'>Minimum Referral Fee</option>
                  </select>
                </div>
                <button type='button' className='btn btn-primary btn-icon flex-shrink-0'>
                    <span className='svg-icon svg-icon-1'>
															<svg xmlns='http://www.w3.org/2000/svg'
                                   width='24px' height='24px' viewBox='0 0 24 24' version='1.1'>
																<g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
																	<polygon points='0 0 24 0 24 24 0 24' />
																	<rect fill='#000000' opacity='0.5' x='11' y='5' width='2' height='14' rx='1' />
																	<path
                                    d='M6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L11.2928932,11.2928932 C11.6714722,10.9143143 12.2810586,10.9010687 12.6757246,11.2628459 L18.6757246,16.7628459 C19.0828436,17.1360383 19.1103465,17.7686056 18.7371541,18.1757246 C18.3639617,18.5828436 17.7313944,18.6103465 17.3242754,18.2371541 L12.0300757,13.3841378 L6.70710678,18.7071068 Z'
                                    fill='#000000' fillRule='nonzero'
                                    transform='translate(12.000003, 14.999999) scale(1, -1) translate(-12.000003, -14.999999)' />
																</g>
															</svg>
														</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='card-header card-header-stretch'>
          <div className='card-title'>
            <h3 className='m-0 text-gray-800'>Statement</h3>
          </div>
          <div className='card-toolbar m-0'>
            <ul className='nav nav-stretch fs-5 fw-bold nav-line-tabs border-transparent' role='tablist'>
              <li className='nav-item' role='presentation'>
                <a id='kt_referrals_year_tab' className='nav-link text-active-gray-800 active' data-bs-toggle='tab'
                   role='tab' href='#kt_referrals_1'>This Year</a>
              </li>
              <li className='nav-item' role='presentation'>
                <a id='kt_referrals_2019_tab' className='nav-link text-active-gray-800 me-4' data-bs-toggle='tab'
                   role='tab' href='#kt_referrals_2'>2019</a>
              </li>
              <li className='nav-item' role='presentation'>
                <a id='kt_referrals_2018_tab' className='nav-link text-active-gray-800 me-4' data-bs-toggle='tab'
                   role='tab' href='#kt_referrals_3'>2018</a>
              </li>
              <li className='nav-item' role='presentation'>
                <a id='kt_referrals_2017_tab' className='nav-link text-active-gray-800 ms-8' data-bs-toggle='tab'
                   role='tab' href='#kt_referrals_4'>2017</a>
              </li>
            </ul>
          </div>
        </div>
        <div id='kt_referred_users_tab_content' className='tab-content'>
          <div id='kt_referrals_1' className='card-body p-0 tab-pane fade show active' role='tabpanel'>
            <div className='table-responsive'>
              <table className='table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9'>
                <thead className='border-gray-200 fs-5 fw-bold bg-lighten'>
                <tr>
                  <th className='min-w-175px ps-9'>Date</th>
                  <th className='min-w-150px px-0'>Order ID</th>
                  <th className='min-w-350px'>Details</th>
                  <th className='min-w-125px'>Amount</th>
                  <th className='min-w-125px text-center'>Invoice</th>
                </tr>
                </thead>
                <tbody className='fs-6 fw-bold text-gray-600'>
                <tr>
                  <td className='ps-9'>Nov 01, 2020</td>
                  <td className='ps-0'>102445788</td>
                  <td>Darknight transparency 36 Icons Pack</td>
                  <td className='text-success'>$38.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Oct 24, 2020</td>
                  <td className='ps-0'>423445721</td>
                  <td>Seller Fee</td>
                  <td className='text-danger'>$-2.60</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Oct 08, 2020</td>
                  <td className='ps-0'>312445984</td>
                  <td>Cartoon Mobile Emoji Phone Pack</td>
                  <td className='text-success'>$76.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Sep 15, 2020</td>
                  <td className='ps-0'>312445984</td>
                  <td>Iphone 12 Pro Mockup Mega Bundle</td>
                  <td className='text-success'>$5.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>May 30, 2020</td>
                  <td className='ps-0'>523445943</td>
                  <td>Seller Fee</td>
                  <td className='text-danger'>$-1.30</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Apr 22, 2020</td>
                  <td className='ps-0'>231445943</td>
                  <td>Parcel Shipping / Delivery Service App</td>
                  <td className='text-success'>$204.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Feb 09, 2020</td>
                  <td className='ps-0'>426445943</td>
                  <td>Visual Design Illustration</td>
                  <td className='text-success'>$31.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Nov 01, 2020</td>
                  <td className='ps-0'>984445943</td>
                  <td>Abstract Vusial Pack</td>
                  <td className='text-success'>$52.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Jan 04, 2020</td>
                  <td className='ps-0'>324442313</td>
                  <td>Seller Fee</td>
                  <td className='text-danger'>$-0.80</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id='kt_referrals_2' className='card-body p-0 tab-pane fade' role='tabpanel'>
            <div className='table-responsive'>
              <table className='table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9'>
                <thead className='border-gray-200 fs-5 fw-bold bg-lighten'>
                <tr>
                  <th className='min-w-175px ps-9'>Date</th>
                  <th className='min-w-150px px-0'>Order ID</th>
                  <th className='min-w-350px'>Details</th>
                  <th className='min-w-125px'>Amount</th>
                  <th className='min-w-125px text-center'>Invoice</th>
                </tr>
                </thead>
                <tbody className='fs-6 fw-bold text-gray-600'>
                <tr>
                  <td className='ps-9'>May 30, 2020</td>
                  <td className='ps-0'>523445943</td>
                  <td>Seller Fee</td>
                  <td className='text-danger'>$-1.30</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Apr 22, 2020</td>
                  <td className='ps-0'>231445943</td>
                  <td>Parcel Shipping / Delivery Service App</td>
                  <td className='text-success'>$204.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Feb 09, 2020</td>
                  <td className='ps-0'>426445943</td>
                  <td>Visual Design Illustration</td>
                  <td className='text-success'>$31.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Nov 01, 2020</td>
                  <td className='ps-0'>984445943</td>
                  <td>Abstract Vusial Pack</td>
                  <td className='text-success'>$52.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Jan 04, 2020</td>
                  <td className='ps-0'>324442313</td>
                  <td>Seller Fee</td>
                  <td className='text-danger'>$-0.80</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Nov 01, 2020</td>
                  <td className='ps-0'>102445788</td>
                  <td>Darknight transparency 36 Icons Pack</td>
                  <td className='text-success'>$38.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Oct 24, 2020</td>
                  <td className='ps-0'>423445721</td>
                  <td>Seller Fee</td>
                  <td className='text-danger'>$-2.60</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Oct 08, 2020</td>
                  <td className='ps-0'>312445984</td>
                  <td>Cartoon Mobile Emoji Phone Pack</td>
                  <td className='text-success'>$76.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Sep 15, 2020</td>
                  <td className='ps-0'>312445984</td>
                  <td>Iphone 12 Pro Mockup Mega Bundle</td>
                  <td className='text-success'>$5.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id='kt_referrals_3' className='card-body p-0 tab-pane fade' role='tabpanel'>
            <div className='table-responsive'>
              <table className='table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9'>
                <thead className='border-gray-200 fs-5 fw-bold bg-lighten'>
                <tr>
                  <th className='min-w-175px ps-9'>Date</th>
                  <th className='min-w-150px px-0'>Order ID</th>
                  <th className='min-w-350px'>Details</th>
                  <th className='min-w-125px'>Amount</th>
                  <th className='min-w-125px text-center'>Invoice</th>
                </tr>
                </thead>
                <tbody className='fs-6 fw-bold text-gray-600'>
                <tr>
                  <td className='ps-9'>Feb 09, 2020</td>
                  <td className='ps-0'>426445943</td>
                  <td>Visual Design Illustration</td>
                  <td className='text-success'>$31.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Nov 01, 2020</td>
                  <td className='ps-0'>984445943</td>
                  <td>Abstract Vusial Pack</td>
                  <td className='text-success'>$52.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Jan 04, 2020</td>
                  <td className='ps-0'>324442313</td>
                  <td>Seller Fee</td>
                  <td className='text-danger'>$-0.80</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Sep 15, 2020</td>
                  <td className='ps-0'>312445984</td>
                  <td>Iphone 12 Pro Mockup Mega Bundle</td>
                  <td className='text-success'>$5.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Nov 01, 2020</td>
                  <td className='ps-0'>102445788</td>
                  <td>Darknight transparency 36 Icons Pack</td>
                  <td className='text-success'>$38.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Oct 24, 2020</td>
                  <td className='ps-0'>423445721</td>
                  <td>Seller Fee</td>
                  <td className='text-danger'>$-2.60</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Oct 08, 2020</td>
                  <td className='ps-0'>312445984</td>
                  <td>Cartoon Mobile Emoji Phone Pack</td>
                  <td className='text-success'>$76.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>May 30, 2020</td>
                  <td className='ps-0'>523445943</td>
                  <td>Seller Fee</td>
                  <td className='text-danger'>$-1.30</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Apr 22, 2020</td>
                  <td className='ps-0'>231445943</td>
                  <td>Parcel Shipping / Delivery Service App</td>
                  <td className='text-success'>$204.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id='kt_referrals_4' className='card-body p-0 tab-pane fade' role='tabpanel'>
            <div className='table-responsive'>
              <table className='table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9'>
                <thead className='border-gray-200 fs-5 fw-bold bg-lighten'>
                <tr>
                  <th className='min-w-175px ps-9'>Date</th>
                  <th className='min-w-150px px-0'>Order ID</th>
                  <th className='min-w-350px'>Details</th>
                  <th className='min-w-125px'>Amount</th>
                  <th className='min-w-125px text-center'>Invoice</th>
                </tr>
                </thead>
                <tbody className='fs-6 fw-bold text-gray-600'>
                <tr>
                  <td className='ps-9'>Nov 01, 2020</td>
                  <td className='ps-0'>102445788</td>
                  <td>Darknight transparency 36 Icons Pack</td>
                  <td className='text-success'>$38.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Oct 24, 2020</td>
                  <td className='ps-0'>423445721</td>
                  <td>Seller Fee</td>
                  <td className='text-danger'>$-2.60</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Nov 01, 2020</td>
                  <td className='ps-0'>102445788</td>
                  <td>Darknight transparency 36 Icons Pack</td>
                  <td className='text-success'>$38.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Oct 24, 2020</td>
                  <td className='ps-0'>423445721</td>
                  <td>Seller Fee</td>
                  <td className='text-danger'>$-2.60</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Feb 09, 2020</td>
                  <td className='ps-0'>426445943</td>
                  <td>Visual Design Illustration</td>
                  <td className='text-success'>$31.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Nov 01, 2020</td>
                  <td className='ps-0'>984445943</td>
                  <td>Abstract Vusial Pack</td>
                  <td className='text-success'>$52.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Jan 04, 2020</td>
                  <td className='ps-0'>324442313</td>
                  <td>Seller Fee</td>
                  <td className='text-danger'>$-0.80</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Oct 08, 2020</td>
                  <td className='ps-0'>312445984</td>
                  <td>Cartoon Mobile Emoji Phone Pack</td>
                  <td className='text-success'>$76.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                <tr>
                  <td className='ps-9'>Oct 08, 2020</td>
                  <td className='ps-0'>312445984</td>
                  <td>Cartoon Mobile Emoji Phone Pack</td>
                  <td className='text-success'>$76.00</td>
                  <td className='text-center'>
                    <button className='btn btn-light btn-sm btn-active-light-primary'>Download</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card mb-5 mb-xl-10">
          <div className="card-body py-10">
            <h2 className="mb-9">Referral Program</h2>
            <div className="row mb-10">
              <div className="col-xl-6 mb-15 mb-xl-0 pe-5">
                <h4 className="mb-0">How to use Referral Program</h4>
                <p className="fs-6 fw-bold text-gray-600 py-4 m-0">Use images to enhance your post, improve its flow,
                  add humor
                  <br />and explain complex topics</p>
                <a href="#" className="btn btn-light btn-active-light-primary fw-bolder">Get Started</a>
              </div>
              <div className="col-xl-6">
                <h4 className="text-gray-800 mb-0">Your Referral Link</h4>
                <p className="fs-6 fw-bold text-gray-600 py-4 m-0">Plan your blog post by choosing a topic, creating an
                  outline conduct
                  <br />research, and checking facts</p>
                <div className="d-flex">
                  <input id="kt_referral_link_input" type="text"
                         className="form-control form-control-solid me-3 flex-grow-1" name="search"
                         value="https://keenthemes.com/reffer/?refid=345re66787k8" />
                  <button id="kt_referral_program_link_copy_btn"
                          className="btn btn-light btn-active-light-primary fw-bolder flex-shrink-0"
                          data-clipboard-target="#kt_referral_link_input">Copy Link
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card card-dashed flex-center min-w-175px my-3 p-6">
                  <span className="fs-4 fw-bold text-info pb-1 px-2">Net Earnings</span>
                  <span className="fs-lg-2tx fw-bolder d-flex justify-content-center">$
													<span data-kt-countup="true" data-kt-countup-value="63,240.00">0</span></span>
                </div>
              </div>
              <div className="col">
                <div className="card card-dashed flex-center min-w-175px my-3 p-6">
                  <span className="fs-4 fw-bold text-success pb-1 px-2">Balance</span>
                  <span className="fs-lg-2tx fw-bolder d-flex justify-content-center">$
													<span data-kt-countup="true" data-kt-countup-value="8,530.00">0</span></span>
                </div>
              </div>
              <div className="col">
                <div className="card card-dashed flex-center min-w-175px my-3 p-6">
                  <span className="fs-4 fw-bold text-danger pb-1 px-2">Avg Deal Size</span>
                  <span className="fs-lg-2tx fw-bolder d-flex justify-content-center">$
													<span data-kt-countup="true" data-kt-countup-value="2,600">0</span></span>
                </div>
              </div>
              <div className="col">
                <div className="card card-dashed flex-center min-w-175px my-3 p-6">
                  <span className="fs-4 fw-bold text-primary pb-1 px-2">Referral Signups</span>
                  <span className="fs-lg-2tx fw-bolder d-flex justify-content-center">$
													<span data-kt-countup="true" data-kt-countup-value="783&quot;">0</span></span>
                </div>
              </div>
            </div>
            <p className="fs-5 fw-bold text-gray-600 py-6">Writing headlines for blog posts is as much an art as it is a
              science, and probably warrants its own post, but for now, all I’d advise is experimenting with what works
              for your audience, especially if it’s not resonating with your audience</p>
            <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
              <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
												<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
													<path opacity="0.3"
                                d="M5.33317 13.3333H10.6665V22.6666H13.3332V13.3333H18.6665V22.6666H21.3332V13.3333H26.6665V22.6666C28.1393 22.6666 29.3332 23.8605 29.3332 25.3333V26.6666C29.3332 28.1393 28.1393 29.3333 26.6665 29.3333H5.33317C3.86041 29.3333 2.6665 28.1393 2.6665 26.6666V25.3333C2.6665 23.8605 3.86041 22.6666 5.33317 22.6666V13.3333Z"
                                fill="#000000" />
													<path
                            d="M2.6665 9.8054C2.6665 8.71499 3.33037 7.73443 4.3428 7.32947L15.0095 3.0628C15.6452 2.80849 16.3545 2.80849 16.9902 3.0628L27.6569 7.32947C28.6693 7.73443 29.3332 8.71499 29.3332 9.8054V10.6666C29.3332 12.1394 28.1393 13.3333 26.6665 13.3333H5.33317C3.86041 13.3333 2.6665 12.1394 2.6665 10.6666V9.8054Z"
                            fill="#000000" />
												</svg>
											</span>
              <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                <div className="mb-3 mb-md-0 fw-bold">
                  <h4 className="text-gray-900 fw-bolder">Withdraw Your Money to a Bank Account</h4>
                  <div className="fs-6 text-gray-700 pe-7">Withdraw money securily to your bank account. Commision is
                    $25 per transaction under $50,000
                  </div>
                </div>
                <a href="#" className="btn btn-primary px-6 align-self-center text-nowrap">Withdraw Money</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-6 g-xl-9">
        <div className="col-lg-6">
          <div className="card card-flush h-lg-100">
            <div className="card-header mt-6">
              <div className="card-title flex-column">
                <h3 className="fw-bolder mb-1">Tasks Summary</h3>
                <div className="fs-6 fw-bold text-gray-400">24 Overdue Tasks</div>
              </div>
              <div className="card-toolbar">
                <a href="#" className="btn btn-light btn-sm">View Tasks</a>
              </div>
            </div>
            <div className="card-body p-9 pt-5">
              <div className="d-flex flex-wrap">
                <div className="position-relative d-flex flex-center h-175px w-175px me-15 mb-7">
                  <div className="position-absolute translate-middle start-50 top-50 d-flex flex-column flex-center">
                    <span className="fs-2qx fw-bolder">237</span>
                    <span className="fs-6 fw-bold text-gray-400">Total Tasks</span>
                  </div>
                  <canvas id="project_overview_chart"></canvas>
                </div>
                <div className="d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5">
                  <div className="d-flex fs-6 fw-bold align-items-center mb-3">
                    <div className="bullet bg-primary me-3"></div>
                    <div className="text-gray-400">Active</div>
                    <div className="ms-auto fw-bolder text-gray-700">30</div>
                  </div>
                  <div className="d-flex fs-6 fw-bold align-items-center mb-3">
                    <div className="bullet bg-success me-3"></div>
                    <div className="text-gray-400">Completed</div>
                    <div className="ms-auto fw-bolder text-gray-700">45</div>
                  </div>
                  <div className="d-flex fs-6 fw-bold align-items-center mb-3">
                    <div className="bullet bg-danger me-3"></div>
                    <div className="text-gray-400">Overdue</div>
                    <div className="ms-auto fw-bolder text-gray-700">0</div>
                  </div>
                  <div className="d-flex fs-6 fw-bold align-items-center">
                    <div className="bullet bg-gray-300 me-3"></div>
                    <div className="text-gray-400">Yet to start</div>
                    <div className="ms-auto fw-bolder text-gray-700">25</div>
                  </div>
                </div>
              </div>
              <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                <div className="d-flex flex-stack flex-grow-1">
                  <div className="fw-bold">
                    <div className="fs-6 text-gray-700">
                      <a href="#" className="fw-bolder me-1">Invite New .NET Collaborators</a>to create great
                      outstanding business to business .jsp modutr class scripts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card card-flush h-lg-100">
            <div className="card-header mt-6">
              <div className="card-title flex-column">
                <h3 className="fw-bolder mb-1">Tasks Over Time</h3>
                <div className="fs-6 d-flex text-gray-400 fs-6 fw-bold">
                  <div className="d-flex align-items-center me-6">
														<span className="menu-bullet d-flex align-items-center me-2">
															<span className="bullet bg-success"></span>
														</span>Complete
                  </div>
                  <div className="d-flex align-items-center">
														<span className="menu-bullet d-flex align-items-center me-2">
															<span className="bullet bg-primary"></span>
														</span>Incomplete
                  </div>
                </div>
              </div>
              <div className="card-toolbar">
                <select name="status" data-control="select2" data-hide-search="true"
                        className="form-select form-select-solid form-select-sm fw-bolder w-100px">
                  <option value="1">2020 Q1</option>
                  <option value="2">2020 Q2</option>
                  <option value="3" selected="selected">2020 Q3</option>
                  <option value="4">2020 Q4</option>
                </select>
              </div>
            </div>
            <div className="card-body pt-10 pb-0 px-5">
              <div id="kt_project_overview_graph" className="card-rounded-bottom" style="height: 300px"></div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card card-flush h-lg-100">
            <div className="card-header mt-6">
              <div className="card-title flex-column">
                <h3 className="fw-bolder mb-1">What's on the road?</h3>
                <div className="fs-6 text-gray-400">Total 482 participants</div>
              </div>
              <div className="card-toolbar">
                <select name="status" data-control="select2" data-hide-search="true"
                        className="form-select form-select-solid form-select-sm fw-bolder w-100px">
                  <option value="1" selected="selected">Options</option>
                  <option value="2">Option 1</option>
                  <option value="3">Option 2</option>
                  <option value="4">Option 3</option>
                </select>
              </div>
            </div>
            <div className="card-body p-9 pt-4">
              <ul className="nav nav-pills d-flex flex-nowrap hover-scroll-x py-2">
                <li className="nav-item me-1">
                  <a
                    className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                    data-bs-toggle="tab" href="#kt_schedule_day_0">
                    <span className="opacity-50 fs-7 fw-bold">Su</span>
                    <span className="fs-6 fw-bolder">22</span>
                  </a>
                </li>
                <li className="nav-item me-1">
                  <a
                    className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary active"
                    data-bs-toggle="tab" href="#kt_schedule_day_1">
                    <span className="opacity-50 fs-7 fw-bold">Mo</span>
                    <span className="fs-6 fw-bolder">23</span>
                  </a>
                </li>
                <li className="nav-item me-1">
                  <a
                    className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                    data-bs-toggle="tab" href="#kt_schedule_day_2">
                    <span className="opacity-50 fs-7 fw-bold">Tu</span>
                    <span className="fs-6 fw-bolder">24</span>
                  </a>
                </li>
                <li className="nav-item me-1">
                  <a
                    className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                    data-bs-toggle="tab" href="#kt_schedule_day_3">
                    <span className="opacity-50 fs-7 fw-bold">We</span>
                    <span className="fs-6 fw-bolder">25</span>
                  </a>
                </li>
                <!--end::Date-->
                <!--begin::Date-->
                <li className="nav-item me-1">
                  <a
                    className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                    data-bs-toggle="tab" href="#kt_schedule_day_4">
                    <span className="opacity-50 fs-7 fw-bold">Th</span>
                    <span className="fs-6 fw-bolder">26</span>
                  </a>
                </li>
                <!--end::Date-->
                <!--begin::Date-->
                <li className="nav-item me-1">
                  <a
                    className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                    data-bs-toggle="tab" href="#kt_schedule_day_5">
                    <span className="opacity-50 fs-7 fw-bold">Fr</span>
                    <span className="fs-6 fw-bolder">27</span>
                  </a>
                </li>
                <!--end::Date-->
                <!--begin::Date-->
                <li className="nav-item me-1">
                  <a
                    className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                    data-bs-toggle="tab" href="#kt_schedule_day_6">
                    <span className="opacity-50 fs-7 fw-bold">Sa</span>
                    <span className="fs-6 fw-bolder">28</span>
                  </a>
                </li>
                <!--end::Date-->
                <!--begin::Date-->
                <li className="nav-item me-1">
                  <a
                    className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                    data-bs-toggle="tab" href="#kt_schedule_day_7">
                    <span className="opacity-50 fs-7 fw-bold">Su</span>
                    <span className="fs-6 fw-bolder">29</span>
                  </a>
                </li>
                <!--end::Date-->
                <!--begin::Date-->
                <li className="nav-item me-1">
                  <a
                    className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                    data-bs-toggle="tab" href="#kt_schedule_day_8">
                    <span className="opacity-50 fs-7 fw-bold">Mo</span>
                    <span className="fs-6 fw-bolder">30</span>
                  </a>
                </li>
                <!--end::Date-->
                <!--begin::Date-->
                <li className="nav-item me-1">
                  <a
                    className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary"
                    data-bs-toggle="tab" href="#kt_schedule_day_9">
                    <span className="opacity-50 fs-7 fw-bold">Tu</span>
                    <span className="fs-6 fw-bolder">31</span>
                  </a>
                </li>
                <!--end::Date-->
              </ul>
              <!--end::Dates-->
              <!--begin::Tab Content-->
              <div className="tab-content">
                <!--begin::Day-->
                <div id="kt_schedule_day_0" className="tab-pane fade show">
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">16:30 - 17:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Team Backlog Grooming
                        Session</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Karina Clarke</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">14:30 - 15:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Development Team
                        Capacity Review</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Peter Marcus</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">16:30 - 17:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Sales Pitch
                        Proposal</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Bob Harris</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                </div>
                <!--end::Day-->
                <!--begin::Day-->
                <div id="kt_schedule_day_1" className="tab-pane fade show active">
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">16:30 - 17:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Marketing Campaign
                        Discussion</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Mark Randall</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">12:00 - 13:00
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Marketing Campaign
                        Discussion</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Walter White</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">13:00 - 14:00
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Team Backlog Grooming
                        Session</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Terry Robins</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                </div>
                <!--end::Day-->
                <!--begin::Day-->
                <div id="kt_schedule_day_2" className="tab-pane fade show">
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">14:30 - 15:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Weekly Team
                        Stand-Up</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Karina Clarke</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">9:00 - 10:00
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">9 Degree Project
                        Estimation Meeting</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">David Stevenson</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">12:00 - 13:00
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Sales Pitch
                        Proposal</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Terry Robins</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                </div>
                <!--end::Day-->
                <!--begin::Day-->
                <div id="kt_schedule_day_3" className="tab-pane fade show">
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">11:00 - 11:45
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Lunch &amp; Learn
                        Catch Up</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Sean Bean</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">16:30 - 17:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Dashboard UI/UX
                        Design Review</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Terry Robins</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">14:30 - 15:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Dashboard UI/UX
                        Design Review</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Sean Bean</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                </div>
                <!--end::Day-->
                <!--begin::Day-->
                <div id="kt_schedule_day_4" className="tab-pane fade show">
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">16:30 - 17:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Marketing Campaign
                        Discussion</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Michael Walters</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">12:00 - 13:00
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Team Backlog Grooming
                        Session</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Karina Clarke</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">9:00 - 10:00
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">9 Degree Project
                        Estimation Meeting</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Sean Bean</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                </div>
                <!--end::Day-->
                <!--begin::Day-->
                <div id="kt_schedule_day_5" className="tab-pane fade show">
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">9:00 - 10:00
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Team Backlog Grooming
                        Session</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Walter White</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">14:30 - 15:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Dashboard UI/UX
                        Design Review</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Kendell Trevor</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">16:30 - 17:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Marketing Campaign
                        Discussion</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Michael Walters</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                </div>
                <!--end::Day-->
                <!--begin::Day-->
                <div id="kt_schedule_day_6" className="tab-pane fade show">
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">14:30 - 15:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Committee Review
                        Approvals</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Walter White</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">11:00 - 11:45
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Weekly Team
                        Stand-Up</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Mark Randall</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">11:00 - 11:45
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Team Backlog Grooming
                        Session</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Kendell Trevor</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                </div>
                <!--end::Day-->
                <!--begin::Day-->
                <div id="kt_schedule_day_7" className="tab-pane fade show">
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">16:30 - 17:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Team Backlog Grooming
                        Session</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Naomi Hayabusa</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">10:00 - 11:00
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Development Team
                        Capacity Review</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Naomi Hayabusa</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">12:00 - 13:00
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Sales Pitch
                        Proposal</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">David Stevenson</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                </div>
                <!--end::Day-->
                <!--begin::Day-->
                <div id="kt_schedule_day_8" className="tab-pane fade show">
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">14:30 - 15:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Lunch &amp; Learn
                        Catch Up</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Caleb Donaldson</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">13:00 - 14:00
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">9 Degree Project
                        Estimation Meeting</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Michael Walters</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">13:00 - 14:00
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Sales Pitch
                        Proposal</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Caleb Donaldson</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                </div>
                <!--end::Day-->
                <!--begin::Day-->
                <div id="kt_schedule_day_9" className="tab-pane fade show">
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">13:00 - 14:00
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Sales Pitch
                        Proposal</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Walter White</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">10:00 - 11:00
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">9 Degree Project
                        Estimation Meeting</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">David Stevenson</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                  <!--begin::Time-->
                  <div className="d-flex flex-stack position-relative mt-8">
                    <!--begin::Bar-->
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <!--end::Bar-->
                    <!--begin::Info-->
                    <div className="fw-bold ms-5 text-gray-600">
                      <!--begin::Time-->
                      <div className="fs-5">16:30 - 17:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <!--end::Time-->
                      <!--begin::Title-->
                      <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Team Backlog Grooming
                        Session</a>
                      <!--end::Title-->
                      <!--begin::User-->
                      <div className="text-gray-400">Lead by
                        <a href="#">Mark Randall</a></div>
                      <!--end::User-->
                    </div>
                    <!--end::Info-->
                    <!--begin::Action-->
                    <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                    <!--end::Action-->
                  </div>
                  <!--end::Time-->
                </div>
                <!--end::Day-->
              </div>
              <!--end::Tab Content-->
            </div>
            <!--end::Card body-->
          </div>
          <!--end::Card-->
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div className="col-lg-6">
          <!--begin::Card-->
          <div className="card card-flush h-lg-100">
            <!--begin::Card header-->
            <div className="card-header mt-6">
              <!--begin::Card title-->
              <div className="card-title flex-column">
                <h3 className="fw-bolder mb-1">Latest Files</h3>
                <div className="fs-6 text-gray-400">Total 382 fiels, 2,6GB space usage</div>
              </div>
              <!--end::Card title-->
              <!--begin::Card toolbar-->
              <div className="card-toolbar">
                <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View All</a>
              </div>
              <!--end::Card toolbar-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div className="card-body p-9 pt-3">
              <!--begin::Files-->
              <div className="d-flex flex-column mb-9">
                <!--begin::File-->
                <div className="d-flex align-items-center mb-5">
                  <!--begin::Icon-->
                  <div className="symbol symbol-30px me-5">
                    <img alt="Icon" src="assets/media/svg/files/pdf.svg" />
                  </div>
                  <!--end::Icon-->
                  <!--begin::Details-->
                  <div className="fw-bold">
                    <a className="fs-6 fw-bolder text-dark text-hover-primary" href="#">Project tech requirements</a>
                    <div className="text-gray-400">2 days ago
                      <a href="#">Karina Clark</a></div>
                  </div>
                  <!--end::Details-->
                  <!--begin::Menu-->
                  <button type="button"
                          className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                          data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                    <!--begin::Svg Icon | path: icons/duotone/Layout/Layout-4-blocks-2.svg-->
                    <span className="svg-icon svg-icon-3">
																<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                     width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																	<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																		<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																		<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																		<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																		<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	</g>
																</svg>
															</span>
                    <!--end::Svg Icon-->
                  </button>
                  <!--begin::Menu 1-->
                  <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true"
                       id="kt_menu_610d48158eca4">
                    <!--begin::Header-->
                    <div className="px-7 py-5">
                      <div className="fs-5 text-dark fw-bolder">Filter Options</div>
                    </div>
                    <!--end::Header-->
                    <!--begin::Menu separator-->
                    <div className="separator border-gray-200"></div>
                    <!--end::Menu separator-->
                    <!--begin::Form-->
                    <div className="px-7 py-5">
                      <!--begin::Input group-->
                      <div className="mb-10">
                        <!--begin::Label-->
                        <label className="form-label fw-bold">Status:</label>
                        <!--end::Label-->
                        <!--begin::Input-->
                        <div>
                          <select className="form-select form-select-solid" data-kt-select2="true"
                                  data-placeholder="Select option" data-dropdown-parent="#kt_menu_610d48158eca4"
                                  data-allow-clear="true">
                            <option></option>
                            <option value="1">Approved</option>
                            <option value="2">Pending</option>
                            <option value="2">In Process</option>
                            <option value="2">Rejected</option>
                          </select>
                        </div>
                        <!--end::Input-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Input group-->
                      <div className="mb-10">
                        <!--begin::Label-->
                        <label className="form-label fw-bold">Member Type:</label>
                        <!--end::Label-->
                        <!--begin::Options-->
                        <div className="d-flex">
                          <!--begin::Options-->
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" value="1" />
                            <span className="form-check-label">Author</span>
                          </label>
                          <!--end::Options-->
                          <!--begin::Options-->
                          <label className="form-check form-check-sm form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="2" checked="checked" />
                            <span className="form-check-label">Customer</span>
                          </label>
                          <!--end::Options-->
                        </div>
                        <!--end::Options-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Input group-->
                      <div className="mb-10">
                        <!--begin::Label-->
                        <label className="form-label fw-bold">Notifications:</label>
                        <!--end::Label-->
                        <!--begin::Switch-->
                        <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                          <input className="form-check-input" type="checkbox" value="" name="notifications"
                                 checked="checked" />
                          <label className="form-check-label">Enabled</label>
                        </div>
                        <!--end::Switch-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Actions-->
                      <div className="d-flex justify-content-end">
                        <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2"
                                data-kt-menu-dismiss="true">Reset
                        </button>
                        <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply
                        </button>
                      </div>
                      <!--end::Actions-->
                    </div>
                    <!--end::Form-->
                  </div>
                  <!--end::Menu 1-->
                  <!--end::Menu-->
                </div>
                <!--end::File-->
                <!--begin::File-->
                <div className="d-flex align-items-center mb-5">
                  <!--begin::Icon-->
                  <div className="symbol symbol-30px me-5">
                    <img alt="Icon" src="assets/media/svg/files/doc.svg" />
                  </div>
                  <!--end::Icon-->
                  <!--begin::Details-->
                  <div className="fw-bold">
                    <a className="fs-6 fw-bolder text-dark text-hover-primary" href="#">Create FureStibe branding
                      proposal</a>
                    <div className="text-gray-400">Due in 1 day
                      <a href="#">Marcus Blake</a></div>
                  </div>
                  <!--end::Details-->
                  <!--begin::Menu-->
                  <button type="button"
                          className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                          data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                    <!--begin::Svg Icon | path: icons/duotone/Layout/Layout-4-blocks-2.svg-->
                    <span className="svg-icon svg-icon-3">
																<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                     width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																	<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																		<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																		<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																		<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																		<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	</g>
																</svg>
															</span>
                    <!--end::Svg Icon-->
                  </button>
                  <!--begin::Menu 1-->
                  <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true"
                       id="kt_menu_610d48158f22b">
                    <!--begin::Header-->
                    <div className="px-7 py-5">
                      <div className="fs-5 text-dark fw-bolder">Filter Options</div>
                    </div>
                    <!--end::Header-->
                    <!--begin::Menu separator-->
                    <div className="separator border-gray-200"></div>
                    <!--end::Menu separator-->
                    <!--begin::Form-->
                    <div className="px-7 py-5">
                      <!--begin::Input group-->
                      <div className="mb-10">
                        <!--begin::Label-->
                        <label className="form-label fw-bold">Status:</label>
                        <!--end::Label-->
                        <!--begin::Input-->
                        <div>
                          <select className="form-select form-select-solid" data-kt-select2="true"
                                  data-placeholder="Select option" data-dropdown-parent="#kt_menu_610d48158f22b"
                                  data-allow-clear="true">
                            <option></option>
                            <option value="1">Approved</option>
                            <option value="2">Pending</option>
                            <option value="2">In Process</option>
                            <option value="2">Rejected</option>
                          </select>
                        </div>
                        <!--end::Input-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Input group-->
                      <div className="mb-10">
                        <!--begin::Label-->
                        <label className="form-label fw-bold">Member Type:</label>
                        <!--end::Label-->
                        <!--begin::Options-->
                        <div className="d-flex">
                          <!--begin::Options-->
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" value="1" />
                            <span className="form-check-label">Author</span>
                          </label>
                          <!--end::Options-->
                          <!--begin::Options-->
                          <label className="form-check form-check-sm form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="2" checked="checked" />
                            <span className="form-check-label">Customer</span>
                          </label>
                          <!--end::Options-->
                        </div>
                        <!--end::Options-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Input group-->
                      <div className="mb-10">
                        <!--begin::Label-->
                        <label className="form-label fw-bold">Notifications:</label>
                        <!--end::Label-->
                        <!--begin::Switch-->
                        <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                          <input className="form-check-input" type="checkbox" value="" name="notifications"
                                 checked="checked" />
                          <label className="form-check-label">Enabled</label>
                        </div>
                        <!--end::Switch-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Actions-->
                      <div className="d-flex justify-content-end">
                        <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2"
                                data-kt-menu-dismiss="true">Reset
                        </button>
                        <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply
                        </button>
                      </div>
                      <!--end::Actions-->
                    </div>
                    <!--end::Form-->
                  </div>
                  <!--end::Menu 1-->
                  <!--end::Menu-->
                </div>
                <!--end::File-->
                <!--begin::File-->
                <div className="d-flex align-items-center mb-5">
                  <!--begin::Icon-->
                  <div className="symbol symbol-30px me-5">
                    <img alt="Icon" src="assets/media/svg/files/css.svg" />
                  </div>
                  <!--end::Icon-->
                  <!--begin::Details-->
                  <div className="fw-bold">
                    <a className="fs-6 fw-bolder text-dark text-hover-primary" href="#">Completed Project Stylings</a>
                    <div className="text-gray-400">Due in 1 day
                      <a href="#">Terry Barry</a></div>
                  </div>
                  <!--end::Details-->
                  <!--begin::Menu-->
                  <button type="button"
                          className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                          data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                    <!--begin::Svg Icon | path: icons/duotone/Layout/Layout-4-blocks-2.svg-->
                    <span className="svg-icon svg-icon-3">
																<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                     width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																	<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																		<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																		<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																		<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																		<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	</g>
																</svg>
															</span>
                    <!--end::Svg Icon-->
                  </button>
                  <!--begin::Menu 1-->
                  <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true"
                       id="kt_menu_610d48158f6d2">
                    <!--begin::Header-->
                    <div className="px-7 py-5">
                      <div className="fs-5 text-dark fw-bolder">Filter Options</div>
                    </div>
                    <!--end::Header-->
                    <!--begin::Menu separator-->
                    <div className="separator border-gray-200"></div>
                    <!--end::Menu separator-->
                    <!--begin::Form-->
                    <div className="px-7 py-5">
                      <!--begin::Input group-->
                      <div className="mb-10">
                        <!--begin::Label-->
                        <label className="form-label fw-bold">Status:</label>
                        <!--end::Label-->
                        <!--begin::Input-->
                        <div>
                          <select className="form-select form-select-solid" data-kt-select2="true"
                                  data-placeholder="Select option" data-dropdown-parent="#kt_menu_610d48158f6d2"
                                  data-allow-clear="true">
                            <option></option>
                            <option value="1">Approved</option>
                            <option value="2">Pending</option>
                            <option value="2">In Process</option>
                            <option value="2">Rejected</option>
                          </select>
                        </div>
                        <!--end::Input-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Input group-->
                      <div className="mb-10">
                        <!--begin::Label-->
                        <label className="form-label fw-bold">Member Type:</label>
                        <!--end::Label-->
                        <!--begin::Options-->
                        <div className="d-flex">
                          <!--begin::Options-->
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" value="1" />
                            <span className="form-check-label">Author</span>
                          </label>
                          <!--end::Options-->
                          <!--begin::Options-->
                          <label className="form-check form-check-sm form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="2" checked="checked" />
                            <span className="form-check-label">Customer</span>
                          </label>
                          <!--end::Options-->
                        </div>
                        <!--end::Options-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Input group-->
                      <div className="mb-10">
                        <!--begin::Label-->
                        <label className="form-label fw-bold">Notifications:</label>
                        <!--end::Label-->
                        <!--begin::Switch-->
                        <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                          <input className="form-check-input" type="checkbox" value="" name="notifications"
                                 checked="checked" />
                          <label className="form-check-label">Enabled</label>
                        </div>
                        <!--end::Switch-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Actions-->
                      <div className="d-flex justify-content-end">
                        <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2"
                                data-kt-menu-dismiss="true">Reset
                        </button>
                        <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply
                        </button>
                      </div>
                      <!--end::Actions-->
                    </div>
                    <!--end::Form-->
                  </div>
                  <!--end::Menu 1-->
                  <!--end::Menu-->
                </div>
                <!--end::File-->
                <!--begin::File-->
                <div className="d-flex align-items-center">
                  <!--begin::Icon-->
                  <div className="symbol symbol-30px me-5">
                    <img alt="Icon" src="assets/media/svg/files/ai.svg" />
                  </div>
                  <!--end::Icon-->
                  <!--begin::Details-->
                  <div className="fw-bold">
                    <a className="fs-6 fw-bolder text-dark text-hover-primary" href="#">Create Project Wireframes</a>
                    <div className="text-gray-400">Due in 3 days
                      <a href="#">Roth Bloom</a></div>
                  </div>
                  <!--end::Details-->
                  <!--begin::Menu-->
                  <button type="button"
                          className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                          data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                    <!--begin::Svg Icon | path: icons/duotone/Layout/Layout-4-blocks-2.svg-->
                    <span className="svg-icon svg-icon-3">
																<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                     width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																	<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																		<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																		<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																		<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																		<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	</g>
																</svg>
															</span>
                    <!--end::Svg Icon-->
                  </button>
                  <!--begin::Menu 1-->
                  <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true"
                       id="kt_menu_610d48158fb7c">
                    <!--begin::Header-->
                    <div className="px-7 py-5">
                      <div className="fs-5 text-dark fw-bolder">Filter Options</div>
                    </div>
                    <!--end::Header-->
                    <!--begin::Menu separator-->
                    <div className="separator border-gray-200"></div>
                    <!--end::Menu separator-->
                    <!--begin::Form-->
                    <div className="px-7 py-5">
                      <!--begin::Input group-->
                      <div className="mb-10">
                        <!--begin::Label-->
                        <label className="form-label fw-bold">Status:</label>
                        <!--end::Label-->
                        <!--begin::Input-->
                        <div>
                          <select className="form-select form-select-solid" data-kt-select2="true"
                                  data-placeholder="Select option" data-dropdown-parent="#kt_menu_610d48158fb7c"
                                  data-allow-clear="true">
                            <option></option>
                            <option value="1">Approved</option>
                            <option value="2">Pending</option>
                            <option value="2">In Process</option>
                            <option value="2">Rejected</option>
                          </select>
                        </div>
                        <!--end::Input-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Input group-->
                      <div className="mb-10">
                        <!--begin::Label-->
                        <label className="form-label fw-bold">Member Type:</label>
                        <!--end::Label-->
                        <!--begin::Options-->
                        <div className="d-flex">
                          <!--begin::Options-->
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" value="1" />
                            <span className="form-check-label">Author</span>
                          </label>
                          <!--end::Options-->
                          <!--begin::Options-->
                          <label className="form-check form-check-sm form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="2" checked="checked" />
                            <span className="form-check-label">Customer</span>
                          </label>
                          <!--end::Options-->
                        </div>
                        <!--end::Options-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Input group-->
                      <div className="mb-10">
                        <!--begin::Label-->
                        <label className="form-label fw-bold">Notifications:</label>
                        <!--end::Label-->
                        <!--begin::Switch-->
                        <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                          <input className="form-check-input" type="checkbox" value="" name="notifications"
                                 checked="checked" />
                          <label className="form-check-label">Enabled</label>
                        </div>
                        <!--end::Switch-->
                      </div>
                      <!--end::Input group-->
                      <!--begin::Actions-->
                      <div className="d-flex justify-content-end">
                        <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2"
                                data-kt-menu-dismiss="true">Reset
                        </button>
                        <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply
                        </button>
                      </div>
                      <!--end::Actions-->
                    </div>
                    <!--end::Form-->
                  </div>
                  <!--end::Menu 1-->
                  <!--end::Menu-->
                </div>
                <!--end::File-->
              </div>
              <!--end::Files-->
              <!--begin::Notice-->
              <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                <!--begin::Icon-->
                <!--begin::Svg Icon | path: svg/files/upload.svg-->
                <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
														<svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67"
                                 fill="none">
															<path opacity="0.25"
                                    d="M8.375 11.167C8.375 6.54161 12.1246 2.79199 16.75 2.79199H43.9893C46.2105 2.79199 48.3407 3.67436 49.9113 5.24497L56.172 11.5057C57.7426 13.0763 58.625 15.2065 58.625 17.4277V55.8337C58.625 60.459 54.8754 64.2087 50.25 64.2087H16.75C12.1246 64.2087 8.375 60.459 8.375 55.8337V11.167Z"
                                    fill="#00A3FF" />
															<path
                                d="M41.875 5.28162C41.875 3.90663 42.9896 2.79199 44.3646 2.79199V2.79199C46.3455 2.79199 48.2452 3.57889 49.6459 4.97957L56.4374 11.7711C57.8381 13.1718 58.625 15.0715 58.625 17.0524V17.0524C58.625 18.4274 57.5104 19.542 56.1354 19.542H44.6667C43.1249 19.542 41.875 18.2921 41.875 16.7503V5.28162Z"
                                fill="#00A3FF" />
															<path
                                d="M32.4311 25.3368C32.1018 25.4731 31.7933 25.675 31.5257 25.9427L23.1507 34.3177C22.0605 35.4079 22.0605 37.1755 23.1507 38.2657C24.2409 39.3559 26.0085 39.3559 27.0987 38.2657L30.708 34.6563V47.4583C30.708 49.0001 31.9579 50.25 33.4997 50.25C35.0415 50.25 36.2913 49.0001 36.2913 47.4583V34.6563L39.9007 38.2657C40.9909 39.3559 42.7585 39.3559 43.8487 38.2657C44.9389 37.1755 44.9389 35.4079 43.8487 34.3177L35.4737 25.9427C34.6511 25.1201 33.443 24.9182 32.4311 25.3368Z"
                                fill="#00A3FF" />
														</svg>
													</span>
                <!--end::Svg Icon-->
                <!--end::Icon-->
                <!--begin::Wrapper-->
                <div className="d-flex flex-stack flex-grow-1">
                  <!--begin::Content-->
                  <div className="fw-bold">
                    <h4 className="text-gray-900 fw-bolder">Quick file uploader</h4>
                    <div className="fs-6 text-gray-700">Drag &amp; Drop or choose files from computer</div>
                  </div>
                  <!--end::Content-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Notice-->
            </div>
            <!--end::Card body -->
          </div>
          <!--end::Card-->
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div className="col-lg-6">
          <!--begin::Card-->
          <div className="card card-flush h-lg-100">
            <!--begin::Card header-->
            <div className="card-header mt-6">
              <!--begin::Card title-->
              <div className="card-title flex-column">
                <h3 className="fw-bolder mb-1">New Contibutors</h3>
                <div className="fs-6 text-gray-400">From total 482 Participants</div>
              </div>
              <!--end::Card title-->
              <!--begin::Card toolbar-->
              <div className="card-toolbar">
                <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View All</a>
              </div>
              <!--end::Card toolbar-->
            </div>
            <!--end::Card toolbar-->
            <!--begin::Card body-->
            <div className="card-body d-flex flex-column p-9 pt-3 mb-9">
              <!--begin::Item-->
              <div className="d-flex align-items-center mb-5">
                <!--begin::Avatar-->
                <div className="me-5 position-relative">
                  <!--begin::Image-->
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/150-1.jpg" />
                  </div>
                  <!--end::Image-->
                </div>
                <!--end::Avatar-->
                <!--begin::Details-->
                <div className="fw-bold">
                  <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary">Emma Smith</a>
                  <div className="text-gray-400">8 Pending &amp; 97 Completed Tasks</div>
                </div>
                <!--end::Details-->
                <!--begin::Badge-->
                <div className="badge badge-light ms-auto">5</div>
                <!--end::Badge-->
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div className="d-flex align-items-center mb-5">
                <!--begin::Avatar-->
                <div className="me-5 position-relative">
                  <!--begin::Image-->
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-danger text-danger fw-bold">M</span>
                  </div>
                  <!--end::Image-->
                  <!--begin::Online-->
                  <div
                    className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                  <!--end::Online-->
                </div>
                <!--end::Avatar-->
                <!--begin::Details-->
                <div className="fw-bold">
                  <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary">Melody Macy</a>
                  <div className="text-gray-400">5 Pending &amp; 84 Completed</div>
                </div>
                <!--end::Details-->
                <!--begin::Badge-->
                <div className="badge badge-light ms-auto">8</div>
                <!--end::Badge-->
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div className="d-flex align-items-center mb-5">
                <!--begin::Avatar-->
                <div className="me-5 position-relative">
                  <!--begin::Image-->
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/150-26.jpg" />
                  </div>
                  <!--end::Image-->
                </div>
                <!--end::Avatar-->
                <!--begin::Details-->
                <div className="fw-bold">
                  <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary">Max Smith</a>
                  <div className="text-gray-400">9 Pending &amp; 103 Completed</div>
                </div>
                <!--end::Details-->
                <!--begin::Badge-->
                <div className="badge badge-light ms-auto">9</div>
                <!--end::Badge-->
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div className="d-flex align-items-center mb-5">
                <!--begin::Avatar-->
                <div className="me-5 position-relative">
                  <!--begin::Image-->
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/150-4.jpg" />
                  </div>
                  <!--end::Image-->
                </div>
                <!--end::Avatar-->
                <!--begin::Details-->
                <div className="fw-bold">
                  <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary">Sean Bean</a>
                  <div className="text-gray-400">3 Pending &amp; 55 Completed</div>
                </div>
                <!--end::Details-->
                <!--begin::Badge-->
                <div className="badge badge-light ms-auto">3</div>
                <!--end::Badge-->
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div className="d-flex align-items-center">
                <!--begin::Avatar-->
                <div className="me-5 position-relative">
                  <!--begin::Image-->
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/150-15.jpg" />
                  </div>
                  <!--end::Image-->
                </div>
                <!--end::Avatar-->
                <!--begin::Details-->
                <div className="fw-bold">
                  <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary">Brian Cox</a>
                  <div className="text-gray-400">4 Pending &amp; 115 Completed</div>
                </div>
                <!--end::Details-->
                <!--begin::Badge-->
                <div className="badge badge-light ms-auto">4</div>
                <!--end::Badge-->
              </div>
              <!--end::Item-->
            </div>
            <!--end::Card body-->
          </div>
          <!--end::Card-->
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div className="col-lg-6">
          <!--begin::Tasks-->
          <div className="card card-flush h-lg-100">
            <!--begin::Card header-->
            <div className="card-header mt-6">
              <!--begin::Card title-->
              <div className="card-title flex-column">
                <h3 className="fw-bolder mb-1">My Tasks</h3>
                <div className="fs-6 text-gray-400">Total 25 tasks in backlog</div>
              </div>
              <!--end::Card title-->
              <!--begin::Card toolbar-->
              <div className="card-toolbar">
                <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm">View All</a>
              </div>
              <!--end::Card toolbar-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div className="card-body d-flex flex-column mb-9 p-9 pt-3">
              <!--begin::Item-->
              <div className="d-flex align-items-center position-relative mb-7">
                <!--begin::Label-->
                <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
                <!--end::Label-->
                <!--begin::Checkbox-->
                <div className="form-check form-check-custom form-check-solid ms-6 me-4">
                  <input className="form-check-input" type="checkbox" value="" />
                </div>
                <!--end::Checkbox-->
                <!--begin::Details-->
                <div className="fw-bold">
                  <a href="#" className="fs-6 fw-bolder text-gray-900 text-hover-primary">Create FureStibe branding
                    logo</a>
                  <!--begin::Info-->
                  <div className="text-gray-400">Due in 1 day
                    <a href="#">Karina Clark</a></div>
                  <!--end::Info-->
                </div>
                <!--end::Details-->
                <!--begin::Menu-->
                <button type="button"
                        className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                  <!--begin::Svg Icon | path: icons/duotone/Layout/Layout-4-blocks-2.svg-->
                  <span className="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                   width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                  <!--end::Svg Icon-->
                </button>
                <!--begin::Menu 1-->
                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true"
                     id="kt_menu_610d481590c80">
                  <!--begin::Header-->
                  <div className="px-7 py-5">
                    <div className="fs-5 text-dark fw-bolder">Filter Options</div>
                  </div>
                  <!--end::Header-->
                  <!--begin::Menu separator-->
                  <div className="separator border-gray-200"></div>
                  <!--end::Menu separator-->
                  <!--begin::Form-->
                  <div className="px-7 py-5">
                    <!--begin::Input group-->
                    <div className="mb-10">
                      <!--begin::Label-->
                      <label className="form-label fw-bold">Status:</label>
                      <!--end::Label-->
                      <!--begin::Input-->
                      <div>
                        <select className="form-select form-select-solid" data-kt-select2="true"
                                data-placeholder="Select option" data-dropdown-parent="#kt_menu_610d481590c80"
                                data-allow-clear="true">
                          <option></option>
                          <option value="1">Approved</option>
                          <option value="2">Pending</option>
                          <option value="2">In Process</option>
                          <option value="2">Rejected</option>
                        </select>
                      </div>
                      <!--end::Input-->
                    </div>
                    <!--end::Input group-->
                    <!--begin::Input group-->
                    <div className="mb-10">
                      <!--begin::Label-->
                      <label className="form-label fw-bold">Member Type:</label>
                      <!--end::Label-->
                      <!--begin::Options-->
                      <div className="d-flex">
                        <!--begin::Options-->
                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                          <input className="form-check-input" type="checkbox" value="1" />
                          <span className="form-check-label">Author</span>
                        </label>
                        <!--end::Options-->
                        <!--begin::Options-->
                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                          <input className="form-check-input" type="checkbox" value="2" checked="checked" />
                          <span className="form-check-label">Customer</span>
                        </label>
                        <!--end::Options-->
                      </div>
                      <!--end::Options-->
                    </div>
                    <!--end::Input group-->
                    <!--begin::Input group-->
                    <div className="mb-10">
                      <!--begin::Label-->
                      <label className="form-label fw-bold">Notifications:</label>
                      <!--end::Label-->
                      <!--begin::Switch-->
                      <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                        <input className="form-check-input" type="checkbox" value="" name="notifications"
                               checked="checked" />
                        <label className="form-check-label">Enabled</label>
                      </div>
                      <!--end::Switch-->
                    </div>
                    <!--end::Input group-->
                    <!--begin::Actions-->
                    <div className="d-flex justify-content-end">
                      <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2"
                              data-kt-menu-dismiss="true">Reset
                      </button>
                      <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply
                      </button>
                    </div>
                    <!--end::Actions-->
                  </div>
                  <!--end::Form-->
                </div>
                <!--end::Menu 1-->
                <!--end::Menu-->
              </div>
              <!--end::Item-->
              <!--begin::Item-->
              <div className="d-flex align-items-center position-relative mb-7">
                <!--begin::Label-->
                <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
                <!--end::Label-->
                <!--begin::Checkbox-->
                <div className="form-check form-check-custom form-check-solid ms-6 me-4">
                  <input className="form-check-input" type="checkbox" value="" />
                </div>
                <!--end::Checkbox-->
                <!--begin::Details-->
                <div className="fw-bold">
                  <a href="#" className="fs-6 fw-bolder text-gray-900 text-hover-primary">Schedule a meeting with
                    FireBear CTO John</a>
                  <!--begin::Info-->
                  <div className="text-gray-400">Due in 3 days
                    <a href="#">Rober Doe</a></div>
                </div>
                <button type="button"
                        className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                  <span className="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                   width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                </button>
                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true"
                     id="kt_menu_610d4815910ff">
                  <div className="px-7 py-5">
                    <div className="fs-5 text-dark fw-bolder">Filter Options</div>
                  </div>
                  <div className="separator border-gray-200"></div>
                  <div className="px-7 py-5">
                    <div className="mb-10">

                      <label className="form-label fw-bold">Status:</label>

                      <div>
                        <select className="form-select form-select-solid" data-kt-select2="true"
                                data-placeholder="Select option" data-dropdown-parent="#kt_menu_610d4815910ff"
                                data-allow-clear="true">
                          <option></option>
                          <option value="1">Approved</option>
                          <option value="2">Pending</option>
                          <option value="2">In Process</option>
                          <option value="2">Rejected</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-10">
                      <label className="form-label fw-bold">Member Type:</label>
                      <div className="d-flex">
                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                          <input className="form-check-input" type="checkbox" value="1" />
                          <span className="form-check-label">Author</span>
                        </label>
                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                          <input className="form-check-input" type="checkbox" value="2" checked="checked" />
                          <span className="form-check-label">Customer</span>
                        </label>
                      </div>
                    </div>
                    <div className="mb-10">
                      <label className="form-label fw-bold">Notifications:</label>
                      <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                        <input className="form-check-input" type="checkbox" value="" name="notifications"
                               checked="checked" />
                        <label className="form-check-label">Enabled</label>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2"
                              data-kt-menu-dismiss="true">Reset
                      </button>
                      <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center position-relative mb-7">
                <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
                <div className="form-check form-check-custom form-check-solid ms-6 me-4">
                  <input className="form-check-input" type="checkbox" value="" />
                </div>
                <div className="fw-bold">
                  <a href="#" className="fs-6 fw-bolder text-gray-900 text-hover-primary">9 Degree Porject
                    Estimation</a>
                  <div className="text-gray-400">Due in 1 week
                    <a href="#">Neil Owen</a></div>
                </div>
                <button type="button"
                        className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                  <span className="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                   width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                </button>
                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true"
                     id="kt_menu_610d481591580">
                  <div className="px-7 py-5">
                    <div className="fs-5 text-dark fw-bolder">Filter Options</div>
                  </div>
                  <div className="separator border-gray-200"></div>
                  <div className="px-7 py-5">
                    <div className="mb-10">
                      <label className="form-label fw-bold">Status:</label>
                      <div>
                        <select className="form-select form-select-solid" data-kt-select2="true"
                                data-placeholder="Select option" data-dropdown-parent="#kt_menu_610d481591580"
                                data-allow-clear="true">
                          <option></option>
                          <option value="1">Approved</option>
                          <option value="2">Pending</option>
                          <option value="2">In Process</option>
                          <option value="2">Rejected</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-10">
                      <!--begin::Label-->
                      <label className="form-label fw-bold">Member Type:</label>
                      <div className="d-flex">
                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                          <input className="form-check-input" type="checkbox" value="1" />
                          <span className="form-check-label">Author</span>
                        </label>
                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                          <input className="form-check-input" type="checkbox" value="2" checked="checked" />
                          <span className="form-check-label">Customer</span>
                        </label>
                      </div>
                    </div>
                    <div className="mb-10">
                      <label className="form-label fw-bold">Notifications:</label>
                      <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                        <input className="form-check-input" type="checkbox" value="" name="notifications"
                               checked="checked" />
                        <label className="form-check-label">Enabled</label>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2"
                              data-kt-menu-dismiss="true">Reset
                      </button>
                      <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center position-relative mb-7">
                <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
                <div className="form-check form-check-custom form-check-solid ms-6 me-4">
                  <input className="form-check-input" type="checkbox" value="" />
                </div>
                <div className="fw-bold">
                  <a href="#" className="fs-6 fw-bolder text-gray-900 text-hover-primary">Dashgboard UI &amp; UX for
                    Leafr CRM</a>
                  <div className="text-gray-400">Due in 1 week
                    <a href="#">Olivia Wild</a></div>
                </div>
                <button type="button"
                        className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                  <span className="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                   width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                </button>
                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true"
                     id="kt_menu_610d4815919cd">
                  <div className="px-7 py-5">
                    <div className="fs-5 text-dark fw-bolder">Filter Options</div>
                  </div>
                  <div className="separator border-gray-200"></div>
                  <!--begin::Form-->
                  <div className="px-7 py-5">
                    <div className="mb-10">
                      <label className="form-label fw-bold">Status:</label>
                      <div>
                        <select className="form-select form-select-solid" data-kt-select2="true"
                                data-placeholder="Select option" data-dropdown-parent="#kt_menu_610d4815919cd"
                                data-allow-clear="true">
                          <option></option>
                          <option value="1">Approved</option>
                          <option value="2">Pending</option>
                          <option value="2">In Process</option>
                          <option value="2">Rejected</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-10">
                      <label className="form-label fw-bold">Member Type:</label>
                      <div className="d-flex">
                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                          <input className="form-check-input" type="checkbox" value="1" />
                          <span className="form-check-label">Author</span>
                        </label>
                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                          <input className="form-check-input" type="checkbox" value="2" checked="checked" />
                          <span className="form-check-label">Customer</span>
                        </label>
                      </div>
                    </div>
                    <div className="mb-10">
                      <label className="form-label fw-bold">Notifications:</label>
                      <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                        <input className="form-check-input" type="checkbox" value="" name="notifications"
                               checked="checked" />
                        <label className="form-check-label">Enabled</label>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2"
                              data-kt-menu-dismiss="true">Reset
                      </button>
                      <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center position-relative">
                <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
                <div className="form-check form-check-custom form-check-solid ms-6 me-4">
                  <input className="form-check-input" type="checkbox" value="" />
                </div>
                <div className="fw-bold">
                  <a href="#" className="fs-6 fw-bolder text-gray-900 text-hover-primary">Mivy App R&amp;D, Meeting with
                    clients</a>
                  <div className="text-gray-400">Due in 2 weeks
                    <a href="#">Sean Bean</a></div>
                </div>
                <button type="button"
                        className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                  <span className="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                   width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                </button>
                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true"
                     id="kt_menu_610d481591e21">
                  <div className="px-7 py-5">
                    <div className="fs-5 text-dark fw-bolder">Filter Options</div>
                  </div>
                  <div className="separator border-gray-200"></div>
                  <div className="px-7 py-5">
                    <div className="mb-10">
                      <label className="form-label fw-bold">Status:</label>
                      <div>
                        <select className="form-select form-select-solid" data-kt-select2="true"
                                data-placeholder="Select option" data-dropdown-parent="#kt_menu_610d481591e21"
                                data-allow-clear="true">
                          <option/>
                          <option value="1">Approved</option>
                          <option value="2">Pending</option>
                          <option value="2">In Process</option>
                          <option value="2">Rejected</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-10">
                      <label className="form-label fw-bold">Member Type:</label>
                      <div className="d-flex">
                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                          <input className="form-check-input" type="checkbox" value="1" />
                          <span className="form-check-label">Author</span>
                        </label>
                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                          <input className="form-check-input" type="checkbox" value="2" checked="checked" />
                          <span className="form-check-label">Customer</span>
                        </label>
                      </div>
                    </div>
                    <div className="mb-10">
                      <label className="form-label fw-bold">Notifications:</label>
                      <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                        <input className="form-check-input" type="checkbox" value="" name="notifications"
                               checked="checked" />
                        <label className="form-check-label">Enabled</label>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2"
                              data-kt-menu-dismiss="true">Reset
                      </button>
                      <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default LeadsTable