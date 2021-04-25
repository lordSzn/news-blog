import { Route, Switch } from "react-router";
import { Error404Page } from "./pages/error404Page";
import { Home } from "./pages/home";



export const routeList = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '*',
    component: Error404Page
  }
]
export const Routes = () => {
  return(
    <Switch>
      {
        routeList.map((route,i)=><Route key={i} {...route}/>)
      }
    </Switch>
  )
}