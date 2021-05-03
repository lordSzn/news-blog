import { useEffect } from "react"
import { useSelector } from "react-redux"
import { newsActions, newsSelectors } from "../../features"
import { Footer, Main } from "../../layout/index"
import { Header } from "../../layout/index"
import { useAction } from "../../lib/store/hooks/useActions"
import { Loader, News } from "../../ui"
import style from "./style.module.scss"

export const Home = () => {
  const { fetchNews } = useAction(newsActions)
  const loadingStatus = useSelector(newsSelectors.loading)
  const news = useSelector(newsSelectors.partNews)
  useEffect(() => {
    if (loadingStatus === "idle") {
      fetchNews()
    }
  }, [fetchNews, loadingStatus])
  if (loadingStatus === "pending") {
    return (
      <div className={style.loaderCenter}>
        <Loader />
      </div>
    )
  }
  return (
    <div className={style.wrapper}>
      <Header />
      <Main>
        {
          // news.map(n=><News key={n.id} {...n}/>)
        }
      </Main>
      <Footer />
    </div>
  )
}
