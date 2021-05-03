import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {ActionCreatorsMapObject, bindActionCreators } from "redux";


export function useAction(action: ActionCreatorsMapObject){
 const dispatch = useDispatch()
 const boundActions = useMemo(()=>{
   return bindActionCreators(action,dispatch)
 },[action,dispatch])
 return boundActions
}