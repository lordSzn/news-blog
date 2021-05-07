import { Action } from "redux";

import { ActionTypes } from "./types"
export { newsLoading, newsReceived, newsFail } from "./reducer"



export interface fetchNewsType extends Action<ActionTypes>{
  type: ActionTypes.FETCHNEWS
  payload: string
}
export const fetchNews = (payload: string): fetchNewsType => ({ type: ActionTypes.FETCHNEWS ,payload})


export interface FetchSearchNews extends Action<ActionTypes>{
  type: ActionTypes.SEARCHNEWS
  payload: string
}
export const searchNews = (payload: string): FetchSearchNews => ({
  type: ActionTypes.SEARCHNEWS,
  payload,
})
