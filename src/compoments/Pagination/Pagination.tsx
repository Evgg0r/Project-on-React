import styles from "./Pagination.module.css"


export function Pagination() {

    return (
        <>
                <div className={styles.pagination}>
                    <button className={styles.paginationBack}><img src="/src/icons/back.svg" alt="back"/></button>
                    <button className={`${styles.paginationPage} ${styles.active}`}>1</button>
                    <button className={styles.paginationPage}>2</button>
                    <button className={styles.paginationPage}>3</button>
                    <button className={styles.paginationPage}>4</button>
                    <button className={styles.paginationPage}>5</button>
                    <button className={styles.paginationNext}><img src="/src/icons/next.svg" alt="next"/></button>
                </div>
        </>
    )
}


