import { useSelector } from "react-redux"

import { Link } from "react-router-dom"
import { categorySelectors } from "../../features"
import style from "./style.module.scss"


export const SideMenu = () => {
  const category = useSelector(categorySelectors.category)
  return (
    <aside className={style.sideMenu}>
      <ul className={style.list}>
        <li className={style.title}>Category</li>
        {category.map((category) => (
          <li key={category} className={style.link}>
            <Link to={(locatin) => `${locatin.pathname}?category=${category}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
