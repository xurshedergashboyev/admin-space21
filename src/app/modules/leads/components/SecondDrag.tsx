import React, {useState} from 'react'

const data = [
  {
    id: 1,
    title: 'To Do',
    items: [
      {id: 1, title: 'Hello'},
      {id: 2, title: 'Xurshed'},
      {id: 3, title: 'Maraim'},
    ],
  },
  {
    id: 2,
    title: 'In process',
    items: [
      {id: 4, title: 'Abdurshid'},
      {id: 5, title: 'Bye Bye'},
    ],
  },
  {id: 3, title: 'Done', items: [{id: 6, title: 'Drag'}]},
]
const SecondDrag = () => {
  const [boards, setBoards] = useState(data)

  const dragOver = (e: any, board: any, i: any) => {
    e.preventDefault()
    if (e.target.className == 'item') {
      e.target.style.boxShadow = '0px 3px 3px gray '
    }
  }
  const dragLeave = (e: any) => {
    e.target.style.boxShadow = '0px 3px 3px gray '
  }
  const dragStart = (e: any) => {}
  const dragEnd = (e: any) => {
    e.target.style.boxShadow = '0px 3px 3px gray'
  }
  const drop = (e: any, board: any, i: any) => {}

  return (
    <>
      <div>
        {boards.map((board) => (
          <div className={'board'}>
            <div className={'board_title'}>{board.title}</div>
            {board.items.map((i) => (
              <div
                onDragOver={(e) => dragOver(e, board, i)}
                onDragLeave={(e) => dragLeave(e)}
                onDragStart={(e) => dragStart(e)}
                onDragEnd={(e) => dragEnd(e)}
                onDrop={(e) => drop(e, board, i)}
                draggable={'true'}
                className={'item'}
              >
                {i.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default SecondDrag
