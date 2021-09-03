import bootstrap from 'bootstrap'
import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {OverlayTrigger, Tooltip} from 'react-bootstrap-v5'

type Props = {
  name: string
  progress: string
  borderColor: string
  handleDelete: any
}

const TaskItemsProgress: FC<Props> = ({name, progress, borderColor, handleDelete}) => {
  // const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  // const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  //   return new bootstrap.Tooltip(tooltipTriggerEl)
  // })
  return (
    <>
      <div
        className={`w-300 d-flex align-items-center justify-content-between card-header border-3 border-top-solid border-${borderColor} mb-5`}
      >
        <div className='card-title m-0'>
          <div className='p-2'>{name}</div>
        </div>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='card-toolbar cursor-pointer'>
            <span className={`badge badge-light-${borderColor} fw-bolder mx-2`}>+</span>
          </div>
          <OverlayTrigger
            key={'delete'}
            overlay={<Tooltip id={'tooltip-user-name'}>Delete</Tooltip>}
            placement={'top'}
          >
            <div className='card-toolbar cursor-pointer' onClick={handleDelete}>
              <span className={`badge badge-light-danger fw-bolder`}>
                <KTSVG
                  path='/media/icons/duotone/General/Trash.svg'
                  className='svg-icon-1hx svg-icon-danger'
                />
              </span>
            </div>
          </OverlayTrigger>
        </div>
      </div>
    </>
  )
}

export {TaskItemsProgress}
