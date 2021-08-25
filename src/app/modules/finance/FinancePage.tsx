import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {FinanceStatements} from './components/FinanceStatements'
import {FinanceReferrals} from './components/FinanceReferrals'

export default function CoursesPage () {
  const profileBreadCrumbs: Array<PageLink> = [
    {
      title: 'Finance',
      path: '/crafted/finance/overview',
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
        <Route path="/crafted/finances/oveview/">
          <PageTitle breadcrumbs={profileBreadCrumbs}>Finance</PageTitle>
          <FinanceStatements />
          <FinanceReferrals />
        </Route>
      </Switch>
    </>
  )
}


