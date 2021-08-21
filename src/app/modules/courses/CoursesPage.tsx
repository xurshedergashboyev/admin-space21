import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {CoursesWrapper} from './components/CoursesWrapper'

export default function Coursespage () {
  const profileBreadCrumbs: Array<PageLink> = [
    {
      title: 'Courses',
      path: '/crafted/courses/overview',
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
        <Route path="/crafted/courses">
          <PageTitle breadcrumbs={profileBreadCrumbs}>Courses</PageTitle>
          <CoursesWrapper />
        </Route>
      </Switch>
    </>
  )
}


