import { FC } from "react"
import { NewsType } from "../../@types/entity"
import { Avatar } from "../avatar/index"
import style from "./style.module.scss"



export const News: FC<NewsType> = ({
  title,
  author,
  description,
  image,
  published,
  url,
}) => {
  const date = new Date(Date.parse(published)).toString()
  return (
    <div className={style.news}>
      <div className={style.newsContainer}>
        <div className={style.newsDescribe}>
          <Avatar author={author}/>
          <ul>
            <li className={style.newsPublisher}>{author}</li>
            <li className={style.newsDate}>{date}</li>
          </ul>
        </div>
      </div>
      <div className={style.newsPrewie}>
       <img src={image} alt=""/>    
      </div>
      <div className={style.newsContainer}> 
        <p>{description}</p>
        <a className={style.newsLearnMore} href={url} target="noopener">
          learn more
        </a>
      </div>
    </div>
  )
}
