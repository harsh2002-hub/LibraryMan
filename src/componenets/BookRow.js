
import './bookrow.css'
export const BookRow = ({books,setBooks,setBookid,setName,setAuthor,setEdit,setActive}) => {   // note we can pass function also as prop

    const book_delete =(index) =>{   
    //    for(let i=0;i<books.length;i++){    props are immutable so we bring set function to update state of variable
    //      if(books[i].name === name){
    //         books.splice(i,1);
    //         return ;
    //      }
    //    }


    //    let copy=[];
    //    books.map(book =>{
    //     if(book.bookid!== bookid){
    //         copy.push(book);
    //     }
    //    })


    let copy=books;
    copy.splice(index,1);
       setBooks([...copy])

    }

    const book_edit = (index) =>{
        // alert("editing"+bookid);
        const book=books[index];
        setAuthor(book.author)
        setBookid(book.bookid);
        setName(book.name);
        setEdit(true);
        setActive(index);

    }
  return (
    <div>
        <table>
      { books.map((book,index) =>{   // map function in javascript
             return (
                <div>
                    <tbody className='bookContainer'>
                        <tr>
                    <th>{book.bookid}</th>
                    <th>{book.name}</th>
                    <th>{book.author}</th>
                    <button onClick={()=> book_delete(index)}>Delete</button>
                    <button onClick={()=> book_edit(index)}>Edit</button>
                    </tr>
                    </tbody>
                </div>
             )
        })
}
</table>
    </div>
  )
}

