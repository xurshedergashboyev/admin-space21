import React, {FC} from 'react'
import {StatisticsWidget5, TablesWidget9} from '../../../../_metronic/partials/widgets'

const CoursesWrapper: FC = () => (
  <>
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
export {CoursesWrapper}
