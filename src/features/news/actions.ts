import { ActionTypes } from "./types";



interface fetchNewsType{
  type: ActionTypes.FETCHNEWS
}
export const action = (): fetchNewsType =>({
  type: ActionTypes.FETCHNEWS
})