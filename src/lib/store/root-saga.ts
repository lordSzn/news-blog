import {all} from 'redux-saga/effects'
import { newsWatcher } from '../../features/news/ducks/sagas'


export function* rootSaga(){
  yield all([newsWatcher()])
}