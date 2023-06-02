import { useState } from "react"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { List } from "./components/List"
import { TotalMoney } from "./components/TotalMoney"
import { GlobalStyle } from "./style/globalStyles"
import { Reset } from "./style/reset"

export const App = () => {

  const [transactionList, setTransactionList] = useState([])
  console.log(transactionList)
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet"></link>
      <Reset />
      <GlobalStyle />
      <Header />
      <main>
        <section id="left-container">
          <Form setTransactionList={setTransactionList} />
          <TotalMoney transactionList={transactionList} />
        </section>
        <List transactionList={transactionList} setTransactionList={setTransactionList}/>
      </main>
      <div id="end"></div>
    </>
  )
}
