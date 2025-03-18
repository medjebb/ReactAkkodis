import { FaHeart } from 'react-icons/fa';


const MovieItem = ({ movie ,handleFavovirtesAdd}) => {
    const {title,release_date}=movie.attributes;
    return (
        <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>{title}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{release_date}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>
                <button onClick={() => handleFavovirtesAdd(movie)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <FaHeart color="red" />
                </button>
            </td>
        </tr>
    );

}

export default MovieItem;