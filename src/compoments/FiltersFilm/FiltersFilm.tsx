import styles from "./FiltersFilm.module.css"
import {MovieSort} from "../MovieSort/MovieSort";
import {GenresFilm} from "../GenresFilm/GenresFilm";
import {Pagination} from "../Pagination/Pagination";
import {HeaderFilterFilms} from "../HeaderFilterFilms/HeaderFilterFilms";
import {useReducer} from "react";
import type {FilterAction, FilterState} from "../../types/Types.tsx";


export function FiltersFilm() {

    const initialState = {
        sortBy: '',
        releaseYear: '',
        selectedGenres: [],
    }

    function reducer(state: FilterState, action: FilterAction) {
        switch (action.type) {
            case 'setSortBy':
                return {...state, sortBy: action.value}
            case 'setReleaseYear':
                return {...state, releaseYear: action.value}
            case 'setSelectedGenres':
                return {...state, selectedGenres: action.value}
            case 'reset':
                return initialState

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)



    return (
        <>
            <div className={styles.filtersFilmWrapper}>
                <HeaderFilterFilms onReset={() => dispatch({type: 'reset'})}/>
                <MovieSort sortBy={state.sortBy} releaseYear={state.releaseYear} onChangeSortBy={(value) => dispatch({type: 'setSortBy', value})} onChangeReleaseYear={(value) => dispatch({type: 'setReleaseYear', value})}/>
                <GenresFilm selectedGenres={state.selectedGenres} onChange={(value) => dispatch({type: 'setSelectedGenres', value})}/>
                <Pagination />
            </div>
        </>
    )
}
