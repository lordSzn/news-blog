import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './root-saga';
import { newsReducer } from './../../features';
import { categoryReducer } from './../../features';
import { languageReducer } from '../../features';


export const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    news: newsReducer,
    category: categoryReducer,
    lenguage: languageReducer
  },
  middleware:[...getDefaultMiddleware({thunk: false}),sagaMiddleware],
  devTools: process.env.NODE_ENV === 'development'
})
sagaMiddleware.run(rootSaga)
export type RootStateType = ReturnType<typeof store.getState>

