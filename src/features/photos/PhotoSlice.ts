import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { AppThunk, AppDispatch } from '../../redux/store'
import { PhotoState } from '../../types'

const initialState: PhotoState = {
  photos: [],
  loading: false,
  errors: '',
}

// AppThunk sets the type definitions for the dispatch method
export const getPhotos = (): AppThunk => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      const baseURL: string = 'https://api.nasa.gov/planetary/apod'
      // your apiKey should ideally be in a .env file
      const apiKey = 'AIzaSyBDipCJKnoTuhByJP2pB4A7Fx4SAOXoy-k'

      const res = await axios.get<object[]>(`${baseURL}?api_key=${apiKey}&start_date=2020-05-07&end_date=2020-05-09`)

      dispatch(setLoading(false))
      dispatch(setPhotos(res.data))
    } catch (error: string | any) {
      dispatch(setErrors(error))
      dispatch(setLoading(false))
    }
  }
}

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload
    },

    setPhotos: (state, { payload }: PayloadAction<object[]>) => {
      state.photos = payload
    },
  },
})

export const { setLoading, setErrors, setPhotos } = photoSlice.actions

export default photoSlice.reducer

export const photosSelector = (state: { photos: PhotoState }) => state.photos
