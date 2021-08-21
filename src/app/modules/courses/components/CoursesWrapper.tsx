import React, {FC} from 'react'
import {MixedWidget10, MixedWidget11, MixedWidget2, MixedWidget7} from '../../../../_metronic/partials/widgets'

const CoursesWrapper: FC = () => (
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
  </>
)
export {CoursesWrapper};