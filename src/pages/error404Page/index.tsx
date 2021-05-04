import style from './style.module.scss'

export function Error404Page(){
  return(
    <div className={style.error}>
      <div>page not found</div>
    </div>
  )
}