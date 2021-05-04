import { createSlice } from "@reduxjs/toolkit";
import {NewsType} from './../../@types/entity'


interface InitialTypes{
  loading: 'idle' | 'pending'  | 'fail'
  news: NewsType[]
}

const initialNews:InitialTypes = {
  loading: 'idle',
  news: []
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
        state.loading = 'idle'
      }
    },
    newsFail(state){
      if (state.loading === 'pending'){
        state.loading = 'fail'
      }
    }
  }
})
export const newsReducer = newsSlice.reducer
export const {newsLoading, newsReceived,newsFail} = newsSlice.actions