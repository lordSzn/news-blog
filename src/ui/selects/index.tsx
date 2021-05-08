import { FormEvent, useEffect } from "react"
import { useSelector } from "react-redux"

import { languageActions, languagesSelectors } from "../../features"
import { useAction } from "../../lib/store/hooks"
import style from "./style.module.scss"

export const Select = () => {
  const { fetchLanguge } = useAction(languageActions)
  const languages = useSelector(languagesSelectors.language)
  useEffect(() => {
    fetchLanguge()
  }, [fetchLanguge])
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault()
  const handleChangeLanguages = (e: FormEvent<HTMLSelectElement>) => {
    window.location.pathname = `${e.currentTarget.value}/news`
  }
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      {languages && (
        <div>
          <select
            name="language"
            id="lang"
            onChange={handleChangeLanguages}
            className={style.select}
          >
            {Object.entries(languages).map((item) => (
              <option key={item.toString()} value={item[1]}>
                {item[0]}
              </option>
            ))}
          </select>
        </div>
      )}
    </form>
  )
}
