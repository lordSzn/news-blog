import axios from "axios"
import { ResponceCategoryType, ResponceLanguagesType, ResponceNewsType } from "../@types/responce"

const instance = axios.create({
  baseURL: `https://api.currentsapi.services/v1`,
})

export const REQUEST = {
  getNews(){
    return instance.get<ResponceNewsType>(`/latest-news?apiKey=yqE6vMJQ_Sb058S1bUOifx1UQGI8OzlE1zTbqcy33jElxQdB`)
  },
  getLanguages(){
    return instance.get<ResponceLanguagesType>(`/available/languages`)
  },
  getCategory(){
    return instance.get<ResponceCategoryType>(`/available/category`)
  },
  searchNews(keywords: string){
    return instance.get<ResponceNewsType>(`/search?apiKey=yqE6vMJQ_Sb058S1bUOifx1UQGI8OzlE1zTbqcy33jElxQdB&keywords=${keywords}`)
  }
}
