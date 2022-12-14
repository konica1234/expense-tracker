import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

//Initial state

const initialState = {
  transactions : [],
  error : null,
  loading: true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

  const [state,dispatch] = useReducer(AppReducer,initialState)


  async function getTransactions() {
    try{
     const res = await axios.get('/api/')
     console.log(res.data)
     dispatch({
       type: 'GET_TRANSACTIONS',
       payload : res.data.data
     })
    }
    catch(err){
       console.log(err)
       dispatch({
         type: 'TRANSACTION_ERROR',
         payload : err.response.data.error
       })
    }
  }

  async function deleteTransaction(id) {
  try{
    await axios.delete(`/api/${id}`)
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload : id
    })
  }
  catch(err){
   console.log(err)
       dispatch({
         type: 'TRANSACTION_ERROR',
         payload : err.response.data.error
       })
  }
  }
  async function addTransaction(transaction) {
    const config = {
     headers: {
       'Content-Type':'application/json',
     }
    }
    try{
      const res = await axios.post('/api/',transaction,config)

      dispatch({
      type: 'ADD_TRANSACTION',
      payload : res.data.data
    })
    }
    catch(err){
      dispatch({
         type: 'TRANSACTION_ERROR',
         payload : err.response.data.error
       })
    }
  }
  return(
  <GlobalContext.Provider value = {{
  transactions: state.transactions,
  getTransactions,
  deleteTransaction,
  error: state.error,
  loading: state.loading,
  addTransaction,
   }}>
  {children}
  </GlobalContext.Provider>
  )}

export default GlobalProvider;
