import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'
import CreateDate from '../components/CreateDate'
import moment from 'moment'
function EditNote({ notes, setNotes }) {
    const { id } = useParams()
    const note = notes.find((item) => item.id === id)
    const [title, setTitle] = useState(note?.title)
    const [details, setDetails] = useState(note?.details)
    const date = CreateDate()

    const navigate=useNavigate()

    const handleForm = (e) => {
        e.preventDefault()

        if (title && details) {
            const newNotes = { ...note, title, details,date,modifiedDate: moment().format('MMMM Do YYYY, h:mm:ss a')}
            const newNote = notes.map(item => {
                if (item.id === id) {
                    item = newNotes
                }
                return item
            })
            setNotes(newNote)
        }
        navigate('/')
    }

    const handleDelete= () => {
            const newNotes = notes.filter(item=> item.id !==id)
            setNotes(newNotes)
            navigate('/')
    }

    return (
        <div>
            <section>
                <header className='create-note__header'>
                    <Link to='/' className='btn'><IoIosArrowBack /></Link>
                    <button className='effort' onClick={handleForm }> Save</button>
                    <button className='btn danger'  onClick={handleDelete }><RiDeleteBin6Line /></button>
                </header>


                <form className='create-note__form'>
                    <input type='text' placeholder='Tiltle' value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
                    <textarea rows='28' value={details} onChange={(e) => setDetails(e.target.value)} placeholder='Notes Details...'></textarea>
                </form>
            </section>



        </div>
    )
}

export default EditNote