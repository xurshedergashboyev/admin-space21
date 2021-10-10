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
  const StudentOverviewPage = lazy(
    () => import('../modules/accounts/components/StudentOverview/StudentOverviewPage')
  )
  const CoursesInfoPage = lazy(() => import('../modules/courses/components/CoursesData'))
  const TeacherInfoPage = lazy(
    () => import('../modules/accounts/components/TeacherOverview/TeacherOverviewPage')
  )
  const TeachersPage = lazy(() => import('../modules/accounts/components/TeachersAccountPage'))
  const LeadsPage = lazy(() => import('../modules/leads/LeadsPage'))
  const FinancePage = lazy(() => import('../modules/finance/FinancePage'))
  const TaskManagementPage = lazy(() => import('../modules/taskManagement/TaskManagementPage'))
  const CreateSpacePage = lazy(() => import('../modules/taskManagement/CreateSpacePage'))
  const Pulse = lazy(() => import('../modules/pulse/Pulse'))
  const Docs = lazy(() => import('../modules/docs'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/builder' component={BuilderPageWrapper} />
        <Route path='/crafted/pages/profile' component={ProfilePage} />
        <Route path='/crafted/pages/wizards' component={WizardsPage} />
        <Route path='/crafted/widgets' component={WidgetsPage} />
        <Route path='/crafted/account/students' component={AccountPage} />
        <Route path='/crafted/account/student/info' component={StudentOverviewPage} />
        <Route path='/crafted/account/teacher/info' component={TeacherInfoPage} />
        <Route path='/crafted/account/teachers/overview' component={TeachersPage} />
        <Route path='/crafted/courses/info' component={CoursesInfoPage} />
        <Route path='/crafted/finance/overview' component={FinancePage} />
        <Route path='/crafted/leads/overview' component={LeadsPage} />
        <Route path='/crafted/courses' component={CoursesPage} />
        <Route path='/crafted/task-management/overview' component={TaskManagementPage} />
        <Route path='/crafted/task-management/create-space' component={CreateSpacePage} />
        <Route path={'/crafted/pulse'} component={Pulse} />
        <Route path={'/crafted/docs'} component={Docs} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
