import React, {useEffect} from 'react';
import {Redirect} from "react-router-dom"
import {useDispatch} from "react-redux";
import {isAuth} from "../redux/actions";
import {useHistory} from "react-router-dom";

export default function RequireAuth(Component) {
  return function Guard({...props}) {
    const dispatch = useDispatch()
    const hasToken = localStorage.getItem("accessToken")
    const history = useHistory()

    useEffect( () => {
      dispatch(isAuth(history))
    }, []);

    return (
      <>
        {hasToken ? <Component {...props}/> : <Redirect to={"/signin"}/>}
      </>
    )
  }
}



