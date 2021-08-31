import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {Settings} from './settings/Settings'
import {Connections} from '../../profile/components/Connections'

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Teachers',
    path: '/crafted/account/teachers/overview/',
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

const TeachersAccountPage: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/crafted/account/teachers/overview/'>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Overview</PageTitle>
          <Connections />
        </Route>

        <Route path='/crafted/account/teachers/settings/'>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle>
          <Settings />
        </Route>
        {/*<Redirect from='/crafted/account' exact={true} to='/crafted/account/overview' />*/}
        {/*<Redirect to='/crafted/account/students/overview' />*/}
      </Switch>
    </>
  )
}

export default TeachersAccountPage
