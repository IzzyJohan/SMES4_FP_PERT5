import styles from "./Movies.module.css";

function Movies() {
    return(
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movies__container}>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/360" alt="" />
                        <h3 className={styles.movie__title}>Movie</h3>
                        <p className={styles.movie__date}>Year</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/360" alt="" />
                        <h3 className={styles.movie__title}>Movie</h3>
                        <p className={styles.movie__date}>Year</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/360" alt="" />
                        <h3 className={styles.movie__title}>Movie</h3>
                        <p className={styles.movie__date}>Year</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/360" alt="" />
                        <h3 className={styles.movie__title}>Movie</h3>
                        <p className={styles.movie__date}>Year</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/360" alt="" />
                        <h3 className={styles.movie__title}>Movie</h3>
                        <p className={styles.movie__date}>Year</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/360" alt="" />
                        <h3 className={styles.movie__title}>Movie</h3>
                        <p className={styles.movie__date}>Year</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/360" alt="" />
                        <h3 className={styles.movie__title}>Movie</h3>
                        <p className={styles.movie__date}>Year</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/360" alt="" />
                        <h3 className={styles.movie__title}>Movie</h3>
                        <p className={styles.movie__date}>Year</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/360" alt="" />
                        <h3 className={styles.movie__title}>Movie</h3>
                        <p className={styles.movie__date}>Year</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/360" alt="" />
                        <h3 className={styles.movie__title}>Movie</h3>
                        <p className={styles.movie__date}>Year</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image} src="https://picsum.photos/300/360" alt="" />
                        <h3 className={styles.movie__title}>Movie</h3>
                        <p className={styles.movie__date}>Year</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Movies;