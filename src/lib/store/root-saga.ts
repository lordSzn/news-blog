import {all} from 'redux-saga/effects'

import { categoryWather } from '../../features/category/ducks/sagas'
import { languageWatcher } from '../../features/language/ducks/sagas'
import { newsWatcher } from '../../features/news/ducks/sagas'


export function* rootSaga(){
  yield all([newsWatcher(), categoryWather(),languageWatcher()])
}