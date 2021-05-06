import { call, put, takeEvery } from "@redux-saga/core/effects";
import { categoryActions } from "..";
import { requests } from "../../../api/index";
import { ActionTypes } from "../types";


export function* fetchCategory(){
  try{
    yield put(categoryActions.categoryLoading())
    const {category} = yield call(requests.categoryGet)
    yield put(categoryActions.categoryReceived(category))
  }catch(e){
    yield put(categoryActions.categoryFailLoading('error'))
  }
}
export function* categoryWather(){
  yield takeEvery(ActionTypes.FETCH_CATEGORY,fetchCategory)
}