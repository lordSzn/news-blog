import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootStateType } from './../../lib/store/store';


const everyThing = (state: RootStateType)=> state.news
export const news = (state: RootStateType) => everyThing(state).news
export const loading = (state: RootStateType)=> everyThing(state).loading


export const favorites = (id: string) => {
  return createDraftSafeSelector(
    news,
    items => items.filter(n => n.id !== id)
  )
}

