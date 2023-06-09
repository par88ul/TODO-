import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Notes from "./pages/Notes";
import CreateNotes from "./pages/CreateNotes";
import EditNote from "./pages/EditNote";
import { useEffect, useState } from "react";


function App() {
  const [notes, setNotes] = useState([])

  // useEffect(() => {
  //   localStorage.setItem('notes', JSON.stringify(notes))
  //   JSON.parse(localStorage.getItem('notes'))||
  // }, [notes])


  return (
        <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route path="/create-notes" element={<CreateNotes setNotes={setNotes} />} />
          <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes} />} />
        </Routes>
      </BrowserRouter>
    </main>
    
  );
}

export default App;
