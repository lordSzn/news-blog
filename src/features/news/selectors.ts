import { RootStateType } from './../../lib/store/store';


const everyThing = (state: RootStateType)=> state.news
export const news = (state: RootStateType) => everyThing(state).news
export const loading = (state: RootStateType)=> everyThing(state).loading


