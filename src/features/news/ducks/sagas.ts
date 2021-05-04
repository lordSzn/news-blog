import { FetchSearchNews } from "./../actions"
import { call, put, takeEvery } from "@redux-saga/core/effects"
import { Action } from "redux"
import { newsActions } from ".."
import { REQUEST } from "../../../api"
import { ActionTypes } from "../types"

function* fetchNews() {
  try {
    yield put(newsActions.newsLoading())
    const { data } = yield call(REQUEST.getNews)
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
//TODO статусы загрузки не правильно спроектированы
export function* newsWatcher() {
  yield takeEvery(ActionTypes.FETCHNEWS, fetchNews)  
}
