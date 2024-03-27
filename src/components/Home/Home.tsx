import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
	fetchAsyncMovies,
	fetchAsyncShows,
} from '../../features/movies/movieSlice'
import { MovieListing } from '../MovieListing/MovieListing'

interface IHome {}

export const Home: FC<IHome> = () => {
	const movieText = 'Harry'
	const showText = 'Friends'
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchAsyncMovies(movieText))
		dispatch(fetchAsyncShows(showText))
	}, [dispatch])
	return (
		<div>
			<MovieListing />
		</div>
	)
}
