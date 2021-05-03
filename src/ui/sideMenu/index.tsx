import { Link } from 'react-router-dom'

import style from './style.module.scss'


export const SideMenu = () => {
  return (
    <aside className={style.sideMenu}>
      <ul className={style.list}>
        <li className={style.title}>
          Category
          </li>
        <li className={style.link}>
          <Link to="/">lifestyle</Link>
        </li>
        <li className={style.link}>
          <Link to="/">lifestyle</Link>
        </li>
        <li className={style.link}>
          <Link to="/">lifestyle</Link>
        </li>
        <li className={style.link}>
          <Link to="/">Show more</Link>
        </li>
      </ul>
    </aside>
  )
}
