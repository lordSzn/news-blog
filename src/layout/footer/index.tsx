import { Logo } from "../../ui"
import style from "./style.module.scss"

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.Body}>
        <div className={style.column}>
          <div className={style.body}>
            <div className={style.Logo}></div>
            <div className={style.Title}>News Today</div>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.columnTitle}>О проекте</div>
          <a
            href="https://currentsapi.services/en/docs/authentication"
            target="noopener"
          >
            Current Api
          </a>
          <a
            href="https://github.com/public-api-lists/public-api-lists"
            target="noopener"
          >
            List api
          </a>
        </div>
        <div className={style.column}>
          <div className={style.columnTitle}>Social network</div>
          <ul>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-vk"></i>
            </li>
            <li>
              <i className="fab fa-github"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
//
//  <a href="https://github.com/robert200222" target="noopener">
//GitHub
//</a>
///
