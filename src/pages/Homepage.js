import React from 'react';
import { useContext } from 'react';
import ShowsContext from '../context/shows/showsContext';
import Searchbar from '../components/Searchbar';
import Listitem from '../components/ListItem';
import Loader from '../components/Loader';

export default function Homepage() {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  return (
    <div className='homepage'>
      <Searchbar />
      {loading ? (<Loader />) : (
        <div className='homepage__list'>
          {shows.map((item) => {
            return (
              <Listitem
                key={item.show.id}
                id={item.show.id}
                image={item.show.image ? item.show.image.medium : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
                name={item.show.name}
                rating={item.show.rating.average ? item.show.rating.average : "No Rating"} />
            )
          })}
        </div>
      )}
    </div>
  )
}
