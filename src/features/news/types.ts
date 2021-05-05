import { Action } from "redux";

export enum ActionTypes {
  FETCHNEWS = 'NEWS/FETCHNEWS',
  FAILNEWS = 'NEWS/FAILNEWS',
  SEARCHNEWS = 'NEWS/SEARCHNEWS'
}

export interface fetchNewsType extends Action<ActionTypes>{
  type: ActionTypes.FETCHNEWS
}
export interface FetchSearchNews extends Action<ActionTypes>{
  type: ActionTypes.SEARCHNEWS
  payload: string
}