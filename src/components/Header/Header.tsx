import { Search } from 'lucide-react'
import { FC, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	fetchAsyncMovies,
	fetchAsyncShows,
} from '../../features/movies/movieSlice'
import user from '../../images/user.png'
import styles from './Header.module.scss'

interface IHeader {}

export const Header: FC<IHeader> = () => {
	const dispatch = useDispatch()
	const [term, setTerm] = useState<string>('')
	const submitHandler = (e: FormEvent) => {
		e.preventDefault()
		if (term.trim() === '') return
		dispatch(fetchAsyncMovies(term))
		dispatch(fetchAsyncShows(term))
		setTerm('')
	}

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link to='/'>Movie App</Link>
			</div>
			<div className={styles.search_bar}>
				<form onSubmit={submitHandler}>
					<input
						type='text'
						value={term}
						placeholder='Search movies or shows'
						onChange={e => {
							setTerm(e.target.value)
						}}
					/>
					<button>
						<Search>Search</Search>
					</button>
				</form>
			</div>
			<div className={styles.search}></div>
			<div className={styles.user_image}>
				<img src={user} alt='user image' />
			</div>
		</header>
	)
}
