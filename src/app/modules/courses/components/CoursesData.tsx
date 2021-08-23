import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core';
import {CoursesItem} from './CoursesItem';

export default function CoursesInfoPage () {
  const profileBreadCrumbs: Array<PageLink> = [
    {
      title: 'Courses',
      path: '/crafted/courses/info',
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
        <Route path="/crafted/courses/info">
          <PageTitle breadcrumbs={profileBreadCrumbs}>Courses</PageTitle>
          <CoursesItem />
        </Route>
      </Switch>
    </>
  )
}


