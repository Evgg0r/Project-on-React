import styles from "./FiltersFilm.module.css"
import {MovieSort} from "../MovieSort/MovieSort";
import {GenresFilm} from "../GenresFilm/GenresFilm";
import {Pagination} from "../Pagination/Pagination";
import {HeaderFilterFilms} from "../HeaderFilterFilms/HeaderFilterFilms";

import {FilterProvider} from "../Context/Context.tsx";


export function FiltersFilm() {


    return (
        <>
            <FilterProvider>
                    <div className={styles.filtersFilmWrapper}>
                        <HeaderFilterFilms />
                        <MovieSort />
                        <GenresFilm />
                        <Pagination />
                    </div>
            </FilterProvider>
        </>
    )
}
