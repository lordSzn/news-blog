import { FC } from "react"

import { SideMenu } from "../../ui"
import style from "./style.module.scss"

export const Main: FC = ({ children }) => {
  return (
    <main className={style.content}>
      <div className={style.container}>
        <SideMenu />
        <section>{children}</section>
      </div>
    </main>
  )
}
