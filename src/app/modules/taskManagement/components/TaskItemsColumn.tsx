import React from 'react';
import {TasksItem} from './TasksItem';
import {TaskUserIcon} from './TaskUserIcon'
import {TaskItemsProgress} from './TaskItemsProgress'

const TaskItemsColumn = () => {
  return (
    <>
      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xl-12'>
          <TaskItemsProgress name={'Todo'} progress={'Todo'} borderColor={'danger'} />
          <TasksItem
            icon='/media/svg/brand-logos/plurk.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='Fitnes App'
            description='CRM App application to HR efficiency'
            date='August 30, 2021'
            budget='$284,900.00'
            progress={"50"}
            users={users1}
          />
        </div>
      </div>
    </>
  )
}

const users1: Array<TaskUserIcon> = [
  {name: 'Khurshed Ergashbaev', avatar: '/media/avatars/150-1.jpg'},
  {name: 'Muhammad Zakirov', avatar: '/media/avatars/150-2.jpg'},
  {name: 'Maraim Tukhtasunov', initials: 'S', color: 'primary'}
]

export {TaskItemsColumn};