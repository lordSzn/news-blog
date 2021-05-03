import { NewsType } from './entity';


export interface ResponceNewsType{
  status: 'ok' | 'error'
  news: NewsType[]
}
export interface ResponceLanguagesType{
  languages: string[]
  description: string
  status: 'ok' | 'error'
}
export interface ResponceCategoryType{
  categories: string[]
  description: string
  status: 'ok' | 'error'
}