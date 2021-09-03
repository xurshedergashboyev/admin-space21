import React, {FC} from 'react'
import {TaskUserIcon} from './TaskUserIcon'
import {OverlayTrigger, Tooltip} from 'react-bootstrap-v5'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'

type Props = {
  users?: Array<TaskUserIcon>
}

const TaskUsers: FC<Props> = ({users = undefined}) => {
  return (
    <>
      {users &&
        users.map((user, index) => {
          return (
            <OverlayTrigger
              key={`${index}-${user.name}`}
              overlay={<Tooltip id={'tooltip-user-name'}>{user.name}</Tooltip>}
              placement={'bottom'}
            >
              <div className='symbol symbol-35px symbol-circle'>
                {user.avatar && <img src={toAbsoluteUrl(user.avatar)} alt='Pic' />}
                {user.initials && (
                  <span className='symbol-label bg-primary text-inverse-primary fw-bolder'>
                    {user.initials}
                  </span>
                )}
              </div>
            </OverlayTrigger>
          )
        })}
    </>
  )
}

export {TaskUsers}
