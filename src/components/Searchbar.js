import React from 'react';
import { useState, useContext } from 'react';
import Alert from '../components/Alert';
//context
import ShowsContext from '../context/shows/showsContext';
import AlertsContext from '../context/alerts/alertsContext';


const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { searchShows } = useContext(ShowsContext);

    const { alert, setAlert } = useContext(AlertsContext);
    const onSearchHandler = async (e) => {
        e.preventDefault();
        if (searchTerm === "") {
            setAlert("Please enter a valid search", "danger");
        } else {
            searchShows(searchTerm);
        }
    }


    return (
        <div className='searchbar'>
            {alert ? <Alert type={alert.type} message={alert.message} /> : null}

            <form className='searchbar__form'>
                <input type="text" placeholder='Search for TV Show' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                <button className='btn btn-block' onClick={onSearchHandler}>SEARCH</button>
            </form>
        </div>
    );
}

export default Searchbar;
