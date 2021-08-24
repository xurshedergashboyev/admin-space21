/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  MixedWidget2,
  MixedWidget10,
  MixedWidget11,
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget6,
  TablesWidget5,
  MixedWidget8,
  MixedWidget7,
} from '../../../_metronic/partials/widgets'
import {TotalRevenueByCourses} from '../../../_metronic/partials/widgets/mixed/TotalRevenueByCourses'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
        <MixedWidget2
          className='card-xl-stretch mb-xl-8'
          chartColor='danger'
          chartHeight='200px'
          strokeColor='#cb1e46'
        />
      </div>
      <div className='col-xxl-4'>
        {/*<ListsWidget5 className='card-xxl-stretch' />*/}
        <MixedWidget7 className={"card-xl-stretch"} chartColor={"primary"} chartHeight={"200px"} />
      </div>
      <div className='col-xxl-4'>
        <MixedWidget10
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='success'
          chartHeight='150px'
        />
        <MixedWidget11
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='success'
          chartHeight='175px'
          secondChartColor='danger'
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-8'>
        <TotalRevenueByCourses chartColor={"primary"} chartHeight={"200px"} className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
        <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xxl-8'>
        <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
      </div>
      {/*<div className='col-xl-4'>*/}
      {/*  <ListsWidget6 className='card-xl-stretch mb-xl-8' />*/}
      {/*</div>*/}
      {/*<div className='col-xl-4'>*/}
      {/*  <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />*/}
      {/*  /!* partials/widgets/lists/_widget-4', 'class' => 'card-xl-stretch mb-5 mb-xl-8', 'items' => '5' *!/*/}
      {/*</div>*/}
    </div>
    {/* end::Row */}

    {/*<div className='row g-5 gx-xxl-8'>*/}
    {/*  <div className='col-xxl-4'>*/}
    {/*    <MixedWidget8*/}
    {/*      className='card-xxl-stretch mb-xl-3'*/}
    {/*      chartColor='success'*/}
    {/*      chartHeight='150px'*/}
    {/*    />*/}
    {/*  </div>*/}
    {/*  <div className='col-xxl-8'>*/}
    {/*    <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />*/}
    {/*  </div>*/}
    {/*</div>*/}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
