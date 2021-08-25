import React, {FC} from 'react'
import {StatisticsWidget3, StatisticsWidget6} from '../../../../_metronic/partials/widgets'


export const FinanceStatements: FC = () => {
  return (
    <>
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-6'>
          <StatisticsWidget3
            className='card-xl-stretch mb-xl-8'
            color='success'
            title='Monthly income>'
            description="Space21's Monthly income  Chart"
            change='+100'
          />
        </div>
        <div className='col-xl-6'>
          <StatisticsWidget6
            className='card-xl-stretch mb-xl-8'
            color='primary'
            title='400k Impressions'
            description='Marketing Analysis'
            progress='76%'
          />
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
        <div className='card mb-5 mb-xl-10'>
          <div className='card-body py-10'>
            <h2 className='mb-9'>Referral Program</h2>
            <div className='row mb-10'>
              <div className='col-xl-6 mb-15 mb-xl-0 pe-5'>
                <h4 className='mb-0'>How to use Referral Program</h4>
                <p className='fs-6 fw-bold text-gray-600 py-4 m-0'>Use images to enhance your post, improve its flow,
                  add humor
                  <br />and explain complex topics</p>
                <a href='#' className='btn btn-light btn-active-light-primary fw-bolder'>Get Started</a>
              </div>
              <div className='col-xl-6'>
                <h4 className='text-gray-800 mb-0'>Your Referral Link</h4>
                <p className='fs-6 fw-bold text-gray-600 py-4 m-0'>Plan your blog post by choosing a topic, creating an
                  outline conduct
                  <br />research, and checking facts</p>
                <div className='d-flex'>
                  <input id='kt_referral_link_input' type='text'
                         className='form-control form-control-solid me-3 flex-grow-1' name='search'
                         value='https://keenthemes.com/reffer/?refid=345re66787k8' />
                  <button id='kt_referral_program_link_copy_btn'
                          className='btn btn-light btn-active-light-primary fw-bolder flex-shrink-0'
                          data-clipboard-target='#kt_referral_link_input'>Copy Link
                  </button>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='card card-dashed flex-center min-w-175px my-3 p-6'>
                  <span className='fs-4 fw-bold text-info pb-1 px-2'>Net Earnings</span>
                  <span className='fs-lg-2tx fw-bolder d-flex justify-content-center'>$
													<span data-kt-countup='true' data-kt-countup-value='63,240.00'>0</span></span>
                </div>
              </div>
              <div className='col'>
                <div className='card card-dashed flex-center min-w-175px my-3 p-6'>
                  <span className='fs-4 fw-bold text-success pb-1 px-2'>Balance</span>
                  <span className='fs-lg-2tx fw-bolder d-flex justify-content-center'>$
													<span data-kt-countup='true' data-kt-countup-value='8,530.00'>0</span></span>
                </div>
              </div>
              <div className='col'>
                <div className='card card-dashed flex-center min-w-175px my-3 p-6'>
                  <span className='fs-4 fw-bold text-danger pb-1 px-2'>Avg Deal Size</span>
                  <span className='fs-lg-2tx fw-bolder d-flex justify-content-center'>$
													<span data-kt-countup='true' data-kt-countup-value='2,600'>0</span></span>
                </div>
              </div>
              <div className='col'>
                <div className='card card-dashed flex-center min-w-175px my-3 p-6'>
                  <span className='fs-4 fw-bold text-primary pb-1 px-2'>Referral Signups</span>
                  <span className='fs-lg-2tx fw-bolder d-flex justify-content-center'>$
													<span data-kt-countup='true' data-kt-countup-value='783&quot;'>0</span></span>
                </div>
              </div>
            </div>
            <p className='fs-5 fw-bold text-gray-600 py-6'>Writing headlines for blog posts is as much an art as it is a
              science, and probably warrants its own post, but for now, all I’d advise is experimenting with what works
              for your audience, especially if it’s not resonating with your audience</p>
            <div className='notice d-flex bg-light-primary rounded border-primary border border-dashed p-6'>
              <span className='svg-icon svg-icon-2tx svg-icon-primary me-4'>
												<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
													<path opacity='0.3'
                                d='M5.33317 13.3333H10.6665V22.6666H13.3332V13.3333H18.6665V22.6666H21.3332V13.3333H26.6665V22.6666C28.1393 22.6666 29.3332 23.8605 29.3332 25.3333V26.6666C29.3332 28.1393 28.1393 29.3333 26.6665 29.3333H5.33317C3.86041 29.3333 2.6665 28.1393 2.6665 26.6666V25.3333C2.6665 23.8605 3.86041 22.6666 5.33317 22.6666V13.3333Z'
                                fill='#000000' />
													<path
                            d='M2.6665 9.8054C2.6665 8.71499 3.33037 7.73443 4.3428 7.32947L15.0095 3.0628C15.6452 2.80849 16.3545 2.80849 16.9902 3.0628L27.6569 7.32947C28.6693 7.73443 29.3332 8.71499 29.3332 9.8054V10.6666C29.3332 12.1394 28.1393 13.3333 26.6665 13.3333H5.33317C3.86041 13.3333 2.6665 12.1394 2.6665 10.6666V9.8054Z'
                            fill='#000000' />
												</svg>
											</span>
              <div className='d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap'>
                <div className='mb-3 mb-md-0 fw-bold'>
                  <h4 className='text-gray-900 fw-bolder'>Withdraw Your Money to a Bank Account</h4>
                  <div className='fs-6 text-gray-700 pe-7'>Withdraw money securily to your bank account. Commision is
                    $25 per transaction under $50,000
                  </div>
                </div>
                <a href='#' className='btn btn-primary px-6 align-self-center text-nowrap'>Withdraw Money</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

