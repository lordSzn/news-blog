import { useEffect } from "react"
import { useHistory } from "react-router"

import "./assets/styles/nullstyle.scss"
import { Footer, Header, Wrapper } from "./layout"
import { Routes } from "./routes"

export function App() {
  const history = useHistory()
  const language = navigator.language.split("-")[0]
  useEffect(() => {
    if (window.location.pathname === "/") {
      history.push(`news/${language}`)
    }
  }, [history, language])
  return (
    <Wrapper>
      <Header />
      <Routes />
      <Footer />
    </Wrapper>
  )
}
