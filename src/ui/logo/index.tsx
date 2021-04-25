import style from './style.module.scss'

export function Logo() {
  return (
    <div className={style.body} >
      <div className={style.Logo}></div>
      <div className={style.Title}>News Today</div>
    </div>
  )
}
