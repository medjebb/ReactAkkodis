import Books from "./Books";
import useBooks from "../../hooks/useBooks";

const BooksContainer=()=>{

    const { booksData } = useBooks();     
    return <Books booksData={booksData} />; 
}

export default BooksContainer;