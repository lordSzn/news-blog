import style from "./style.module.scss"

export const Avatar = ({ author }: { author: string }) => {
  if (!author) return null
  const name = author[0] === "@" ? author[1] : author[0]
  return <div className={style.newsAuthorAvatar}>{name}</div>
}
