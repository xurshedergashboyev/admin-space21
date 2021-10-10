import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {TaskUserIcon} from '../../taskManagement/components/TaskUserIcon'
import {TaskUsers} from '../../taskManagement/components/TaskUsers'
import {data} from './data'

const DocsItem: FC = () => {
  return (
    <>
      <div className={'d-flex justify-content-around d-wrap'}>
        {data.map((value, i) => (
          <div
            className='card border border-2 border-gray-300 border-hover mb-5'
            // data-bs-target='#exampleModalToggle2'
            // data-bs-toggle='modal'
            // data-bs-dismiss='modal'
          >
            <div className='card-header border-0'>
              <div className='card-title m-0'>
                <div className='symbol symbol-30px w-30px bg-light'>
                  {/*<img src={toAbsoluteUrl(value.items.icon)} alt='card2' className='p-3' />*/}
                </div>
              </div>
              <div className='card-toolbar'>
                <span className={`badge badge-light-primary fw-bolder`}>Info</span>
                <span className={`badge badge-light-primary fw-bolder mx-2 cursor-pointer`}>
                  <KTSVG path='/media/icons/duotone/General/Edit.svg' className='svg-icon-1hx' />
                </span>
              </div>
            </div>

            <div className='card-body px-9 pt-0'>
              <div className='fs-5 fw-bolder text-dark'>{value.title}</div>
              <p className='text-gray-400 fw-bold fs-7 mt-1 mb-7'>{value.items[0].title}</p>
              {/*<div className='d-flex flex-wrap mb-5'>*/}
              {/*  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3'>*/}
              {/*    <div className='fs-7 text-gray-800 fw-bolder'>{date}</div>*/}
              {/*    <div className='fw-bold text-gray-400'>Due Date</div>*/}
              {/*  </div>*/}

              {/*  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3'>*/}
              {/*    <div className='fs-6 text-gray-800 fw-bolder'>{budget}</div>*/}
              {/*    <div className='fw-bold text-gray-400'>Budget</div>*/}
              {/*  </div>*/}
              {/*</div>*/}

              <div
                className='h-4px w-100 bg-light mb-5'
                data-bs-toggle='tooltip'
                title='This project completed'
              >
                <div
                  className={`bg-${value.color} rounded h-4px`}
                  role='progressbar'
                  style={{width: `54%`}}
                />
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
