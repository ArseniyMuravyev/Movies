import { Calendar, Film, Star, ThumbsUp } from 'lucide-react'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
	fetchMovieOrShowDetail,
	getSelectedMovieOrShow,
	removeSelectedMovieOrShow,
} from '../../features/movies/movieSlice'
import { IMovieDetail } from '../../types'
import styles from './MovieDetail.module.scss'

export const MovieDetail: FC = () => {
	const { imdbID } = useParams()
	const dispatch = useDispatch()
	const data = useSelector(getSelectedMovieOrShow) as IMovieDetail
	useEffect(() => {
		dispatch(fetchMovieOrShowDetail(imdbID))
		return () => {
			dispatch(removeSelectedMovieOrShow())
		}
	}, [dispatch, imdbID])
	return (
		<div className={styles.movie_section}>
			{Object.keys(data).length === 0 ? (
				<div>...Loading</div>
			) : (
				<>
					<div className={styles.section_left}>
						<div className={styles.movie_title}>{data.Title}</div>
						<div className={styles.movie_rating}>
							<span>
								IMDB Rating <Star color='#ff9e00' size={20} /> :{' '}
								{data.imdbRating}
							</span>
							<span>
								IMDB Votes <ThumbsUp color='#fafafa' size={20} /> :{' '}
								{data.imdbVotes}
							</span>
							<span>
								Runtime <Film color='#bfd5d6' size={20} /> : {data.Runtime}
							</span>
							<span>
								Year <Calendar color='peachpuff' size={20} /> : {data.Year}
							</span>
						</div>
						<div className={styles.movie_plot}>{data.Plot}</div>
						<div className={styles.movie_info}>
							<div>
								<span>Director</span>
								<span>{data.Director}</span>
							</div>
							<div>
								<span>Stars</span>
								<span>{data.Actors}</span>
							</div>
							<div>
								<span>Generes</span>
								<span>{data.Genre}</span>
							</div>
							<div>
								<span>Languages</span>
								<span>{data.Language}</span>
							</div>
							<div>
								<span>Awards</span>
								<span>{data.Awards}</span>
							</div>
						</div>
					</div>
					<div className={styles.section_right}>
						<img src={data.Poster} alt={data.Title} />
					</div>
				</>
			)}
		</div>
	)
}
