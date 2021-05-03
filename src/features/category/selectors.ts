import { RootStateType } from './../../lib/store/store';

export const everyThing = (state: RootStateType) => state.category

export const category = (state: RootStateType)=> everyThing(state)