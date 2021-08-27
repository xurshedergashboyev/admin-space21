import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {TaskItemsColumn} from './components/TaskItemsColumn'
import {TaskItemsContainer} from './components/TaskItemsContainer'

export default function CoursesPage () {
  const profileBreadCrumbs: Array<PageLink> = [
    {
      title: 'Task Management',
      path: '/crafted/task-management/overview',
      isSeparator: false,
      isActive: false,
    },
    {
      title: '',
      path: '',
      isSeparator: true,
      isActive: false,
    },
  ]

  return (
    <>
      <Switch>
        <Route path="/crafted/task-management/overview">
          <PageTitle breadcrumbs={profileBreadCrumbs}>Task Management</PageTitle>
          <TaskItemsContainer />
        </Route>
      </Switch>
    </>
  )
}


