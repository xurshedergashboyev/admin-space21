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
  {id: 3, title: 'Done', items: [{}]},
]
const SecondDrag = () => {
  const [boards, setBoards] = useState()
  return (
    <>
      <div></div>
    </>
  )
}
