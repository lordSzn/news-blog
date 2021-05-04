import { FC } from "react"
import style from "./style.module.scss"


export const Main: FC = ({ children }) => {
  return (
    <main className={style.content}>
      <div className={style.container}>
        {children}
      </div>
    </main>
  )
}
