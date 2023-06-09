import React from 'react'
import { Link } from 'react-router-dom'
function NoteItem({note}) {
  return (
    <Link to={`/edit-note/${note.id}`} className='note'>
    <h4>{note.title.length >50 ? (note.title.substr(0,50)) +'...':note.title}</h4>
    <h6>{note.details.length >80 ? (note.details.substr(0,80)) +'...':note.details}</h6>

    </Link>
  )
}

export default NoteItem