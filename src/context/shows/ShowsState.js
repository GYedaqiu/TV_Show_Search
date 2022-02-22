import axios from 'axios';
import { useReducer } from 'react';
import ShowsContext from './showsContext';
import ShowsReducer from './showsReducer';
import { SET_LOADING, SET_SINGLE_SHOW, SEARCH_SHOWS, CLEAR_SINGLE_SHOW } from '../types';

const ShowsState = (props) => {
    const initialState = {
        shows: [],
        singleShow: {},
        loading: false
    };
    const [state, dispatch] = useReducer(ShowsReducer, initialState);

    const searchShows = async (searchTerm) => {
        dispatch({ type: SET_LOADING });
        const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        dispatch({
            type: SEARCH_SHOWS,
            payload: data
        });
        console.log(data);
    }

    const getSingleShow = async (id) => {
        dispatch({
            type: SET_LOADING,
        });
        const {data} = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        console.log(data);
        dispatch({
            type: SET_SINGLE_SHOW,
            payload: data
        });
    }

    const clearSingleshow = () => {
        dispatch({
            type: CLEAR_SINGLE_SHOW
        })
    }
    return (
        <ShowsContext.Provider value={
            {
                shows: state.shows,
                singleShow: state.singleShow,
                loading: state.loading,
                searchShows,
                getSingleShow,
                clearSingleshow
            }
        }>
            {props.children}
        </ShowsContext.Provider>
    )
}

export default ShowsState;