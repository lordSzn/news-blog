import { newsReducer } from './../../features/index';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga';


export const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    news: newsReducer
  },
  middleware:[...getDefaultMiddleware({thunk: false}),sagaMiddleware],
  devTools: true
})
sagaMiddleware.run(rootSaga)
export type RootStateType = ReturnType<typeof store.getState>

