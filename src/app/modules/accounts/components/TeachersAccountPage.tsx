import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {PageLink, PageTitle} from '../../../../_metronic/layout/core';
// import {TeachersOverview} from './components/TeachersOverview'
import {Settings} from './settings/Settings';
import {AccountHeader} from '../AccountHeader';
import StudentsTable from '../components/StudentsTable/StudentsTable'

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Teachers',
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

const StudentsAccountPage: React.FC = () => {
  return (
    <>
      <Switch>
        {/*<Route path='/crafted/account/teachers/overview'>*/}
        {/*  <PageTitle breadcrumbs={accountBreadCrumbs}>Teachers</PageTitle>*/}
        {/*  <TeachersOverview />*/}
        {/*</Route>*/}
        <Route path='/crafted/account/teachers/overview'>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Overview</PageTitle>

          {/*<StudentsOverview />*/}
        </Route>

        <Route path="/crafted/account/teachers/settings">
          <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle>
          <Settings />
        </Route>
        {/*<Redirect from='/crafted/account' exact={true} to='/crafted/account/overview' />*/}
        {/*<Redirect to='/crafted/account/students/overview' />*/}
      </Switch>
    </>
  )
}

export default StudentsAccountPage
