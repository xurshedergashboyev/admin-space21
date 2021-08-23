import React, {FC} from 'react'
import {StatisticsCourse} from './StatisticsCourse'
import {MixedPieCourse} from './MixedPieCourse'
import {MixedWidget10, MixedWidget11} from '../../../../_metronic/partials/widgets'

const CoursesItem: FC = () => {
  return (
    <>
      {/* begin::Row */}
      <div className='row gy-5 g-xl-8'>
        <div className='col-xxl-4'>
          <StatisticsCourse
            className='card-xl-stretch mb-xl-8'
            chartColor='danger'
            chartHeight='200px'
          />
        </div>
        <div className='col-xxl-4'>
          {/*<ListsWidget5 className='card-xxl-stretch' />*/}
          <MixedPieCourse className={'card-xl-stretch'} chartColor={'primary'} chartHeight={'200px'} />
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
    </>
  )
}

export {CoursesItem}