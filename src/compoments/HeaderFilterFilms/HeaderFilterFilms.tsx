import styles from "./HeaderFilterFilms.module.css"
import type {HeaderFilterFilmsPors} from "../../types/Types.tsx";


export function HeaderFilterFilms({onReset}:HeaderFilterFilmsPors) {

    return (
        <>
            <div className={styles.filtersFilmHeader}>
                <span>Фильтры</span>
                <button onClick={onReset}>x</button>
            </div>
        </>
    )
}
