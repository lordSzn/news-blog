import { call, put, takeEvery } from "@redux-saga/core/effects";
import { categoryActions } from "..";
import { REQUEST } from "../../../api";
import { ActionTypes } from "../types";


export function* fetchCategory(){
  try{
    yield put(categoryActions.categoryLoading())
    const {data} = yield call(REQUEST.getCategory)
    yield put(categoryActions.categoryReceived(data.category))
  }catch(e){
    yield put(categoryActions.categoryFailLoading('error'))
  }
}
export function* categoryWather(){
  yield takeEvery(ActionTypes.FETCH_CATEGORY,fetchCategory)
}