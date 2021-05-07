import { useEffect } from "react"
import { useHistory } from "react-router"

import "./assets/styles/nullstyle.scss"
import { Footer, Header, Main, Wrapper } from "./layout"
import { Routes } from "./pages/routes"

export function App() {
  const history = useHistory()
  const language = navigator.language.split("-")[0]
  useEffect(() => {
    if (window.location.pathname === "/") {
      history.push(`${language}/news`)
    }
  }, [history, language])
  return (
    <Wrapper>
      <Header />
      <Main>
        <Routes />
      </Main>
      <Footer />
    </Wrapper>
  )
}