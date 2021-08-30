import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import LeadsTable from './components/LeadsTable'

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Leads',
    path: '/crafted/leads/overview/',
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

const LeadsPage: React.FC = () => {
  return (
    <>
      <Switch>
        {/*<Route path='/crafted/account/teachers/overview'>*/}
        {/*  <PageTitle breadcrumbs={accountBreadCrumbs}>Teachers</PageTitle>*/}
        {/*  <TeachersOverview />*/}
        {/*</Route>*/}
        <Route path='/crafted/leads/overview/'>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Overview</PageTitle>
          <LeadsTable />
        </Route>
      </Switch>
    </>
  )
}

export default LeadsPage
