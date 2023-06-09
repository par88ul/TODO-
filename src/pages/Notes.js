
import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import NoteItem from '../components/NoteItem';
import moment from 'moment'

function Notes({ notes }) {
  const [showSearch, setShowsearch] = useState(false);
  const [text, setText] = useState('');
  const [sort, setSort] = useState('');
  const [filterNotes, setFilterNotes] = useState(notes);

  const handleSearch = () => {
    setFilterNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLowerCase())) {
          return note;
        }
      })
    );
  };
  console.log(notes, 'notes');

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const sortedNotes = [...filterNotes].sort((a, b) => {
    if (sort === 'title') {
      return a.title.localeCompare(b.title);
    }
    else if (sort === 'date') {
      return a.date - b.date;
    }
    else if (sort === 'modifiedDate') {
      return (moment(a.date).diff(moment(b.modifiedDate)))
    }
    else {
      return 0;
    }
  });

  useEffect(() => {
    handleSearch();
  }, [text]);

  console.log(sortedNotes)
  return (
    <section>
      <header className='notes__header '>


        {!showSearch &&
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKsxL8JkyPWq0HgdDcxsOJ2FsvJI7jl3AdI6CJM-tVheCi9Dp-X_uFGGM51wFM9Vxkav1qDXVTJk&usqp=CAU&ec=48665701" height={50} width={50} />
        }

        {!showSearch &&
          <h2>Notes </h2>}
        {showSearch && (
          <input
            type='text'
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
            autoFocus
            placeholder='Search...'
          />
        )}

        <button className='btn' onClick={() => setShowsearch((prev) => !prev)}>
          {showSearch ? <MdClose /> : <BsSearch />}
        </button>
        </header>
      
        <form>
          <select className='sort-select' value={sort} onChange={handleSort}>
            <option defaultValue>Sort</option>
            <option value='title'>Title</option>
            <option value='date'>Date Created</option>
            <option value='modifiedDate'>Date Modified</option>
          </select>
        </form>





      <div className='notes__container'>
        {sortedNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
        <Link to='/create-notes' className='btn add__btn'>
          <BsPlusLg />
        </Link>
      </div>
    </section>
  );
}

export default Notes;

