import React, {FC} from 'react'

export const FinanceReferrals: FC = () => {
  return (
    <div className='row g-6 g-xl-9'>
      <div className='col-lg-6'>
        <div className='card card-flush h-lg-100'>
          <div className='card-header mt-6'>
            <div className='card-title flex-column'>
              <h3 className='fw-bolder mb-1'>Tasks Summary</h3>
              <div className='fs-6 fw-bold text-gray-400'>24 Overdue Tasks</div>
            </div>
            <div className='card-toolbar'>
              <a href='#' className='btn btn-light btn-sm'>View Tasks</a>
            </div>
          </div>
          <div className='card-body p-9 pt-5'>
            <div className='d-flex flex-wrap'>
              <div className='position-relative d-flex flex-center h-175px w-175px me-15 mb-7'>
                <div className='position-absolute translate-middle start-50 top-50 d-flex flex-column flex-center'>
                  <span className='fs-2qx fw-bolder'>237</span>
                  <span className='fs-6 fw-bold text-gray-400'>Total Tasks</span>
                </div>
                <canvas id='project_overview_chart'></canvas>
              </div>
              <div className='d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5'>
                <div className='d-flex fs-6 fw-bold align-items-center mb-3'>
                  <div className='bullet bg-primary me-3'></div>
                  <div className='text-gray-400'>Active</div>
                  <div className='ms-auto fw-bolder text-gray-700'>30</div>
                </div>
                <div className='d-flex fs-6 fw-bold align-items-center mb-3'>
                  <div className='bullet bg-success me-3'></div>
                  <div className='text-gray-400'>Completed</div>
                  <div className='ms-auto fw-bolder text-gray-700'>45</div>
                </div>
                <div className='d-flex fs-6 fw-bold align-items-center mb-3'>
                  <div className='bullet bg-danger me-3'></div>
                  <div className='text-gray-400'>Overdue</div>
                  <div className='ms-auto fw-bolder text-gray-700'>0</div>
                </div>
                <div className='d-flex fs-6 fw-bold align-items-center'>
                  <div className='bullet bg-gray-300 me-3'></div>
                  <div className='text-gray-400'>Yet to start</div>
                  <div className='ms-auto fw-bolder text-gray-700'>25</div>
                </div>
              </div>
            </div>
            <div className='notice d-flex bg-light-primary rounded border-primary border border-dashed p-6'>
              <div className='d-flex flex-stack flex-grow-1'>
                <div className='fw-bold'>
                  <div className='fs-6 text-gray-700'>
                    <a href='#' className='fw-bolder me-1'>Invite New .NET Collaborators</a>to create great
                    outstanding business to business .jsp modutr class scripts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='card card-flush h-lg-100'>
          <div className='card-header mt-6'>
            <div className='card-title flex-column'>
              <h3 className='fw-bolder mb-1'>Tasks Over Time</h3>
              <div className='fs-6 d-flex text-gray-400 fs-6 fw-bold'>
                <div className='d-flex align-items-center me-6'>
														<span className='menu-bullet d-flex align-items-center me-2'>
															<span className='bullet bg-success'></span>
														</span>Complete
                </div>
                <div className='d-flex align-items-center'>
														<span className='menu-bullet d-flex align-items-center me-2'>
															<span className='bullet bg-primary'></span>
														</span>Incomplete
                </div>
              </div>
            </div>
            <div className='card-toolbar'>
              <select name='status' data-control='select2' data-hide-search='true'
                      className='form-select form-select-solid form-select-sm fw-bolder w-100px'>
                <option value='1'>2020 Q1</option>
                <option value='2'>2020 Q2</option>
                <option value='3'>2020 Q3</option>
                <option value='4'>2020 Q4</option>
              </select>
            </div>
          </div>
          <div className='card-body pt-10 pb-0 px-5'>
            <div id='kt_project_overview_graph' className='card-rounded-bottom' style={{height: '300px'}}/>
          </div>
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='card card-flush h-lg-100'>
          <div className='card-header mt-6'>
            <div className='card-title flex-column'>
              <h3 className='fw-bolder mb-1'>What's on the road?</h3>
              <div className='fs-6 text-gray-400'>Total 482 participants</div>
            </div>
            <div className='card-toolbar'>
              <select name='status' data-control='select2' data-hide-search='true'
                      className='form-select form-select-solid form-select-sm fw-bolder w-100px'>
                <option value='1'>Options</option>
                <option value='2'>Option 1</option>
                <option value='3'>Option 2</option>
                <option value='4'>Option 3</option>
              </select>
            </div>
          </div>
          <div className='card-body p-9 pt-4'>
            <ul className='nav nav-pills d-flex flex-nowrap hover-scroll-x py-2'>
              <li className='nav-item me-1'>
                <a
                  className='nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary'
                  data-bs-toggle='tab' href='#kt_schedule_day_0'>
                  <span className='opacity-50 fs-7 fw-bold'>Su</span>
                  <span className='fs-6 fw-bolder'>22</span>
                </a>
              </li>
              <li className='nav-item me-1'>
                <a
                  className='nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary active'
                  data-bs-toggle='tab' href='#kt_schedule_day_1'>
                  <span className='opacity-50 fs-7 fw-bold'>Mo</span>
                  <span className='fs-6 fw-bolder'>23</span>
                </a>
              </li>
              <li className='nav-item me-1'>
                <a
                  className='nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary'
                  data-bs-toggle='tab' href='#kt_schedule_day_2'>
                  <span className='opacity-50 fs-7 fw-bold'>Tu</span>
                  <span className='fs-6 fw-bolder'>24</span>
                </a>
              </li>
              <li className='nav-item me-1'>
                <a
                  className='nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary'
                  data-bs-toggle='tab' href='#kt_schedule_day_3'>
                  <span className='opacity-50 fs-7 fw-bold'>We</span>
                  <span className='fs-6 fw-bolder'>25</span>
                </a>
              </li>
              <li className='nav-item me-1'>
                <a
                  className='nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary'
                  data-bs-toggle='tab' href='#kt_schedule_day_4'>
                  <span className='opacity-50 fs-7 fw-bold'>Th</span>
                  <span className='fs-6 fw-bolder'>26</span>
                </a>
              </li>
              <li className='nav-item me-1'>
                <a
                  className='nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary'
                  data-bs-toggle='tab' href='#kt_schedule_day_5'>
                  <span className='opacity-50 fs-7 fw-bold'>Fr</span>
                  <span className='fs-6 fw-bolder'>27</span>
                </a>
              </li>
              <li className='nav-item me-1'>
                <a
                  className='nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary'
                  data-bs-toggle='tab' href='#kt_schedule_day_6'>
                  <span className='opacity-50 fs-7 fw-bold'>Sa</span>
                  <span className='fs-6 fw-bolder'>28</span>
                </a>
              </li>
              <li className='nav-item me-1'>
                <a
                  className='nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary'
                  data-bs-toggle='tab' href='#kt_schedule_day_7'>
                  <span className='opacity-50 fs-7 fw-bold'>Su</span>
                  <span className='fs-6 fw-bolder'>29</span>
                </a>
              </li>
              <li className='nav-item me-1'>
                <a
                  className='nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary'
                  data-bs-toggle='tab' href='#kt_schedule_day_8'>
                  <span className='opacity-50 fs-7 fw-bold'>Mo</span>
                  <span className='fs-6 fw-bolder'>30</span>
                </a>
              </li>
              <li className='nav-item me-1'>
                <a
                  className='nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary'
                  data-bs-toggle='tab' href='#kt_schedule_day_9'>
                  <span className='opacity-50 fs-7 fw-bold'>Tu</span>
                  <span className='fs-6 fw-bolder'>31</span>
                </a>
              </li>
            </ul>
            <div className='tab-content'>
              <div id='kt_schedule_day_0' className='tab-pane fade show'>
                <div className='d-flex flex-stack position-relative mt-8'>
                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>
                  <div className='fw-bold ms-5 text-gray-600'>
                    <div className='fs-5'>16:30 - 17:30
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>
                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Team Backlog Grooming
                      Session</a>
                    <div className='text-gray-400'>Lead by
                      <a href='#'>Karina Clarke</a></div>
                  </div>
                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>
                </div>
                <div className='d-flex flex-stack position-relative mt-8'>
                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>
                  <div className='fw-bold ms-5 text-gray-600'>
                    <div className='fs-5'>14:30 - 15:30
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>
                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Development Team
                      Capacity Review</a>
                    <div className='text-gray-400'>Lead by
                      <a href='#'>Peter Marcus</a></div>
                  </div>
                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>
                </div>
                <div className='d-flex flex-stack position-relative mt-8'>
                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>
                  <div className='fw-bold ms-5 text-gray-600'>
                    <div className='fs-5'>16:30 - 17:30
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>
                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Sales Pitch
                      Proposal</a>
                    <div className='text-gray-400'>Lead by
                      <a href='#'>Bob Harris</a></div>
                  </div>
                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>
                </div>
              </div>
              <div id='kt_schedule_day_1' className='tab-pane fade show active'>
                <div className='d-flex flex-stack position-relative mt-8'>
                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>
                  <div className='fw-bold ms-5 text-gray-600'>
                    <div className='fs-5'>16:30 - 17:30
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>
                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Marketing Campaign
                      Discussion</a>
                    <div className='text-gray-400'>Lead by
                      <a href='#'>Mark Randall</a></div>
                  </div>
                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>
                </div>
                <div className='d-flex flex-stack position-relative mt-8'>
                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>
                  <div className='fw-bold ms-5 text-gray-600'>
                    <div className='fs-5'>12:00 - 13:00
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>
                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Marketing Campaign
                      Discussion</a>
                    <div className='text-gray-400'>Lead by
                      <a href='#'>Walter White</a></div>
                  </div>
                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>
                </div>
                <div className='d-flex flex-stack position-relative mt-8'>
                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>13:00 - 14:00
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Team Backlog Grooming
                      Session</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Terry Robins</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>

              </div>


              <div id='kt_schedule_day_2' className='tab-pane fade show'>

                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>14:30 - 15:30
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Weekly Team
                      Stand-Up</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Karina Clarke</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>


                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>9:00 - 10:00
                      <span className='fs-7 text-gray-400 text-uppercase'>am</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>9 Degree Project
                      Estimation Meeting</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>David Stevenson</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>


                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>12:00 - 13:00
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Sales Pitch
                      Proposal</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Terry Robins</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>

              </div>


              <div id='kt_schedule_day_3' className='tab-pane fade show'>

                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>11:00 - 11:45
                      <span className='fs-7 text-gray-400 text-uppercase'>am</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Lunch &amp; Learn
                      Catch Up</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Sean Bean</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>


                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>16:30 - 17:30
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Dashboard UI/UX
                      Design Review</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Terry Robins</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>


                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>14:30 - 15:30
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Dashboard UI/UX
                      Design Review</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Sean Bean</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>

              </div>


              <div id='kt_schedule_day_4' className='tab-pane fade show'>

                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>16:30 - 17:30
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Marketing Campaign
                      Discussion</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Michael Walters</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>


                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>12:00 - 13:00
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Team Backlog Grooming
                      Session</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Karina Clarke</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>


                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>9:00 - 10:00
                      <span className='fs-7 text-gray-400 text-uppercase'>am</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>9 Degree Project
                      Estimation Meeting</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Sean Bean</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>

              </div>


              <div id='kt_schedule_day_5' className='tab-pane fade show'>

                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>9:00 - 10:00
                      <span className='fs-7 text-gray-400 text-uppercase'>am</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Team Backlog Grooming
                      Session</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Walter White</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>


                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>14:30 - 15:30
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Dashboard UI/UX
                      Design Review</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Kendell Trevor</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>


                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>16:30 - 17:30
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Marketing Campaign
                      Discussion</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Michael Walters</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>

              </div>


              <div id='kt_schedule_day_6' className='tab-pane fade show'>

                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>14:30 - 15:30
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Committee Review
                      Approvals</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Walter White</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>


                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>11:00 - 11:45
                      <span className='fs-7 text-gray-400 text-uppercase'>am</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Weekly Team
                      Stand-Up</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Mark Randall</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>


                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>11:00 - 11:45
                      <span className='fs-7 text-gray-400 text-uppercase'>am</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Team Backlog Grooming
                      Session</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Kendell Trevor</a></div>
                  </div>
                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>
                </div>
              </div>


              <div id='kt_schedule_day_7' className='tab-pane fade show'>

                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>16:30 - 17:30
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Team Backlog Grooming
                      Session</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Naomi Hayabusa</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>


                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>10:00 - 11:00
                      <span className='fs-7 text-gray-400 text-uppercase'>am</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Development Team
                      Capacity Review</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Naomi Hayabusa</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>


                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>12:00 - 13:00
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Sales Pitch
                      Proposal</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>David Stevenson</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>

              </div>


              <div id='kt_schedule_day_8' className='tab-pane fade show'>

                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>14:30 - 15:30
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Lunch &amp; Learn
                      Catch Up</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Caleb Donaldson</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>


                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>13:00 - 14:00
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>9 Degree Project
                      Estimation Meeting</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Michael Walters</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>


                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>13:00 - 14:00
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Sales Pitch
                      Proposal</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Caleb Donaldson</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>

              </div>


              <div id='kt_schedule_day_9' className='tab-pane fade show'>

                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>13:00 - 14:00
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Sales Pitch
                      Proposal</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Walter White</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>


                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>10:00 - 11:00
                      <span className='fs-7 text-gray-400 text-uppercase'>am</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>9 Degree Project
                      Estimation Meeting</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>David Stevenson</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>


                <div className='d-flex flex-stack position-relative mt-8'>

                  <div className='position-absolute h-100 w-4px bg-secondary rounded top-0 start-0'></div>


                  <div className='fw-bold ms-5 text-gray-600'>

                    <div className='fs-5'>16:30 - 17:30
                      <span className='fs-7 text-gray-400 text-uppercase'>pm</span></div>


                    <a href='#' className='fs-5 fw-bolder text-gray-800 text-hover-primary mb-2'>Team Backlog Grooming
                      Session</a>


                    <div className='text-gray-400'>Lead by
                      <a href='#'>Mark Randall</a></div>

                  </div>


                  <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View</a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      <div className='col-lg-6'>

        <div className='card card-flush h-lg-100'>

          <div className='card-header mt-6'>

            <div className='card-title flex-column'>
              <h3 className='fw-bolder mb-1'>Latest Files</h3>
              <div className='fs-6 text-gray-400'>Total 382 fiels, 2,6GB space usage</div>
            </div>


            <div className='card-toolbar'>
              <a href='#' className='btn btn-bg-light btn-active-color-primary btn-sm'>View All</a>
            </div>

          </div>


          <div className='card-body p-9 pt-3'>

            <div className='d-flex flex-column mb-9'>

              <div className='d-flex align-items-center mb-5'>

                <div className='symbol symbol-30px me-5'>
                  <img alt='Icon' src='assets/media/svg/files/pdf.svg' />
                </div>


                <div className='fw-bold'>
                  <a className='fs-6 fw-bolder text-dark text-hover-primary' href='#'>Project tech requirements</a>
                  <div className='text-gray-400'>2 days ago
                    <a href='#'>Karina Clark</a></div>
                </div>


                <button type='button'
                        className='btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto'
                        data-kt-menu-trigger='click' data-kt-menu-placement='bottom-end' data-kt-menu-flip='top-end'>

                    <span className='svg-icon svg-icon-3'>
																<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
                                     width='24px' height='24px' viewBox='0 0 24 24' version='1.1'>
																	<g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
																		<rect x='5' y='5' width='5' height='5' rx='1' fill='#000000' />
																		<rect x='14' y='5' width='5' height='5' rx='1' fill='#000000' opacity='0.3' />
																		<rect x='5' y='14' width='5' height='5' rx='1' fill='#000000' opacity='0.3' />
																		<rect x='14' y='14' width='5' height='5' rx='1' fill='#000000' opacity='0.3' />
																	</g>
																</svg>
															</span>

                </button>

                <div className='menu menu-sub menu-sub-dropdown w-250px w-md-300px' data-kt-menu='true'
                     id='kt_menu_610d48158eca4'>

                  <div className='px-7 py-5'>
                    <div className='fs-5 text-dark fw-bolder'>Filter Options</div>
                  </div>


                  <div className='separator border-gray-200'></div>


                  <div className='px-7 py-5'>

                    <div className='mb-10'>

                      <label className='form-label fw-bold'>Status:</label>


                      <div>
                        <select className='form-select form-select-solid' data-kt-select2='true'
                                data-placeholder='Select option' data-dropdown-parent='#kt_menu_610d48158eca4'
                                data-allow-clear='true'>
                          <option></option>
                          <option value='1'>Approved</option>
                          <option value='2'>Pending</option>
                          <option value='2'>In Process</option>
                          <option value='2'>Rejected</option>
                        </select>
                      </div>

                    </div>


                    <div className='mb-10'>

                      <label className='form-label fw-bold'>Member Type:</label>


                      <div className='d-flex'>

                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                          <input className='form-check-input' type='checkbox' value='1' />
                          <span className='form-check-label'>Author</span>
                        </label>


                        <label className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input className='form-check-input' type='checkbox' value='2' />
                          <span className='form-check-label'>Customer</span>
                        </label>

                      </div>

                    </div>


                    <div className='mb-10'>

                      <label className='form-label fw-bold'>Notifications:</label>


                      <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                        <input className='form-check-input' type='checkbox' value='' name='notifications'
                        />
                        <label className='form-check-label'>Enabled</label>
                      </div>

                    </div>


                    <div className='d-flex justify-content-end'>
                      <button type='reset' className='btn btn-sm btn-light btn-active-light-primary me-2'
                              data-kt-menu-dismiss='true'>Reset
                      </button>
                      <button type='submit' className='btn btn-sm btn-primary' data-kt-menu-dismiss='true'>Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <div className='d-flex align-items-center mb-5'>

                <div className='symbol symbol-30px me-5'>
                  <img alt='Icon' src='assets/media/svg/files/doc.svg' />
                </div>


                <div className='fw-bold'>
                  <a className='fs-6 fw-bolder text-dark text-hover-primary' href='#'>Create FureStibe branding
                    proposal</a>
                  <div className='text-gray-400'>Due in 1 day
                    <a href='#'>Marcus Blake</a></div>
                </div>


                <button type='button'
                        className='btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto'
                        data-kt-menu-trigger='click' data-kt-menu-placement='bottom-end' data-kt-menu-flip='top-end'>

                    <span className='svg-icon svg-icon-3'>
																<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
                                     width='24px' height='24px' viewBox='0 0 24 24' version='1.1'>
																	<g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
																		<rect x='5' y='5' width='5' height='5' rx='1' fill='#000000' />
																		<rect x='14' y='5' width='5' height='5' rx='1' fill='#000000' opacity='0.3' />
																		<rect x='5' y='14' width='5' height='5' rx='1' fill='#000000' opacity='0.3' />
																		<rect x='14' y='14' width='5' height='5' rx='1' fill='#000000' opacity='0.3' />
																	</g>
																</svg>
															</span>

                </button>

                <div className='menu menu-sub menu-sub-dropdown w-250px w-md-300px' data-kt-menu='true'
                     id='kt_menu_610d48158f22b'>

                  <div className='px-7 py-5'>
                    <div className='fs-5 text-dark fw-bolder'>Filter Options</div>
                  </div>


                  <div className='separator border-gray-200'></div>


                  <div className='px-7 py-5'>

                    <div className='mb-10'>

                      <label className='form-label fw-bold'>Status:</label>


                      <div>
                        <select className='form-select form-select-solid' data-kt-select2='true'
                                data-placeholder='Select option' data-dropdown-parent='#kt_menu_610d48158f22b'
                                data-allow-clear='true'>
                          <option></option>
                          <option value='1'>Approved</option>
                          <option value='2'>Pending</option>
                          <option value='2'>In Process</option>
                          <option value='2'>Rejected</option>
                        </select>
                      </div>

                    </div>


                    <div className='mb-10'>

                      <label className='form-label fw-bold'>Member Type:</label>


                      <div className='d-flex'>

                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                          <input className='form-check-input' type='checkbox' value='1' />
                          <span className='form-check-label'>Author</span>
                        </label>


                        <label className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input className='form-check-input' type='checkbox' value='2' />
                          <span className='form-check-label'>Customer</span>
                        </label>

                      </div>

                    </div>


                    <div className='mb-10'>

                      <label className='form-label fw-bold'>Notifications:</label>


                      <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                        <input className='form-check-input' type='checkbox' value='' name='notifications'
                        />
                        <label className='form-check-label'>Enabled</label>
                      </div>

                    </div>


                    <div className='d-flex justify-content-end'>
                      <button type='reset' className='btn btn-sm btn-light btn-active-light-primary me-2'
                              data-kt-menu-dismiss='true'>Reset
                      </button>
                      <button type='submit' className='btn btn-sm btn-primary' data-kt-menu-dismiss='true'>Apply
                      </button>
                    </div>

                  </div>

                </div>


              </div>


              <div className='d-flex align-items-center mb-5'>

                <div className='symbol symbol-30px me-5'>
                  <img alt='Icon' src='assets/media/svg/files/css.svg' />
                </div>


                <div className='fw-bold'>
                  <a className='fs-6 fw-bolder text-dark text-hover-primary' href='#'>Completed Project Stylings</a>
                  <div className='text-gray-400'>Due in 1 day
                    <a href='#'>Terry Barry</a></div>
                </div>


                <button type='button'
                        className='btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto'
                        data-kt-menu-trigger='click' data-kt-menu-placement='bottom-end' data-kt-menu-flip='top-end'>

                    <span className='svg-icon svg-icon-3'>
																<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
                                     width='24px' height='24px' viewBox='0 0 24 24' version='1.1'>
																	<g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
																		<rect x='5' y='5' width='5' height='5' rx='1' fill='#000000' />
																		<rect x='14' y='5' width='5' height='5' rx='1' fill='#000000' opacity='0.3' />
																		<rect x='5' y='14' width='5' height='5' rx='1' fill='#000000' opacity='0.3' />
																		<rect x='14' y='14' width='5' height='5' rx='1' fill='#000000' opacity='0.3' />
																	</g>
																</svg>
															</span>

                </button>

                <div className='menu menu-sub menu-sub-dropdown w-250px w-md-300px' data-kt-menu='true'
                     id='kt_menu_610d48158f6d2'>

                  <div className='px-7 py-5'>
                    <div className='fs-5 text-dark fw-bolder'>Filter Options</div>
                  </div>


                  <div className='separator border-gray-200'></div>


                  <div className='px-7 py-5'>

                    <div className='mb-10'>

                      <label className='form-label fw-bold'>Status:</label>


                      <div>
                        <select className='form-select form-select-solid' data-kt-select2='true'
                                data-placeholder='Select option' data-dropdown-parent='#kt_menu_610d48158f6d2'
                                data-allow-clear='true'>
                          <option></option>
                          <option value='1'>Approved</option>
                          <option value='2'>Pending</option>
                          <option value='2'>In Process</option>
                          <option value='2'>Rejected</option>
                        </select>
                      </div>

                    </div>


                    <div className='mb-10'>

                      <label className='form-label fw-bold'>Member Type:</label>


                      <div className='d-flex'>

                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                          <input className='form-check-input' type='checkbox' value='1' />
                          <span className='form-check-label'>Author</span>
                        </label>


                        <label className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input className='form-check-input' type='checkbox' value='2' />
                          <span className='form-check-label'>Customer</span>
                        </label>

                      </div>

                    </div>


                    <div className='mb-10'>

                      <label className='form-label fw-bold'>Notifications:</label>


                      <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                        <input className='form-check-input' type='checkbox' value='' name='notifications'
                        />
                        <label className='form-check-label'>Enabled</label>
                      </div>

                    </div>


                    <div className='d-flex justify-content-end'>
                      <button type='reset' className='btn btn-sm btn-light btn-active-light-primary me-2'
                              data-kt-menu-dismiss='true'>Reset
                      </button>
                      <button type='submit' className='btn btn-sm btn-primary' data-kt-menu-dismiss='true'>Apply
                      </button>
                    </div>

                  </div>

                </div>


              </div>


              <div className='d-flex align-items-center'>

                <div className='symbol symbol-30px me-5'>
                  <img alt='Icon' src='assets/media/svg/files/ai.svg' />
                </div>


                <div className='fw-bold'>
                  <a className='fs-6 fw-bolder text-dark text-hover-primary' href='#'>Create Project Wireframes</a>
                  <div className='text-gray-400'>Due in 3 days
                    <a href='#'>Roth Bloom</a></div>
                </div>


                <button type='button'
                        className='btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto'
                        data-kt-menu-trigger='click' data-kt-menu-placement='bottom-end' data-kt-menu-flip='top-end'>

                    <span className='svg-icon svg-icon-3'>
																<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
                                     width='24px' height='24px' viewBox='0 0 24 24' version='1.1'>
																	<g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
																		<rect x='5' y='5' width='5' height='5' rx='1' fill='#000000' />
																		<rect x='14' y='5' width='5' height='5' rx='1' fill='#000000' opacity='0.3' />
																		<rect x='5' y='14' width='5' height='5' rx='1' fill='#000000' opacity='0.3' />
																		<rect x='14' y='14' width='5' height='5' rx='1' fill='#000000' opacity='0.3' />
																	</g>
																</svg>
															</span>

                </button>

                <div className='menu menu-sub menu-sub-dropdown w-250px w-md-300px' data-kt-menu='true'
                     id='kt_menu_610d48158fb7c'>

                  <div className='px-7 py-5'>
                    <div className='fs-5 text-dark fw-bolder'>Filter Options</div>
                  </div>


                  <div className='separator border-gray-200'></div>


                  <div className='px-7 py-5'>

                    <div className='mb-10'>

                      <label className='form-label fw-bold'>Status:</label>


                      <div>
                        <select className='form-select form-select-solid' data-kt-select2='true'
                                data-placeholder='Select option' data-dropdown-parent='#kt_menu_610d48158fb7c'
                                data-allow-clear='true'>
                          <option></option>
                          <option value='1'>Approved</option>
                          <option value='2'>Pending</option>
                          <option value='2'>In Process</option>
                          <option value='2'>Rejected</option>
                        </select>
                      </div>

                    </div>


                    <div className='mb-10'>

                      <label className='form-label fw-bold'>Member Type:</label>


                      <div className='d-flex'>

                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                          <input className='form-check-input' type='checkbox' value='1' />
                          <span className='form-check-label'>Author</span>
                        </label>


                        <label className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input className='form-check-input' type='checkbox' value='2' />
                          <span className='form-check-label'>Customer</span>
                        </label>

                      </div>

                    </div>


                    <div className='mb-10'>

                      <label className='form-label fw-bold'>Notifications:</label>


                      <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                        <input className='form-check-input' type='checkbox' value='' name='notifications'
                        />
                        <label className='form-check-label'>Enabled</label>
                      </div>

                    </div>


                    <div className='d-flex justify-content-end'>
                      <button type='reset' className='btn btn-sm btn-light btn-active-light-primary me-2'
                              data-kt-menu-dismiss='true'>Reset
                      </button>
                      <button type='submit' className='btn btn-sm btn-primary' data-kt-menu-dismiss='true'>Apply
                      </button>
                    </div>

                  </div>

                </div>


              </div>

            </div>


            <div className='notice d-flex bg-light-primary rounded border-primary border border-dashed p-6'>


                <span className='svg-icon svg-icon-2tx svg-icon-primary me-4'>
														<svg xmlns='http://www.w3.org/2000/svg' width='67' height='67' viewBox='0 0 67 67'
                                 fill='none'>
															<path opacity='0.25'
                                    d='M8.375 11.167C8.375 6.54161 12.1246 2.79199 16.75 2.79199H43.9893C46.2105 2.79199 48.3407 3.67436 49.9113 5.24497L56.172 11.5057C57.7426 13.0763 58.625 15.2065 58.625 17.4277V55.8337C58.625 60.459 54.8754 64.2087 50.25 64.2087H16.75C12.1246 64.2087 8.375 60.459 8.375 55.8337V11.167Z'
                                    fill='#00A3FF' />
															<path
                                d='M41.875 5.28162C41.875 3.90663 42.9896 2.79199 44.3646 2.79199V2.79199C46.3455 2.79199 48.2452 3.57889 49.6459 4.97957L56.4374 11.7711C57.8381 13.1718 58.625 15.0715 58.625 17.0524V17.0524C58.625 18.4274 57.5104 19.542 56.1354 19.542H44.6667C43.1249 19.542 41.875 18.2921 41.875 16.7503V5.28162Z'
                                fill='#00A3FF' />
															<path
                                d='M32.4311 25.3368C32.1018 25.4731 31.7933 25.675 31.5257 25.9427L23.1507 34.3177C22.0605 35.4079 22.0605 37.1755 23.1507 38.2657C24.2409 39.3559 26.0085 39.3559 27.0987 38.2657L30.708 34.6563V47.4583C30.708 49.0001 31.9579 50.25 33.4997 50.25C35.0415 50.25 36.2913 49.0001 36.2913 47.4583V34.6563L39.9007 38.2657C40.9909 39.3559 42.7585 39.3559 43.8487 38.2657C44.9389 37.1755 44.9389 35.4079 43.8487 34.3177L35.4737 25.9427C34.6511 25.1201 33.443 24.9182 32.4311 25.3368Z'
                                fill='#00A3FF' />
														</svg>
													</span>


              <div className='d-flex flex-stack flex-grow-1'>

                <div className='fw-bold'>
                  <h4 className='text-gray-900 fw-bolder'>Quick file uploader</h4>
                  <div className='fs-6 text-gray-700'>Drag &amp; Drop or choose files from computer</div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>

  )
}