import React from 'react'
import {Route} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'

export default function Coursespage () {
  const profileBreadCrumbs: Array<PageLink> = [
    {
      title: 'Courses',
      path: '/crafted/pages/courses/overview',
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
      <Route path="/crafted/courses">
        <PageTitle breadcrumbs={profileBreadCrumbs}>Hello</PageTitle>
      </Route>
    </>
  )
}


