import { RootStateType } from './../../lib/store/store';


export const everyThing = (state: RootStateType)=> state.news
export const newsSelector = (state: RootStateType)=>everyThing(state)
export const news = (state: RootStateType) => everyThing(state).news
export const loading = (state: RootStateType)=> everyThing(state).loading


