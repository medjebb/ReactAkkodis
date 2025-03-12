const BooksItem = ({ book }) => {
    const {attributes: {title, author, pages}} = book;
    return (
        <tr onClick={()=>console.log('clicked')}>
            <td style={{ border: '1px solid black', padding: '8px' }} >{title} </td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{author}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{pages}</td>
        </tr>
    );

}

export default BooksItem;