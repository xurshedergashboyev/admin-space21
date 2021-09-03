import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {TaskUsers} from './TaskUsers'

interface TaskIconUser {
  name: string
  avatar?: string
  color?: string
  initials?: string
}

type Props = {
  icon: string
  badgeColor: string
  status: string
  statusColor: string
  title: string
  description: string
  date: string
  budget: string
  progress: string
  users?: Array<TaskIconUser>
  onDragStart: any
  onDragOver: any
  onDrop: any
  id: number
  handleDelete: any
}

const TasksItem: FC<Props> = ({
  icon,
  badgeColor,
  status,
  statusColor,
  title,
  description,
  date,
  budget,
  progress,
  users,
  onDrop,
  onDragOver,
  onDragStart,
  id,
  handleDelete,
}) => {
  // @ts-ignore
  return (
    <Link
      to='/crafted/task-management/'
      className='card border border-2 border-gray-300 border-hover mb-5'
      draggable={'true'}
      onDrop={onDrop}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
    >
      <div className='card-header border-0'>
        <div className='card-title m-0'>
          <div className='symbol symbol-30px w-30px bg-light'>
            <img src={toAbsoluteUrl(icon)} alt='card2' className='p-3' />
          </div>
        </div>

        <div className='card-toolbar'>
          <span className={`badge badge-light-${badgeColor} fw-bolder`}>{status}</span>
          <span
            className={`badge badge-light-${badgeColor} fw-bolder mx-2 cursor-pointer`}
            onClick={handleDelete}
          >
            <KTSVG path='/media/icons/duotone/General/Edit.svg' className='svg-icon-1hx' />
          </span>
        </div>
      </div>

      <div className='card-body px-9 pt-0'>
        <div className='fs-5 fw-bolder text-dark'>{title}</div>
        <p className='text-gray-400 fw-bold fs-7 mt-1 mb-7'>{description}</p>
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
            className={`bg-${statusColor} rounded h-4px`}
            role='progressbar'
            style={{width: `${progress}%`}}
          />
        </div>
        <TaskUsers users={users} />
      </div>
    </Link>
  )
}

export {TasksItem}
