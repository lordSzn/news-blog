import {  useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { newsSelectors } from "../../features"
import { Footer, Main } from "../../layout/index"
import { Header } from "../../layout/index"
import { Loader, News } from "../../ui"
import style from "./style.module.scss"

export const Home: React.FC = () => {
  const dispatch = useDispatch()
  const loadingStatus = useSelector(newsSelectors.loading)
  const news = useSelector(newsSelectors.partNews)
  useEffect(() => {
    if (loadingStatus === 'idle'){
      dispatch({type: 'fetchNews'})
    }
  }, [dispatch,loadingStatus])
  if (loadingStatus === 'pending'){
    return (
      <div className={style.loaderCenter}>
        <Loader/>
      </div>
    )
  }
  return (
    <div className={style.wrapper}>
      <Header />
        <Main>
          {
            news.map(n=><News key={n.id} {...n}/>)
          }
        </Main>
      <Footer />
    </div>
  )
}

