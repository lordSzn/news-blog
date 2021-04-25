import {  useEffect, useState } from 'react';



export const useLoadingPart = (length: number,count: number, callback: Function)=>{
  const [loading,setLoading] = useState<number>(count)
  useEffect(()=>{
    const scrollHandler = (e: any)=>{
      if (e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop + window.innerHeight < 100 && length >= loading)  {
         setLoading((prev)=> prev + count)
      }
     } 
    document.addEventListener('scroll',scrollHandler)
    return ()=>{
      document.removeEventListener('scroll',scrollHandler)
    }
  },[count, length, loading])
  callback()
  return loading
}
