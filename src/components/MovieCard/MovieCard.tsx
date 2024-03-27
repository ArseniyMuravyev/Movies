import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './MovieCard.module.scss'

interface IMovieCard {
	data: {
		Poster: string
		Title: string
		Type: string
		Year: string
		imdbID: string
	}
}

export const MovieCard: FC<IMovieCard> = ({ data }) => {
	return (
		<div className={styles.card_item}>
			<Link to={`/movie/${data.imdbID}`}>
				<div className={styles.card_inner}>
					<div className={styles.card_top}>
						<img src={data.Poster} alt={data.Title} />
					</div>
					<div className={styles.card_bottom}>
						<div className={styles.card_info}>
							<h4>{data.Title}</h4>
							<p>{data.Year}</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}
