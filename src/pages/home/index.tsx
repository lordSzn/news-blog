import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"

import { newsActions, newsSelectors } from "../../features"
import { Main } from "../../layout"
import { useAction } from "../../lib/store/hooks/index"
import { Loader, News } from "../../ui"
import style from "./style.module.scss"

interface ParamsType {
  language: string
}

export const Home = () => {
  const { language }: ParamsType = useParams()
  const { fetchNews } = useAction(newsActions)
  const loadingStatus = useSelector(newsSelectors.loading)
  const news = useSelector(newsSelectors.news)
  useEffect(() => {
    fetchNews(language)
  }, [fetchNews, language])
  if (loadingStatus === "pending") {
    return (
      <div className={style.loaderCenter}>
        <Loader />
      </div>
    )
  }
  if (loadingStatus === "fail") {
    return <div>An error has occurred 😰 </div>
  }
  return (
    <Main>
      {news.map((n) => (
        <News key={n.id} {...n} />
      ))}
    </Main>
  )
}
