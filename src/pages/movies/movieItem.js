const MovieItem = ({ movie }) => {
    const {title,release_date}=movie.attributes;
    return (
        <tr >
            <td style={{ border: '1px solid black', padding: '8px' }} >{title} </td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{release_date}</td>
        </tr>
    );

}

export default MovieItem;