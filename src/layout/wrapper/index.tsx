import { FC } from "react";

import style from './style.module.scss'

export const Wrapper:FC = ({children})=>{
  return (
    <div className={style.wrapper}>
      {children}
    </div>
  )
}