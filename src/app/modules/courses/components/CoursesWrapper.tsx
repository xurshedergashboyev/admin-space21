import React, {FC} from 'react'
import {
  ListsWidget1,
  MixedWidget10,
  MixedWidget11,
  MixedWidget3,
  MixedWidget7, StatisticsWidget5, TablesWidget9,
} from '../../../../_metronic/partials/widgets'
import {Connections} from '../../profile/components/Connections'

const CoursesWrapper: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
        <MixedWidget3
          className='card-xl-stretch mb-xl-8'
          chartColor='danger'
          chartHeight='200px'
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
      {/*<Connections />*/}
    </div>
    {/* end::Row */}
    {/* begin::Row */}
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-xl-8'
          svgIcon='/media/icons/duotone/Shopping/Cart3.svg'
          color='danger'
          iconColor='white'
          title='Frontend'
          description='Lands, Houses, Ranchos, Farms'
        />
      </div>

      <div className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-xl-8'
          svgIcon='/media/icons/duotone/Home/Building.svg'
          color='primary'
          iconColor='white'
          title='English'
          description='Flats, Shared Rooms, Duplex'
        />
      </div>

      <div className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='/media/icons/duotone/Shopping/Chart-bar1.svg'
          color='success'
          iconColor='white'
          title='Business'
          description='50% Increased for FY20'
        />
      </div>
    </div>
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-xl-8'
          svgIcon='/media/icons/duotone/Shopping/Cart3.svg'
          color='dark'
          iconColor='white'
          title='Frontend'
          description='Lands, Houses, Ranchos, Farms'
        />
      </div>

      <div className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-xl-8'
          svgIcon='/media/icons/duotone/Home/Building.svg'
          color='secondary'
          iconColor='black'
          title='English'
          description='Flats, Shared Rooms, Duplex'
        />
      </div>

      <div className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='/media/icons/duotone/Shopping/Chart-bar1.svg'
          color='warning'
          iconColor='white'
          title='Business'
          description='50% Increased for FY20'
        />
      </div>
    </div>
    {/* end::Row */}
  </>
)
export {CoursesWrapper};