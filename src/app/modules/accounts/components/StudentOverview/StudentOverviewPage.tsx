import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {StudentsOverview} from '../StudentsOverview'

export default function StudentOverviewPage () {
  const profileBreadCrumbs: Array<PageLink> = [
    {
      title: 'Student info',
      path: '/crafted/account/student/info/',
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
        <Route path="/crafted/account/student/info/">
          <PageTitle breadcrumbs={profileBreadCrumbs}>Student Overview</PageTitle>
          <StudentsOverview />
        </Route>
      </Switch>
    </>
  )
}


