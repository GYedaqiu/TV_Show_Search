import React from 'react';
import { useEffect, useContext } from 'react';
import ShowsContext from '../context/shows/showsContext';
import Loader from '../components/Loader';

const Singlepage = ({ match }) => {
    const {
        singleShow,
        loading,
        getSingleShow} = useContext(ShowsContext);
    useEffect(() => {
        getSingleShow(match.params.id);
        //eslint-disable-next-line
    }, []);

    const removeTags = (text) => {
        if (text === null || text === "") {
            return false;
        } else {
            text = text.toString();
        }
        return text.replace(/(<([^>]+)>)/gi, "");
    }
    return (
        <>
            {loading ? <Loader /> : (
                <div className='singleshow'>
                    <img src={singleShow.image ? singleShow.image.medium : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} alt={singleShow.name} />
                    <div className='singleshow__info'>
                        <h1>{singleShow.name}</h1>
                        {singleShow.genres && singleShow.genres.map((genre) => {
                            return (<span className='singleshow__genre'>{genre}</span>)
                        })}
                        <p>
                            <strong>Status:</strong>{singleShow.status && singleShow.status}
                        </p>
                        <p>
                            <strong>Rating:</strong>{singleShow.rating ? singleShow.rating.average : "No rating"}
                        </p>
                        <p>
                            <strong>Offical Site:</strong>{singleShow.officalSite ? <a href={singleShow.officalSite} target="_blank" rel='noreferrer'>{singleShow.officalSite}</a> : "No Officail Site"}
                        </p>
                        <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
                    </div>

                </div>
            )}
        </>
    );
}

export default Singlepage;
