import { fetchNewsType, FetchSearchNews } from "./../types"
import { call, put, takeEvery } from "@redux-saga/core/effects"
import { newsActions } from ".."
import { REQUEST } from "../../../api"
import { ActionTypes } from "../types"

function* fetchNews({payload}: fetchNewsType) {
  try {
    yield put(newsActions.newsLoading())
    const { data } = yield call(REQUEST.getNews,payload)
    yield put(newsActions.newsReceived(data.news))
  } catch {
    yield put(newsActions.newsFail())
  }
}

function* fetchSearchNews({ payload }: FetchSearchNews) {
  try {
    yield put(newsActions.newsLoading())
    const { data } = yield call(REQUEST.searchNews, payload)
    yield put(newsActions.newsReceived(data.news))
  } catch {
    yield put(newsActions.newsFail())
  }
}

export function* newsWatcher() {
  yield takeEvery(ActionTypes.FETCHNEWS, fetchNews)  
  yield takeEvery(ActionTypes.SEARCHNEWS,fetchSearchNews)
}
