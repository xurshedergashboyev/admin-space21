/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, {FC} from 'react'
import {KTSVG} from '../../../helpers'
import {useLayout} from '../../core'
import {DefaultTitle} from '../header/page-title/DefaultTitle'

const Toolbar1: FC = () => {
  const {classes} = useLayout()

  return (
    <div className='toolbar' id='kt_toolbar'>
      {/* begin::Container */}
      <div
        id='kt_toolbar_container'
        className={clsx(classes.toolbarContainer.join(' '), 'd-flex flex-stack')}
      >
        <DefaultTitle />

        {/* begin::Actions */}
        <div className='d-flex align-items-center py-1'>
          {/* begin::Wrapper */}
          <div className='me-4'>
            {/* begin::Menu */}
            {/*<a*/}
            {/*  href='#'*/}
            {/*  className='btn btn-sm btn-flex btn-light btn-active-primary fw-bolder'*/}
            {/*  data-kt-menu-trigger='click'*/}
            {/*  data-kt-menu-placement='bottom-end'*/}
            {/*  data-kt-menu-flip='top-end'*/}
            {/*>*/}
              {/*<KTSVG*/}
              {/*  path='/media/icons/duotone/Text/Filter.svg'*/}
              {/*  className='svg-icon-5 svg-icon-gray-500 me-1'*/}
              {/*/>*/}
              <select className="form-select" name='types'>
                <option value='English'>English</option>
                <option value='Frontend'>Frontend</option>
                <option value='Design'>Design</option>
              </select>
            {/*</a>*/}

            {/* end::Menu */}
          </div>
          {/* end::Wrapper */}

          {/* begin::Button */}

          <a
            href='#'
            className='btn btn-sm btn-primary'
            data-bs-toggle='modal'
            // data-bs-target='#kt_modal_create_app'
            data-bs-target='#kt_modal_invite_friends'
            id='kt_toolbar_primary_button'
          >
            Create
          </a>
          {/* end::Button */}
        </div>
        {/* end::Actions */}
      </div>
      {/* end::Container */}
    </div>
  )
}

export {Toolbar1}
