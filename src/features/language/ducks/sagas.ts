import { call } from "@redux-saga/core/effects"
import { ActionType } from "./../types"
import { put } from "@redux-saga/core/effects"
import { takeEvery } from "redux-saga/effects"
import { languageActions } from "../"
import { requests } from "../../../api"

function* fetchLanguages() {
  try {
    yield put(languageActions.languagesLoading())
    const { languages } = yield call(requests.languageGet)
    yield put(languageActions.languagesReceived(languages))
  } catch (e) {
    yield put(languageActions.languagesLoadingFail())
  }
}

export function* languageWatcher() {
  yield takeEvery(ActionType.fetchLanguage, fetchLanguages)
}
