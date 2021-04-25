import style from './style.module.scss'

//TODO will add form
export function SearchInput(){
  return(
    <form className={style.search}>
      <input className={style.searchTxt} type="text" placeholder="Type to search"/>
      <button type="submit">
        <i className="fas fa-search "></i>
      </button>
    </form>
  )
}