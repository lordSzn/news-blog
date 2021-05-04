import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { categoryActions, categorySelectors } from "../../features"
import { useAction } from "../../lib/store/hooks/index"

import style from "./style.module.scss"


export const SideMenu = () => {
  const {fetchCategory} = useAction(categoryActions)
  const category = useSelector(categorySelectors.category)
  const loadingStatus = useSelector(categorySelectors.loadingStatus)
  useEffect(() => {
    if (loadingStatus === 'idle'){
      fetchCategory()
    }
  }, [fetchCategory, loadingStatus])
  return (
    <aside className={style.sideMenu}>
      <ul className={style.list}>
        <li className={style.title}>Category</li>
        {category.map((category, index) => (
          <li className={style.link}>
            <Link to="/">lifestyle</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
