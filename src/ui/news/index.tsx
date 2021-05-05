import { FC, SyntheticEvent } from "react"

import { NewsType } from "../../@types/entity"
import { Avatar } from "../avatar/index"
import style from "./style.module.scss"

export const News: FC<NewsType> = ({
  author,
  description,
  image,
  published,
  url,
}) => {
  const date = new Date(Date.parse(published)).toString()
  const errorEventHandler = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = "none"
  }
  return (
    <div className={style.news}>
      <div className={style.newsContainer}>
        <div className={style.newsDescribe}>
          <Avatar author={author} />
          <ul>
            <li className={style.newsPublisher}>{author}</li>
            <li className={style.newsDate}>{date}</li>
          </ul>
        </div>
      </div>
      {image !== "None" ? (
        <div className={style.newsPrewie}>
          <img src={image} alt="" onError={errorEventHandler} />
        </div>
      ) : null}
      <div className={style.newsContainer}>
        <p>{description}</p>
        <div className={style.contentBottom}>
          <a className={style.newsLearnMore} href={url} target="noopener">
            learn more
          </a>
          <button className={style.follow}>
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
