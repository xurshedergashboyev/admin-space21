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
        <div className='card-body pb-0' bg-white>
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
      </div>
    </>
  )
}

export default LeadsTable