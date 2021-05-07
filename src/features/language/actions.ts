import { Action } from 'redux';

import { ActionType } from './types';
export {languagesLoading,languagesReceived,languagesLoadingFail} from './reducer'

interface FetchLanguge extends Action<ActionType>{
  type: ActionType.fetchLanguage,
}
export const fetchLanguge = ():FetchLanguge => ({type: ActionType.fetchLanguage})