import styles from "./GenresFilm.module.css"
import {useState, useEffect, type ChangeEvent, useContext} from "react";
import {fetchData} from "../../api/fetch.tsx";
import {URL_MOVIE_LIST} from "../../constants/urls.ts";
import {Checkbox} from "../checkbox/Checkbox.tsx";
import type {Genre, GenresFilmProps} from "../../types/Types.tsx";
import {UserContext} from "../Context/Context.tsx";



export function GenresFilm({selectedGenres, onChange}: GenresFilmProps) {
    const [genres, setGenres] = useState([])
    const userToken = useContext(UserContext)

    useEffect(() => {
        fetchData(URL_MOVIE_LIST, userToken)
            .then(data => setGenres(data.genres))
            .catch(error => console.error(error));
    }, [])

    function handleSelectedGenre(e: ChangeEvent<HTMLInputElement>) {
        const {value, checked} = e.target;
        if (checked) {
            onChange([...selectedGenres, value])
        } else {
            onChange(selectedGenres.filter((el) => el !== value))
        }
    }

    return (
        <>
            <div className={styles.genresFilmsWrapper}>
                <span>Жанры</span>

                <div>
                    {genres.map((genre: Genre ) => (
                        <Checkbox
                        key={genre.id}
                        id={genre.id}
                        value={genre.name}
                        checked={selectedGenres.includes(genre.name)}
                        onChange={handleSelectedGenre}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}