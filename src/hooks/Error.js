import { useReducer } from "react"

const searchReducer = (state,action)=>{
    if(action.type === 'COMPLETED'){
      return {error:null,status:'completed'}
    }
    if(action.type === 'ERROR'){
      return {error:action.error,status:'completed'}
    }
    if(action.type === 'PENDING'){
      return {error:null,status:'pending'}
    }
  
    return {error:null,status:null};
  }

  
const useError = ()=>{
  const [State,Dispatch] = useReducer(searchReducer,{error:null,status:null});

  return {State,Dispatch};
}   

export default useError;