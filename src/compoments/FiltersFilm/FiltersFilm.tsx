import styles from "./FiltersFilm.module.css"
import {MovieSort} from "../MovieSort/MovieSort";
import {GenresFilm} from "../GenresFilm/GenresFilm";
import {Pagination} from "../Pagination/Pagination";
import {HeaderFilterFilms} from "../HeaderFilterFilms/HeaderFilterFilms";
import {useState} from "react";


export function FiltersFilm() {
    const [sortBy, setSortBy] = useState<string>("")
    const [releaseYear, setReleaseYear] = useState<string>("")
    const [selectedGenres, setSelectedGenres] = useState<string[]>([])

    function resetFilters() {
        setSortBy("")
        setReleaseYear("")
        setSelectedGenres([])
    }

    return (
        <>
            <div className={styles.filtersFilmWrapper}>
                <HeaderFilterFilms onReset={resetFilters}/>
                <MovieSort sortBy={sortBy} releaseYear={releaseYear} onChangeSortBy={setSortBy} onChangeReleaseYear={setReleaseYear}/>
                <GenresFilm selectedGenres={selectedGenres} onChange={setSelectedGenres}/>
                <Pagination />
            </div>
        </>
    )
}


