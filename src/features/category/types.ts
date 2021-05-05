import { Action } from 'redux';
export enum ActionTypes{
  FETCH_CATEGORY = 'CATEGORY/FETCH_CATEGORY'
}
export interface fetchCategoryType extends Action<ActionTypes>{
  type: ActionTypes.FETCH_CATEGORY
}