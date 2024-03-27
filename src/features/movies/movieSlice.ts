import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import movieApi from '../../common/apis/movieApi'
import { API_KEY } from '../../common/apis/movieApiKey'
import { IMovieDetail, InitialState, Movie, Show } from '../../types'

export const fetchAsyncMovies = createAsyncThunk<Movie[], void>(
	'movies/fetchAsyncMovies',
	async term => {
		console.log(movieSlice)
		const response = await movieApi.get<Movie[]>(
			`?apiKey=${API_KEY}&s=${term}&type=movie`
		)
		return response.data
	}
)

export const fetchAsyncShows = createAsyncThunk<Show[], void>(
	'movies/fetchAsyncShows',
	async term => {
		const response = await movieApi.get<Show[]>(
			`?apiKey=${API_KEY}&s=${term}&type=series`
		)
		return response.data
	}
)

export const fetchMovieOrShowDetail = createAsyncThunk<IMovieDetail, string>(
	'movies/fetchMovieOrShowDetail',
	async (id: string) => {
		const response = await movieApi.get<IMovieDetail>(
			`?apiKey=${API_KEY}&i=${id}&Plot=full`
		)
		console.log(response.data)
		return response.data
	}
)

const initialState: InitialState = {
	movies: {},
	shows: {},
	selectMovieOrShow: {},
}

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		removeSelectedMovieOrShow: state => {
			state.selectMovieOrShow = {}
		},
	},
	extraReducers: builder => {
		builder
			.addCase(
				fetchAsyncMovies.fulfilled,
				(state, action: PayloadAction<Movie[]>) => {
					state.movies = action.payload
				}
			)
			.addCase(
				fetchAsyncShows.fulfilled,
				(state, action: PayloadAction<Show[]>) => {
					state.shows = action.payload
				}
			)
			.addCase(
				fetchMovieOrShowDetail.fulfilled,
				(state, action: PayloadAction<IMovieDetail>) => {
					state.selectMovieOrShow = action.payload
				}
			)
	},
})

export const { removeSelectedMovieOrShow } = movieSlice.actions
export const getAllMovies = (state: InitialState) => state.movies.movies
export const getAllShows = (state: InitialState) => state.movies.shows
export const getSelectedMovieOrShow = (state: InitialState): IMovieDetail =>
	state.movies.selectMovieOrShow
export default movieSlice.reducer
