import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {TaskItemsContainer} from './components/TaskItemsContainer'
import {CreatePageCard} from './components/CreatePageCard'

export default function CoursesPage() {
  const profileBreadCrumbs: Array<PageLink> = [
    {
      title: 'Task Management',
      path: '/crafted/task-management/create-space',
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
        <Route path='/crafted/task-management/create-space/'>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Create Space</PageTitle>
          {/*<TaskItemsContainer />*/}
          <CreatePageCard />
        </Route>
      </Switch>
    </>
  )
}
