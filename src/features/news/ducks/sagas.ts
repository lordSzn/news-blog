import { call, put, takeEvery } from "@redux-saga/core/effects"
import { newsActions } from ".."
import { REQUEST } from "../../../api"
import { ActionTypes } from "../types"


export function* fetchNews() {
  try {
    yield put(newsActions.newsLoading())
    const {data} = yield call(REQUEST.getNews)
    yield put(newsActions.newsReceived(data.news))
  } catch (e) {
    yield put(newsActions.newsFail())
  }
}
export function* newsWatcher() {
  yield takeEvery(ActionTypes.FETCHNEWS, fetchNews)
}
