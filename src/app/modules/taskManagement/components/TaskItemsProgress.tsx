import React, {FC} from 'react';

type Props = {
  name: string
  progress: string
  borderColor: string
}

const TaskItemsProgress: FC<Props> = ({name, progress, borderColor}) => {
  return (
    <>
      <div className={`w-300 d-flex align-items-center justify-content-between card-header border-3 border-top-solid border-${borderColor} mb-5`}>
        <div className='card-title m-0'>
          <div className='p-2'>
            {name}
          </div>
        </div>
        <div className='card-toolbar cursor-pointer'>
          <span className={`badge badge-light-${borderColor} fw-bolder mx-2`}>
              +
            </span>
        </div>
      </div>
    </>
  )
}

export {TaskItemsProgress}