import { ActionTypes, fetchNewsType, FetchSearchNews } from "./types"
export { newsLoading, newsReceived, newsFail } from "./reducer"

//TODO подумать над структурой
export const fetchNews = (): fetchNewsType => ({ type: ActionTypes.FETCHNEWS })
export const searchNews = (payload: string): FetchSearchNews => ({
  type: ActionTypes.SEARCHNEWS,
  payload,
})
