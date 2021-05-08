import { Logo, SearchInput } from "../../ui"
import style from "./style.module.scss"

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerBody}>
        <div className={style.headerLeft}>
          <Logo/>
        </div>
        <div className={style.headerRight}>
          <SearchInput/>
        </div>
      </div>
    </header>
  )
}
