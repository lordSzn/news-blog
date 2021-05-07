import {
  ResponceNewsType,
  ResponceLanguagesType,
  ResponceCategoryType,
} from "./../@types/responce"
import { request } from "./config"

export const newsGet = (language: string) =>
  request<ResponceNewsType>({
    method: "get",
    url: `/latest-news?language=${language}&apiKey=yqE6vMJQ_Sb058S1bUOifx1UQGI8OzlE1zTbqcy33jElxQdB`,
  })
export const languageGet = () =>
  request<ResponceLanguagesType>({
    method: "get",
    url: `/available/languages`,
  })
export const categoryGet = () =>
  request<ResponceCategoryType>({
    method: "get",
    url: `/available/category`,
  })
export const newsSearch = (keywords: string) =>
  request<ResponceNewsType>({
    method: "get",
    url: `/search?apiKey=yqE6vMJQ_Sb058S1bUOifx1UQGI8OzlE1zTbqcy33jElxQdB&keywords=${keywords}`,
    timeout: 4000,
  })