import { FC } from 'react'
import styles from './Footer.module.scss'

interface IFooter {}

export const Footer: FC<IFooter> = () => {
	return (
		<footer className={styles.footer}>
			<div>Movie App</div>
			<div>@2024, Movie, Inc. or its affiliates.</div>
		</footer>
	)
}
