import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { v4 as uuid } from 'uuid'
import CreateDate from '../components/CreateDate'
function CreateNotes({ setNotes }) {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const date = CreateDate()
    const navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        if (title && details) {
            const note = { id: uuid(), title, details, date }


            //add notes
            setNotes(prev => [note, ...prev])

            //Redirect to Home Page
             navigate('/')
        }

    }
    return (
        <div>
            <section>
                <header className='create-note__header'>
                    <Link to='/' className='button'><IoIosArrowBack /></Link>
                    <button className='button lg primary' onClick={handleSubmit}> Save</button>
                </header>


                <form className='create-note__form' onSubmit={handleSubmit}>
                    <input type='text' placeholder='Tiltle' autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea name='' id='' rows='28' placeholder='Notes Details...' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
                </form>
            </section>



        </div>
    )
}

export default CreateNotes