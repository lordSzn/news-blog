import { ActionTypes } from "./types"
export { newsLoading, newsReceived, newsFail } from "./reducer"

 interface fetchNewsType {
  type: ActionTypes.FETCHNEWS
}
export interface FetchSearchNews {
  type: ActionTypes.SEARCHNEWS
  payload: string
}
export const fetchNews = (): fetchNewsType => ({ type: ActionTypes.FETCHNEWS })

export const searchNews = (payload: string): FetchSearchNews => ({
  type: ActionTypes.SEARCHNEWS,
  payload,
})
