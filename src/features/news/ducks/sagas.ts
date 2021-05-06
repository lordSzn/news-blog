import { fetchNewsType, FetchSearchNews } from "./../types"
import { call, put, takeEvery } from "@redux-saga/core/effects"
import { newsActions } from ".."
import { requests } from "../../../api/index"
import { ActionTypes } from "../types"

function* fetchNews({payload}: fetchNewsType) {
  try {
    yield put(newsActions.newsLoading())
    const { news } = yield call(requests.newsGet,payload)
    yield put(newsActions.newsReceived(news))
  } catch {
    yield put(newsActions.newsFail())
  }
}

function* fetchSearchNews({ payload }: FetchSearchNews) {
  try {
    yield put(newsActions.newsLoading())
    const { news } = yield call(requests.newsSearch, payload)
    yield put(newsActions.newsReceived(news))
  } catch {
    yield put(newsActions.newsFail())
  }
}

export function* newsWatcher() {
  yield takeEvery(ActionTypes.FETCHNEWS, fetchNews)  
  yield takeEvery(ActionTypes.SEARCHNEWS,fetchSearchNews)
}
