
import './App.css';
import { useState } from 'react';
import { BookRow } from './componenets/BookRow';

function App() {
  const [bookid,setBookid]=useState(''); // to set book id
  const [name,setName]=useState('');   // to set name of book
  const [author,setAuthor]=useState('');   // to set author
  const [edit,setEdit]=useState(false);   // to check if edit is on
  const [active,setActive]=useState(null);   // to know which index in array being edited
  const [books,setBooks]=useState([]);     // array of books

  function add_user(e){
    e.preventDefault();
    const book ={
      bookid,
      name,
      author,
    };
   if(edit){
    let copy=books;
    Object.assign(copy[active], book);  // to update the value at index
    setBooks([...copy]);
    setEdit(false);
    setActive(null);
    setBookid('');
    setAuthor('');
    setName('');
   }
   else{
    setBooks([...books,book]);
    setBookid('');
    setAuthor('');
    setName('');
   }
  }
  return (
    <div className="App">
      <h1>Welcome to Bookeeper App</h1>
      <form onSubmit={add_user}> 
         <label>Book Id</label>
         <input type="text" value={bookid} onChange={(e) => setBookid(e.target.value) }></input>
         <tr></tr>
         <label>Name</label>
         <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
         <tr></tr>
         <label>Author</label>
         <input type="text" value={author} onChange={(e)=> setAuthor(e.target.value)}></input>
       <button > {edit ? "update" :"add"} Book</button>
      </form>
<br></br>
<br></br>

  <BookRow books={books} setBooks={setBooks} setBookid={setBookid} setName={setName} setAuthor={setAuthor} setEdit={setEdit} setActive={setActive}></BookRow>

    </div>
  );
}

export default App;
