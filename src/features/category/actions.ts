import { Action } from 'redux';
import { ActionTypes } from './types';


export {categoryLoading,categoryReceived,categoryFailLoading} from './reducer'


export interface fetchCategoryType extends Action<ActionTypes>{
  type: ActionTypes.FETCH_CATEGORY
}
export const fetchCategory = ():fetchCategoryType=> ({type: ActionTypes.FETCH_CATEGORY })