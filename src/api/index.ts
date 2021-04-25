import axios from "axios"
import { ResponceType } from "../@types/responce"

const instance = axios.create({
  baseURL: `https://api.currentsapi.services/v1/`,
})

export const REQUEST_NEWS = {
  getNews(){
    return instance.get<ResponceType>('latest-news?apiKey=yqE6vMJQ_Sb058S1bUOifx1UQGI8OzlE1zTbqcy33jElxQdB')
  }
}
