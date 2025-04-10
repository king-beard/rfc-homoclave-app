import { useEffect, useState } from "react"

export const useFetch = ( url, request ) => {

  const [state, setState] = useState({
    data : null,
    isLoading : true,
    hasError : null
  })

  const getFetch = async () => {
    setState({ ...state, isLoading : true })
    const res = await fetch( url, request )
    const data = await res.json()
    setState({ data, isLoading : false, hasError : null })
  }
  
  useEffect(() => {
    getFetch()
  }, [url])
  

  return {
    data :  state.data,
    isLoading :  state.isLoading,
    hasError :  state.hasError
  }
}