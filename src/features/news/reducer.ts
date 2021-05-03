import { createSlice } from "@reduxjs/toolkit";
import {NewsType} from './../../@types/entity'


interface InitialTypes{
  loading: 'idle' | 'pending' | 'success' | 'fail'
  news: NewsType[]
  error: string | null
}

const initialNews:InitialTypes = {
  loading: 'idle',
  news: [],
  error: null
}

export const newsSlice = createSlice({
  name: 'newsReducer',
  initialState:initialNews,
  reducers:{
    newsLoading(state){
      if (state.loading === 'idle'){
        state.loading = 'pending'
      }
    },
    newsReceived(state,action){
      if (state.loading === 'pending'){
        state.news = action.payload
        state.loading = 'success'
      }
    },
    newsFail(state){
      if (state.loading === 'pending'){
        state.error = 'error'
        state.loading = 'fail'
      }
    }
  }
})
export const newsReducer = newsSlice.reducer
export const {newsLoading, newsReceived,newsFail} = newsSlice.actions