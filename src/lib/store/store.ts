import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './root-saga';
import { newsReducer } from './../../features/index';
import { categoryReducer } from './../../features/index';


export const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    news: newsReducer,
    category: categoryReducer
  },
  middleware:[...getDefaultMiddleware({thunk: false}),sagaMiddleware],
  devTools: true
})
sagaMiddleware.run(rootSaga)
export type RootStateType = ReturnType<typeof store.getState>

