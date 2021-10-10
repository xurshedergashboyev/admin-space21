import React, {FC} from 'react'
import {Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import DocsItem from './DocsItem'

const Pulse: FC = () => {
  const profileBreadCrumbs: Array<PageLink> = [
    {
      title: 'Docs',
      path: '/crafted/docs',
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
        <Route path='/crafted/docs'>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Docs</PageTitle>
          {/*<TaskItemsContainer />*/}
          <DocsItem />
        </Route>
      </Switch>
    </>
  )
}

export default Pulse
