import React, {FC} from 'react'
import {Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import PulseItems from './PulseItems'

const Pulse: FC = () => {
  const profileBreadCrumbs: Array<PageLink> = [
    {
      title: 'Pulse',
      path: '/crafted/pulse',
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
        <Route path='/crafted/pulse'>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Pulse</PageTitle>
          {/*<TaskItemsContainer />*/}
          <PulseItems />
        </Route>
      </Switch>
    </>
  )
}

export default Pulse
