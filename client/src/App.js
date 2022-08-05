import React from 'react';
import Headers from './components/Headers';
import Balance from './components/Balance'
import Expense from './components/IncomeExpenses'
import TransactionList from './components/Transactionlist'
import AddTransaction from './components/AddTransaction'
import GlobalProvider from './Context/GlobalState'
import './App.css'

const App = () => {
  return(
  <GlobalProvider>
   <Headers/>
   <div className = 'container'>
      <Balance/>
      <Expense/>
      <TransactionList/>
      <AddTransaction/>
   </div>
  </GlobalProvider>
  )
}
export default App;
