import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {TeachersOverview} from './components/TeachersOverview'
import {StudentAccountHeader} from './StudentAccountHeader'

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Account',
    path: '/crafted/account/teachers/overview',
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



const AccountPage: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/crafted/account/teachers/overview'>
          <StudentAccountHeader />
          <PageTitle breadcrumbs={accountBreadCrumbs}>Teachers</PageTitle>
          <TeachersOverview />
        </Route>
        {/*<Route path='/crafted/account/settings'>*/}
        {/*  <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle>*/}
        {/*  <Settings />*/}
        {/*</Route>*/}

        <Route path="/crafted/account/students/overview">
          <StudentAccountHeader />
          <PageTitle breadcrumbs={accountBreadCrumbs}>Students</PageTitle>
        </Route>
        <Redirect from='/crafted/account' exact={true} to='/crafted/account/teachers/overview' />
        <Redirect to='/crafted/account/teachers/overview' />
      </Switch>
    </>
  )
}

export default AccountPage
