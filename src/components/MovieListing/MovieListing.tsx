import { FC } from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import { settings } from '../../common/settings'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import { Movie, Show } from '../../types'
import { MovieCard } from '../MovieCard/MovieCard'
import styles from './MovieListing.module.scss'

interface IMovieListing {}

export const MovieListing: FC<IMovieListing> = () => {
	const movies = useSelector(getAllMovies)
	const shows = useSelector(getAllShows)
	let renderMovies,
		renderShows = ''
	renderMovies =
		movies.Response === 'True' ? (
			movies.Search.map((movie: Movie, index: number) => (
				<MovieCard key={index} data={movie} />
			))
		) : (
			<div className={styles.movies_error}>
				<h3>{movies.Error}</h3>
			</div>
		)
	renderShows =
		shows.Response === 'True' ? (
			shows.Search.map((show: Show, index: number) => (
				<MovieCard key={index} data={show} />
			))
		) : (
			<div className={styles.shows_error}>
				<h3>{shows.Error}</h3>
			</div>
		)
	return (
		<div className={styles.movie_wrapper}>
			<div className={styles.movie_list}>
				<h2>Movies</h2>
				<div className={styles.movie_container}>
					<Slider {...settings}>{renderMovies}</Slider>
				</div>
			</div>
			<div className={styles.show_list}>
				<h2>Shows</h2>
				<div className={styles.movie_container}>
					<Slider {...settings}>{renderShows}</Slider>
				</div>
			</div>
		</div>
	)
}
