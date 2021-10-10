import React, {FC} from 'react'
import {Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import IntegrationItem from './IntegrationItem'

const Pulse: FC = () => {
  const profileBreadCrumbs: Array<PageLink> = [
    {
      title: 'Integration',
      path: '/crafted/integration',
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
        <Route path='/crafted/integration'>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Integration</PageTitle>
          {/*<TaskItemsContainer />*/}
          <IntegrationItem />
        </Route>
      </Switch>
    </>
  )
}

export default Pulse
