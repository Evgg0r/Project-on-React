import styles from "./Header.module.css"


export function Header() {

    return (
        <>
            <header className={styles.header}>
                <button>Фильмы</button>
                <button>Войти</button>
            </header>
        </>
    )
}
