import styles from "./HeaderFilterFilms.module.css"
import {useFilterDispatch} from "../Context/Context.tsx";


export function HeaderFilterFilms() {
    const dispatch = useFilterDispatch()
    if (!dispatch) return null;

    return (
        <>
            <div className={styles.filtersFilmHeader}>
                <span>Фильтры</span>
                <button onClick={() => dispatch({type: 'reset'})}>x</button>
            </div>
        </>
    )
}
