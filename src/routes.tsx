import { FC } from "react";
import { Route, Switch } from "react-router";
import { Error404Page } from "./pages/error404Page";
import { Home } from "./pages/home";

interface RouteItemsType{
  path?: string
  name?: string
  isProtected?: boolean
  component?: FC
  exact?:boolean
}

export const routeList:RouteItemsType[] = [
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