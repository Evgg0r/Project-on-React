import styles from "./GenresFilm.module.css"


export function GenresFilm() {

    return (
        <>
            <div className={styles.genresFilmsWrapper}>
                <span>Жанры</span>

                <div>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" name="option1" className="checkbox-input"/>
                        <span className="checkbox-text">Комедия</span>
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" name="option2" className="checkbox-input"/>
                        <span className="checkbox-text">Боевик</span>
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" name="option3" className="checkbox-input"/>
                        <span className="checkbox-text">Драма</span>
                    </label>
                </div>
            </div>
        </>
    )
}


