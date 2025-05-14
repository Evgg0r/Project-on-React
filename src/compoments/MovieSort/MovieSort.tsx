import styles from "./MovieSort.module.css"


export function MovieSort() {

    return (
        <>
            <div className={styles.selectWrapper}>
                <label htmlFor="select">Сортировать по:</label>
                <select name="select" id="select">
                    <option value="">Выбирите вариант</option>
                    <option value="1">Популярности</option>
                </select>
            </div>
        </>
    )
}


