import { useDispatch } from "react-redux"
import { useEffect } from "react"

export const useDebounce = (
  value: string,
  delay: number,
  action: (text: string) => void
): void => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (!value) return
    const handler = setTimeout(() => {
      dispatch(action(value))
    }, delay)
    return () => clearTimeout(handler)
  }, [action, delay, dispatch, value])
}
