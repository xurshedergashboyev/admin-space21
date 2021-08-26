import React, {FC} from 'react'
import {TablesWidget9} from '../../../../_metronic/partials/widgets'

const LeadsTable: FC = () => {
  return (
    <>
      <div className='row gy-5 g-xl-8'>
        <TablesWidget9 className={''} leads={true} />
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
      </div>
    </>
  )
}

export default LeadsTable