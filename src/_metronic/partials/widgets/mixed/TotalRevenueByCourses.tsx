import React, {useEffect, useRef, FC} from 'react';
import ApexCharts, {ApexOptions} from 'apexcharts'
import {KTSVG} from '../../../helpers'
import {getCSSVariableValue} from '../../../assets/ts/_utils'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
  chartColor: string
  chartHeight: string
}

const TotalRevenueByCourses: FC<Props> = ({className, chartColor, chartHeight}) => {
  const pieChartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!pieChartRef.current) {
      return;
    }

    const chart = new ApexCharts(pieChartRef.current, chartOptions(chartColor, chartHeight));
    if (chart) {
      chart.render()
    }
    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [pieChartRef])

  return (
    <div className={`card ${className}`}>
      {/* begin::Beader */}
      <div className='card-header border-0 py-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Revenue by category</span>
          <span className='text-muted fw-bold fs-7'>Total number of revenue by category in August</span>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG
              path='/media/icons/duotone/Layout/Layout-4-blocks-2.svg'
              className='svg-icon-2'
            />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body d-flex flex-column'>
        <div className='flex-grow-1'>
          <div ref={pieChartRef} className='mixed-widget-4-chart'/>
        </div>

        <div className='pt-5'>
          <p className='text-center fs-6 pb-5 '>
            <span className='badge badge-light-danger fs-8'>Notes:</span>&nbsp; Current sprint
            requires stakeholders
            <br />
            to approve newly amended policies
          </p>

          <a href='#' className={`btn btn-${chartColor} w-100 py-3`}>
            Take Action
          </a>
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

const chartOptions = (chartColor: string, chartHeight: string): ApexOptions => {
  return {
    series: [78, 45, 12, 15],
    labels: ['English', 'Frontend', 'IELTS', 'Design'],
    chart: {
      fontFamily: 'inherit',
      height: chartHeight,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      y: {
        formatter(val: number ): string {
          return `$${val} million sums`
        }
      }
    }
  }
}

export {TotalRevenueByCourses};