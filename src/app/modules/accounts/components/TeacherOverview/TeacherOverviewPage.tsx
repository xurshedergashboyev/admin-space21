import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {StudentsOverview} from '../StudentsOverview'
import {TeacherOverview} from '../TeachersOverview'

export default function StudentOverviewPage () {
  const profileBreadCrumbs: Array<PageLink> = [
    {
      title: 'Teacher info',
      path: '/crafted/account/teacher/info/',
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
        <Route path="/crafted/account/teacher/info/">
          <PageTitle breadcrumbs={profileBreadCrumbs}>Teacher Overview</PageTitle>
          <TeacherOverview />
        </Route>
      </Switch>
    </>
  )
}


