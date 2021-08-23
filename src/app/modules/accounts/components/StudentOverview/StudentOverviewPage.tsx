import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {StudentsOverview} from '../StudentsOverview'

export default function StudentOverviewPage () {
  const profileBreadCrumbs: Array<PageLink> = [
    {
      title: 'Student Overview',
      path: '/crafted/account/student/overview',
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
        <Route path="/crafted/account/student/overview/">
          <PageTitle breadcrumbs={profileBreadCrumbs}>Student Overview</PageTitle>
          {/*<CoursesWrapper />*/}
          <StudentsOverview />
        </Route>
      </Switch>
    </>
  )
}


