import { RootStateType } from './../../lib/store/store';

export const everyThing = (state: RootStateType) => state.category

export const categorySelectors = (state: RootStateType)=> everyThing(state)
export const category = (state: RootStateType) => everyThing(state).category
export const loadingStatus = (state: RootStateType)=>everyThing(state).status