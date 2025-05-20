import styles from "./FiltersFilm.module.css"
import {MovieSort} from "../MovieSort/MovieSort";
import {GenresFilm} from "../GenresFilm/GenresFilm";
import {Pagination} from "../Pagination/Pagination";
import {HeaderFilterFilms} from "../HeaderFilterFilms/HeaderFilterFilms";


export function FiltersFilm() {

    return (
        <>
            <div className={styles.filtersFilmWrapper}>
                <HeaderFilterFilms />
                <MovieSort />
                <GenresFilm />
                <Pagination />
            </div>
        </>
    )
}


