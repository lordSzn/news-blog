import { call, put, takeEvery } from "@redux-saga/core/effects"
import { REQUEST_NEWS } from "../../../api"
import { newsLoading,newsReceived } from "./../reducer"

export function* fetchNews() {
  try {
    yield put(newsLoading())
    const {data} = yield call(REQUEST_NEWS.getNews)
    yield put(newsReceived(data.news))
  } catch (e) {}
}
export function* newsWatcher() {
  yield takeEvery("fetchNews", fetchNews)
}
