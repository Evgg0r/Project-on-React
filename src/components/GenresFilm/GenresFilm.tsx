import styles from "./GenresFilm.module.css"
import {useState, useEffect, type ChangeEvent, useContext} from "react";
import {fetchData} from "../../api/fetch.tsx";
import {URL_MOVIE_LIST} from "../../constants/urls.ts";
import {Checkbox} from "../checkbox/Checkbox.tsx";
import type {Genre} from "../../types/Types.tsx";
import {useFilter, useFilterDispatch, UserContext} from "../Context/Context.tsx";



export function GenresFilm() {
    const [genres, setGenres] = useState([])
    const userToken = useContext(UserContext)

    const state = useFilter()
    const dispatch = useFilterDispatch()

    useEffect(() => {
        fetchData(URL_MOVIE_LIST, userToken)
            .then(data => setGenres(data.genres))
            .catch(error => console.error(error));
    }, [])

    function handleSelectedGenre(e: ChangeEvent<HTMLInputElement>) {
        const {value, checked} = e.target;
        if (!state || !dispatch) return null;
        if (checked) {
            dispatch({
                type: 'setSelectedGenres',
                value: [...state.selectedGenres, value],
            });
        } else {
            dispatch({
                type: 'setSelectedGenres',
                value: state.selectedGenres.filter(el => el !== value),
            });
        }
    }

    return (
        <>
            <div className={styles.genresFilmsWrapper}>
                <span>Жанры</span>

                <div>
                    {state && genres.map((genre: Genre ) => (
                        <Checkbox
                        key={genre.id}
                        id={genre.id}
                        value={genre.name}
                        checked={state.selectedGenres.includes(genre.name)}
                        onChange={handleSelectedGenre}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}