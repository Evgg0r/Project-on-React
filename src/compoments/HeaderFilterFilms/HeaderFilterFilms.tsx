import styles from "./HeaderFilterFilms.module.css"


export function HeaderFilterFilms() {

    return (
        <>
            <div className={styles.filtersFilmHeader}>
                <span>Фильтры</span>
                <span>x</span>
            </div>
        </>
    )
}
