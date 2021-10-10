import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {TaskUserIcon} from '../../taskManagement/components/TaskUserIcon'
import {TaskUsers} from '../../taskManagement/components/TaskUsers'
import {data} from './data'

const DocsItem: FC = () => {
  return (
    <>
      <div className={'d-flex justify-content-around flex-wrap'}>
        {data.map((value, i) => (
          <div
            className='card border border-2 border-gray-300 border-hover mb-5'
            // data-bs-target='#exampleModalToggle2'
            // data-bs-toggle='modal'
            // data-bs-dismiss='modal'
          >
            <div className='card-header border-0'>
              <div className='card-title m-0'>
                <div className='fs-6 mx-1'>Oct 10, 2021</div>
              </div>
              <div className='card-toolbar'>
                <span className={`badge badge-light-primary fw-bolder`}>Info</span>
                <span className={`badge badge-light-light fw-bolder mx-2 cursor-pointer`}>
                  <KTSVG path='/media/icons/duotone/Files/File.svg' className='svg-icon-1hx' />
                </span>
              </div>
            </div>

            <div className='card-body px-9 pt-0'>
              <div className='fs-5 fw-bolder text-dark'>{value.title}</div>
              <p className='text-gray-400 fw-bold fs-7 mt-1 mb-7'>{value.items[0].title}</p>
              <div
                className='h-4px w-100 bg-light mb-5'
                data-bs-toggle='tooltip'
                title='This project completed'
              >
                <div className={'my-5'}>Everything</div>
              </div>
              {/*<TaskUsers users={users} />*/}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default DocsItem
