import React, {FC, useState} from 'react'
import {TaskItemsProgress} from './TaskItemsProgress'
import {TasksItem} from './TasksItem'
import {TaskUserIcon} from './TaskUserIcon'
import {data} from './data'
import {TaskUsers} from './TaskUsers'
import {OverlayTrigger, Tooltip} from 'react-bootstrap-v5'
import {KTSVG} from '../../../../_metronic/helpers'

const users1: Array<TaskUserIcon> = [
  {name: 'Khurshed Ergashbaev', avatar: '/media/avatars/150-1.jpg'},
  {name: 'Muhammad Zakirov', avatar: '/media/avatars/150-2.jpg'},
  {name: 'Maraim Tukhtasunov', initials: 'P', color: 'primary'},
]

const TaskItemsContainer: FC = () => {
  const [boards, setBoards] = useState(data)
  const [currentBoard, setCurrentBoard] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)

  const dragOver = (e: any) => {
    e.preventDefault()
    if (e.target.className == 'item') {
      e.target.style.backgroundColor = '#ffbf2b'
    }
  }
  const dragStart = (e: any, board: any, i: any) => {
    setCurrentBoard(board)
    setCurrentItem(i)
  }
  const drop = (e: any, board: any, i: any) => {
    e.preventDefault()
    // @ts-ignore
    const currentIndex = currentBoard.items.indexOf(currentItem)
    // @ts-ignore
    currentBoard.items.splice(currentIndex, 1)
    const dropIndex = board.items.indexOf(i)
    board.items.splice(dropIndex + 1, 1, currentItem)
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board
        } else {
          // @ts-ignore
          if (b.id === currentBoard.id) {
            return currentBoard
          }
        }
        return b
      })
    )
  }

  const dropBoard = (e: any, board: any) => {
    board.items.push(currentItem)
    // @ts-ignore
    const currentIndex = currentBoard.items.indexOf(currentItem)
    // @ts-ignore
    currentBoard.items.splice(currentIndex, 1)
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board
        } else {
          // @ts-ignore
          if (b.id === currentBoard.id) {
            return currentBoard
          }
        }
        return b
      })
    )
  }

  const handleDelete = (id: number) => {
    const remove = boards.filter((todo) => todo.id !== id)
    setBoards(remove)
  }

  const handleDeleteCard = (id: number, i: number) => {
    const remove = boards[i]?.items.filter((todo) => todo.id !== id)
  }
  // @ts-ignore
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6 overflow-auto'>
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
      <div className='d-flex justify-content-between'>
        {boards.map((board) => (
          <>
            <div className='row g-6 g-xl-9'>
              <div
                className='col-md-10 col-xl-10'
                onDragOver={(e) => dragOver(e)}
                onDrop={(e) => dropBoard(e, board)}
              >
                <TaskItemsProgress
                  name={board.title}
                  progress={board.title}
                  borderColor={board.color}
                  handleDelete={() => handleDelete(board.id)}
                />
                {board.items.map((b, i) => (
                  <>
                    <TasksItem
                      onDragOver={(e: any) => dragOver(e)}
                      onDragStart={(e: any) => dragStart(e, board, b)}
                      onDrop={(e: any) => drop(e, board, b)}
                      icon='/media/svg/brand-logos/plurk.svg'
                      badgeColor='primary'
                      status='Hot'
                      statusColor='primary'
                      title={b.title}
                      description='CRM App application to HR efficiency'
                      date='August 30, 2021'
                      budget='$284,900.00'
                      progress={'50'}
                      users={users1}
                      id={b.id}
                      handleDelete={() => handleDeleteCard(b.id, i)}
                      categoryColor={board.color}
                      category={b.progress}
                    />
                    <div
                      className='modal fade'
                      id='exampleModalToggle2'
                      aria-hidden='true'
                      aria-labelledby='exampleModalToggleLabel2'
                    >
                      <div className='modal-dialog modal-fullscreen'>
                        <div className='modal-content'>
                          <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalToggleLabel2'>
                              {b.title} {b.id}
                            </h5>
                            <button className={`btn btn-${board.color} mx-5`}>{b.progress}</button>
                            <TaskUsers users={users1} />
                            <OverlayTrigger
                              key={'hot'}
                              overlay={<Tooltip id={'tooltip-user-name'}>hot</Tooltip>}
                              placement={'bottom'}
                            >
                              <div className='symbol symbol-35px symbol-circle border-danger border mx-5'>
                                <KTSVG
                                  path='/media/icons/duotone/Design/Target.svg'
                                  className='svg-icon-2hx svg-icon-danger'
                                />
                              </div>
                            </OverlayTrigger>
                            <button
                              type='button'
                              className='btn-close'
                              data-bs-dismiss='modal'
                              aria-label='Close'
                            />
                          </div>
                          <div className='modal-body'>
                            <textarea
                              className='bi-textarea-resize w-50 fs-1 p-5'
                              value={b.title}
                              onChange={(e) => e.target.value}
                            />
                            <div id='toolbar' />

                            <div id='editor'>
                              <textarea
                                value={'CRM App application to HR efficiency'}
                                onChange={(e) => e.target.value}
                                className='bi-textarea-resize w-50 fs-1 p-5'
                              />
                            </div>
                            <div className='d-flex align-items-center'>
                              <h3 className='fs-1 my-5'>To do</h3>
                              <div className='me-4'>
                                <select
                                  name='status'
                                  data-control='select2'
                                  data-hide-search='true'
                                  className='form-select form-select-sm form-select-white w-125px border border-danger border-active mx-5 form-select-border-color-danger'
                                  defaultValue='Active'
                                >
                                  <option value='Active'>Subtask</option>
                                  <option value='Approved'>Checklist</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            {/*<div className='row g-6 g-xl-9'>*/}
            {/*  <div className='col-md-6 col-xl-10'>*/}
            {/*    <TaskItemsProgress name={'Doing'} progress={'Doing'} borderColor={'primary'} />*/}
            {/*    <TasksItem*/}
            {/*      icon='/media/svg/brand-logos/plurk.svg'*/}
            {/*      badgeColor='primary'*/}
            {/*      status='In Progress'*/}
            {/*      statusColor='primary'*/}
            {/*      title='Fitnes App'*/}
            {/*      description='CRM App application to HR efficiency'*/}
            {/*      date='August 30, 2021'*/}
            {/*      budget='$284,900.00'*/}
            {/*      progress={'50'}*/}
            {/*      users={users1}*/}
            {/*    />*/}
            {/*    <TasksItem*/}
            {/*      icon='/media/svg/brand-logos/plurk.svg'*/}
            {/*      badgeColor='primary'*/}
            {/*      status='In Progress'*/}
            {/*      statusColor='primary'*/}
            {/*      title='Fitnes App'*/}
            {/*      description='CRM App application to HR efficiency'*/}
            {/*      date='August 30, 2021'*/}
            {/*      budget='$284,900.00'*/}
            {/*      progress={'50'}*/}
            {/*      users={users1}*/}
            {/*    />*/}
            {/*    <TasksItem*/}
            {/*      icon='/media/svg/brand-logos/plurk.svg'*/}
            {/*      badgeColor='primary'*/}
            {/*      status='In Progress'*/}
            {/*      statusColor='primary'*/}
            {/*      title='Fitnes App'*/}
            {/*      description='CRM App application to HR efficiency'*/}
            {/*      date='August 30, 2021'*/}
            {/*      budget='$284,900.00'*/}
            {/*      progress={'50'}*/}
            {/*      users={users1}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className='row g-6 g-xl-9'>*/}
            {/*  <div className='col-md-6 col-xl-10'>*/}
            {/*    <TaskItemsProgress name={'Testing'} progress={'Testing'} borderColor={'warning'} />*/}
            {/*    <TasksItem*/}
            {/*      icon='/media/svg/brand-logos/plurk.svg'*/}
            {/*      badgeColor='primary'*/}
            {/*      status='In Progress'*/}
            {/*      statusColor='primary'*/}
            {/*      title='Fitnes App'*/}
            {/*      description='CRM App application to HR efficiency'*/}
            {/*      date='August 30, 2021'*/}
            {/*      budget='$284,900.00'*/}
            {/*      progress={'50'}*/}
            {/*      users={users1}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className='row g-6 g-xl-9'>*/}
            {/*  <div className='col-md-6 col-xl-10'>*/}
            {/*    <TaskItemsProgress*/}
            {/*      name={'Completed'}*/}
            {/*      progress={'Completed'}*/}
            {/*      borderColor={'success'}*/}
            {/*    />*/}
            {/*    <TasksItem*/}
            {/*      icon='/media/svg/brand-logos/plurk.svg'*/}
            {/*      badgeColor='success'*/}
            {/*      status='Done'*/}
            {/*      statusColor='primary'*/}
            {/*      title='Fitnes App'*/}
            {/*      description='CRM App application to HR efficiency'*/}
            {/*      date='August 30, 2021'*/}
            {/*      budget='$284,900.00'*/}
            {/*      progress={'50'}*/}
            {/*      users={users1}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
          </>
        ))}
        {/*<div className='row g-6 g-xl-9'>*/}
        {/*  <div className='col-md-10 col-xl-10' onDragOver={(e) => dragOver(e)}*/}
        {/*       onDrop={(e) => dropBoard(e, board)}>*/}
        {/*    <TaskItemsProgress name={'Todo'} progress={'Todo'} borderColor={'danger'} />*/}
        {/*    <TasksItem*/}
        {/*      icon='/media/svg/brand-logos/plurk.svg'*/}
        {/*      badgeColor='primary'*/}
        {/*      status='In Progress'*/}
        {/*      statusColor='primary'*/}
        {/*      title='Fitnes App'*/}
        {/*      description='CRM App application to HR efficiency'*/}
        {/*      date='August 30, 2021'*/}
        {/*      budget='$284,900.00'*/}
        {/*      progress={'50'}*/}
        {/*      users={users1}*/}
        {/*    />*/}
        {/*    <TasksItem*/}
        {/*      icon='/media/svg/brand-logos/plurk.svg'*/}
        {/*      badgeColor='primary'*/}
        {/*      status='In Progress'*/}
        {/*      statusColor='primary'*/}
        {/*      title='Fitnes App'*/}
        {/*      description='CRM App application to HR efficiency'*/}
        {/*      date='August 30, 2021'*/}
        {/*      budget='$284,900.00'*/}
        {/*      progress={'50'}*/}
        {/*      users={users1}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className='row g-6 g-xl-9'>*/}
        {/*  <div className='col-md-6 col-xl-10'>*/}
        {/*    <TaskItemsProgress name={'Doing'} progress={'Doing'} borderColor={'primary'} />*/}
        {/*    <TasksItem*/}
        {/*      icon='/media/svg/brand-logos/plurk.svg'*/}
        {/*      badgeColor='primary'*/}
        {/*      status='In Progress'*/}
        {/*      statusColor='primary'*/}
        {/*      title='Fitnes App'*/}
        {/*      description='CRM App application to HR efficiency'*/}
        {/*      date='August 30, 2021'*/}
        {/*      budget='$284,900.00'*/}
        {/*      progress={'50'}*/}
        {/*      users={users1}*/}
        {/*    />*/}
        {/*    <TasksItem*/}
        {/*      icon='/media/svg/brand-logos/plurk.svg'*/}
        {/*      badgeColor='primary'*/}
        {/*      status='In Progress'*/}
        {/*      statusColor='primary'*/}
        {/*      title='Fitnes App'*/}
        {/*      description='CRM App application to HR efficiency'*/}
        {/*      date='August 30, 2021'*/}
        {/*      budget='$284,900.00'*/}
        {/*      progress={'50'}*/}
        {/*      users={users1}*/}
        {/*    />*/}
        {/*    <TasksItem*/}
        {/*      icon='/media/svg/brand-logos/plurk.svg'*/}
        {/*      badgeColor='primary'*/}
        {/*      status='In Progress'*/}
        {/*      statusColor='primary'*/}
        {/*      title='Fitnes App'*/}
        {/*      description='CRM App application to HR efficiency'*/}
        {/*      date='August 30, 2021'*/}
        {/*      budget='$284,900.00'*/}
        {/*      progress={'50'}*/}
        {/*      users={users1}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className='row g-6 g-xl-9'>*/}
        {/*  <div className='col-md-6 col-xl-10'>*/}
        {/*    <TaskItemsProgress name={'Testing'} progress={'Testing'} borderColor={'warning'} />*/}
        {/*    <TasksItem*/}
        {/*      icon='/media/svg/brand-logos/plurk.svg'*/}
        {/*      badgeColor='primary'*/}
        {/*      status='In Progress'*/}
        {/*      statusColor='primary'*/}
        {/*      title='Fitnes App'*/}
        {/*      description='CRM App application to HR efficiency'*/}
        {/*      date='August 30, 2021'*/}
        {/*      budget='$284,900.00'*/}
        {/*      progress={'50'}*/}
        {/*      users={users1}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className='row g-6 g-xl-9'>*/}
        {/*  <div className='col-md-6 col-xl-10'>*/}
        {/*    <TaskItemsProgress name={'Completed'} progress={'Completed'} borderColor={'success'} />*/}
        {/*    <TasksItem*/}
        {/*      icon='/media/svg/brand-logos/plurk.svg'*/}
        {/*      badgeColor='success'*/}
        {/*      status='Done'*/}
        {/*      statusColor='primary'*/}
        {/*      title='Fitnes App'*/}
        {/*      description='CRM App application to HR efficiency'*/}
        {/*      date='August 30, 2021'*/}
        {/*      budget='$284,900.00'*/}
        {/*      progress={'50'}*/}
        {/*      users={users1}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </>
  )
}

export {TaskItemsContainer}
