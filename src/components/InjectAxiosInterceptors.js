import {useSelector} from "react-redux";
import {setupInterceptors} from "../api/Axios";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";


export default function InjectAxiosInterceptors () {
  const history = useHistory()
  const store = useSelector((state) => state)
  useEffect(() => {
    setupInterceptors(history, store)
  }, [history, store]);

  return null
}