import { useEffect } from "react"

export const useDebounce = (
  value: string,
  delay: number,
  action: (text: string) =>void
): void => {
  useEffect(() => {
    if (!value) return
    const handler = setTimeout(() => {
      action(value)
    }, delay)
    return () => clearTimeout(handler)
  }, [action, delay, value])
}
