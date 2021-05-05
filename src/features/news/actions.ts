import { ActionTypes, fetchNewsType, FetchSearchNews } from "./types"
export { newsLoading, newsReceived, newsFail } from "./reducer"

//TODO подумать над структурой
export const fetchNews = (payload: string): fetchNewsType => ({ type: ActionTypes.FETCHNEWS ,payload})
export const searchNews = (payload: string): FetchSearchNews => ({
  type: ActionTypes.SEARCHNEWS,
  payload,
})
