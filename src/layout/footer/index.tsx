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
          <a href="https://risen.dev/posts/my-perfect-redux-architecture/"
          target="noopener"
          >
           Source 
          </a>
          <a href="https://github.com/feature-sliced"
          target="noopener"
          >
           feature-sliced 
          </a>
        </div>
        <div className={style.column}>
          <div className={style.columnTitle}>Social network</div>
          <ul className={style.listSocial}>
            <li>
              <a href="https://twitter.com/RKuzhin" target="noopener">
                <i className="fab fa-twitter"></i>
                My Twitter
              </a>
            </li>
            <li>
              <a href="https://vk.com/zxqqqqqqq" target="noopener">
                <i className="fab fa-vk"></i>
                My VK
              </a>
            </li>
            <li>
              <a href="https://github.com/robert200222" target="noopener">
                <i className="fab fa-github"></i>
                My github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
