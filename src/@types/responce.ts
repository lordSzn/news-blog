import { NewsType } from './entity';


export interface ResponceType{
  status: 'ok' | 'error'
  news: NewsType[]
}