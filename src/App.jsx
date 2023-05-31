import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { List } from "./components/List"
import { TotalMoney } from "./components/TotalMoney"

export const App = () => {
  return (
    <>
      <Header />
      <Form />
      <TotalMoney />
      <List />
    </>
  )
}
