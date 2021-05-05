import { ActionTypes, fetchCategoryType } from './types';

export {categoryLoading,categoryReceived,categoryFailLoading} from './reducer'

export const fetchCategory = ():fetchCategoryType=> ({type: ActionTypes.FETCH_CATEGORY })