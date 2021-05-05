import React, { useState } from "react"
import { newsActions } from "../../features"
import { useAction, useDebounce } from "../../lib/store/hooks"
import style from "./style.module.scss"

export function SearchInput() {
  const [value, setValue] = useState<string>("")
  const { searchNews } = useAction(newsActions)
  useDebounce(value, 1000, searchNews)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
    e.preventDefault()
  return (
    <form  className={style.search} onSubmit={handleSubmit}>
      <input
        className={style.searchTxt}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        type="search"
        placeholder="Type to search"
      />
      <i className="fas fa-search "></i>
    </form>
  )
}
