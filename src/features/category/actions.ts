import { ActionTypes } from './types';

export {categoryLoading,categoryReceived,categoryFailLoading} from './reducer'

interface fetchCategoryType{
  type: ActionTypes.FETCH_CATEGORY
}
export const fetchCategory = ():fetchCategoryType=> ({type: ActionTypes.FETCH_CATEGORY })