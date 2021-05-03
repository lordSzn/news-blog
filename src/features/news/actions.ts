import { ActionTypes } from "./types";
export {newsLoading, newsReceived,newsFail} from './reducer'

interface fetchNewsType{
  type: ActionTypes.FETCHNEWS
}
export const fetchNews = (): fetchNewsType =>({type: ActionTypes.FETCHNEWS})