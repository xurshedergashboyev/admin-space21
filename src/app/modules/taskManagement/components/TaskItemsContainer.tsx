import React, {FC} from 'react';
import {TaskItemsColumn} from './TaskItemsColumn'
import {TaskItemsProgress} from './TaskItemsProgress'
import {TasksItem} from './TasksItem'
import {TaskUserIcon} from './TaskUserIcon'

const users1: Array<TaskUserIcon> = [
  {name: 'Khurshed Ergashbaev', avatar: '/media/avatars/150-1.jpg'},
  {name: 'Muhammad Zakirov', avatar: '/media/avatars/150-2.jpg'},
  {name: 'Maraim Tukhtasunov', initials: 'S', color: 'primary'}
]

const TaskItemsContainer: FC = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          My Projects
          <span className='fs-6 text-gray-400 fw-bold ms-1'>Active</span>
        </h3>

        <div className='d-flex flex-wrap my-2'>
          <div className='me-4'>
            <select
              name='status'
              data-control='select2'
              data-hide-search='true'
              className='form-select form-select-sm form-select-white w-125px'
              defaultValue='Active'
            >
              <option value='Active'>Development</option>
              <option value='Approved'>Design</option>
              <option value='Declined'>SMM</option>
              <option value='In Progress'>Administration</option>
            </select>
          </div>
          <a
            href='#'
            className='btn btn-primary btn-sm'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_invite_users'
          >
            New Project
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className='row g-6 g-xl-9'>
          <div className='col-md-10 col-xl-10'>
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
        <div className='row g-6 g-xl-9'>
          <div className='col-md-6 col-xl-10'>
            <TaskItemsProgress name={'Doing'} progress={'Doing'} borderColor={'primary'} />
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
        <div className='row g-6 g-xl-9'>
          <div className='col-md-6 col-xl-10'>
            <TaskItemsProgress name={'Testing'} progress={'Testing'} borderColor={'warning'} />
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
        <div className='row g-6 g-xl-9'>
          <div className='col-md-6 col-xl-10'>
            <TaskItemsProgress name={'Completed'} progress={'Completed'} borderColor={'success'} />
            <TasksItem
              icon='/media/svg/brand-logos/plurk.svg'
              badgeColor='success'
              status='Done'
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
      </div>
    </>
  )
}

export {TaskItemsContainer};