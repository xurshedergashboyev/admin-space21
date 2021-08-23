import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'

export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/StudentsAccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const CoursesPage = lazy(() => import('../modules/courses/CoursesPage'))
  const StudentOverviewPage = lazy(() => import('../modules/accounts/components/StudentOverview/StudentOverviewPage'))
  const CoursesInfoPage = lazy(() => import('../modules/courses/components/CoursesData'));
  const TeacherInfoPage = lazy(() => import('../modules/accounts/components/TeacherOverview/TeacherOverviewPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/builder' component={BuilderPageWrapper} />
        <Route path='/crafted/pages/profile' component={ProfilePage} />
        <Route path='/crafted/pages/wizards' component={WizardsPage} />
        <Route path='/crafted/widgets' component={WidgetsPage} />
        <Route path='/crafted/account/students' component={AccountPage} />
        <Route path='/crafted/account/teachers' component={AccountPage} />
        <Route path='/crafted/account/student/info' component={StudentOverviewPage} />
        <Route path='/crafted/account/teacher/info' component={TeacherInfoPage} />
        <Route path='/crafted/courses/info' component={CoursesInfoPage} />
        <Route path='/crafted/courses' component={CoursesPage} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
