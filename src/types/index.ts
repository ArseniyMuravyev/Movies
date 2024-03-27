export type MovieType = 'movie' | 'series'

export interface Movie {
	Title: string
	Year: string
	imdbID: string
	Type: MovieType
	Poster: string
}

export interface Show {
	Poster: string
	Title: string
	Type: MovieType
	Year: string
	imdbID: string
}

export interface InitialState {
	movies: { [key: string]: Movie[] }
	shows: { [key: string]: Show[] }
	selectMovieOrShow: IMovieDetail | {}
}

export interface IMovieDetail {
	Actors: string
	Awards: string
	BoxOffice: string
	Country: string
	DVD: string
	Director: string
	Genre: string
	Language: string
	Metascore: string
	Plot: string
	Poster: string
	Production: string
	Rated: string
	Ratings: { Source: string; Value: string }[]
	Released: string
	Response: string
	Runtime: string
	Title: string
	Type: string
	Website: string
	Writer: string
	Year: string
	imdbID: string
	imdbRating: string
	imdbVotes: string
}
