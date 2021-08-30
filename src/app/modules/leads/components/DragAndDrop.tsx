import React from 'react'
import {useState} from 'react'
import {put} from 'redux-saga/effects'

const DragAndDrop = (props: any) => {
  const drop = (e: any) => {
    e.preventDefault()
    const card_id = e.dataTransfer.getData('card_id')

    const card = document.getElementById(card_id)
    // @ts-ignore
    card.style.display = 'block'

    e.target.appendChild(card)
  }

  const dragOver = (e: any) => {
    e.preventDefault()
  }
  return (
    <>
      <div id={props.id} onDrop={drop} className={props.className} onDragOver={dragOver}>
        {props.children}
      </div>
    </>
  )
}

export default DragAndDrop
