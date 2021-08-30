import React, {useState} from 'react'
import './drag.css'

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
  const [currentBoard, setCurrentBoard] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)

  const dragOver = (e: any) => {
    e.preventDefault()
    if (e.target.className == 'item') {
      e.target.style.boxShadow = '0px 3px 3px gray '
    }
  }
  const dragLeave = (e: any) => {
    e.target.style.boxShadow = '0px 3px 3px gray '
  }
  const dragStart = (e: any, board: any, i: any) => {
    setCurrentBoard(board)
    setCurrentItem(i)
  }
  const dragEnd = (e: any) => {
    e.target.style.boxShadow = '0px 3px 3px gray'
  }
  const drop = (e: any, board: any, i: any) => {
    e.preventDefault()
    // @ts-ignore
    const currentIndex = currentBoard.items.indexOf(currentItem)
    // @ts-ignore
    currentBoard.items.splice(currentIndex, 1)
    const dropIndex = board.items.indexOf(i)
    board.items.splice(dropIndex + 1, 1, currentItem)
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board
        } else {
          // @ts-ignore
          if (b.id === currentBoard.id) {
            return currentBoard
          }
        }
        return b
      })
    )
  }

  const dropBoard = (e: any, board: any) => {
    board.items.push(currentItem)
    // @ts-ignore
    const currentIndex = currentBoard.items.indexOf(currentItem)
    // @ts-ignore
    currentBoard.items.splice(currentIndex, 1)
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board
        } else {
          // @ts-ignore
          if (b.id === currentBoard.id) {
            return currentBoard
          }
        }
        return b
      })
    )
  }

  // @ts-ignore
  return (
    <>
      <div>
        {boards.map((board) => (
          <div className={'flexbox'}>
            <div
              className={'board'}
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => dropBoard(e, board)}
            >
              {board.title}
            </div>
            {board.items.map((i) => (
              <div
                onDragOver={(e) => dragOver(e)}
                onDragLeave={(e) => dragLeave(e)}
                onDragStart={(e) => dragStart(e, board, i)}
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
